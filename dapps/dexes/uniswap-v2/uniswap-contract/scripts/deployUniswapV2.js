const {ethers} = require("hardhat");

/*
* uniswap-contract deploy step 1
* we need get factory_addr and init_pair_code_hash
* */
async function main() {

    // step 1 factory
    const [owner] = await ethers.getSigners();
    console.log("owner address:", owner.address)
    // factory 中添加 public constant INIT_CODE_PAIR_HASH = keccak256(abi.encodePacked(type(UniswapV2Pair).creationcode));
    const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
    uniswapV2Factory = await UniswapV2Factory.deploy(owner.address);
    console.log(`uniswapV2Factory deployed to ${uniswapV2Factory.target}`);
    const factoryAddr = uniswapV2Factory.target;
    // 等待 AxiomLedger 出块获取完整回执
    await sleep(1000);
    // 获取 INIT_CODE_PAIR_HASH
    const initCodePairHash = await uniswapV2Factory.INIT_CODE_PAIR_HASH();
    console.log("INIT_CODE_PAIR_HASH:", initCodePairHash);

    // step 2 router2
    const WETH9 = await ethers.getContractFactory("WETH9");
    weth9 = await WETH9.deploy();
    console.log(`weth9 deployed to ${weth9.target}`);

    const weth9Addr = weth9.target
    const UniswapV2Router02 = await ethers.getContractFactory("UniswapV2Router02");
    router = await UniswapV2Router02.deploy(factoryAddr, weth9Addr);
    console.log(`UniswapV2Router02 deployed to ${router.target}`);

    // step 3 router1
    const UniswapV2Router01 = await ethers.getContractFactory("UniswapV2Router01");
    router1 = await UniswapV2Router01.deploy(factoryAddr, weth9Addr);
    console.log(`UniswapV2Router01 deployed to ${router1.target}`);

    // step 4 multicall
    const MulticallForUni = await ethers.getContractFactory("MulticallForUni");
    multicall = await MulticallForUni.deploy();
    console.log(`MulticallForUni deployed to ${multicall.target}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
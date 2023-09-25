const {hre, artifacts, ethers} = require("hardhat");

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
    // 获取部署合约的账户
    const [owner] = await ethers.getSigners();
    console.log(`owner address is ${owner.address}`)

    const mintAmount = ethers.getUint("1000000000000000000000000"); // 1000000 10^18

    const AxmToken1 = await ethers.getContractFactory("AxiomToken")
    const axmToken1 = await AxmToken1.deploy("AxiomToken1", "AX1", mintAmount)
    const axmToken2 = await AxmToken1.deploy("AxiomToken2", "AX2", mintAmount)
    const axmToken3 = await AxmToken1.deploy("AxiomToken3", "AX3", mintAmount)
    console.log(`AXMTOKEN1_ADDR: ${axmToken1.target}`);
    console.log(`AXMTOKEN2_ADDR: ${axmToken2.target}`);
    console.log(`AXMTOKEN3_ADDR: ${axmToken3.target}`);

    const Token1 = await ethers.getContractFactory("Dai");
    const token1 = await Token1.deploy(23411);

    console.log(`Dai deployed to ${token1.target}`);
    const Token2 = await ethers.getContractFactory("TetherToken");
    const token2 = await Token2.deploy(mintAmount, "USD//C", "USDC", 6)
    console.log(`USDC deployed to ${token2.target}`);

    const token3 = await Token2.deploy(mintAmount, 'Tether USD', 'USDT', 6)
    console.log(`USDT deployed to ${token3.target}`);

    const Token3 = await ethers.getContractFactory("Comp");
    const token4 = await Token3.deploy(owner.address)
    console.log(`COMP deployed to ${token4.target}`);

    await sleep(1000);
    const Token4 = await ethers.getContractFactory("DSToken")
    const byte = ethers.encodeBytes32String("MKR")
    const token5 = await Token4.deploy(byte)
    console.log(`MKR deployed to ${token5.target}`);

    const token6 = await Token2.deploy(mintAmount, "Ampleforth", "AMPL", 9)
    console.log(`AMPL deployed to ${token6.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
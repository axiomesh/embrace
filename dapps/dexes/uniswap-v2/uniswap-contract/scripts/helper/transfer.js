const { ethers } = require('hardhat');

async function sendEther() {
    const [to] = await ethers.getSigners();

    // hardhat privateKey (which is public)
    const wallet = new ethers.Wallet('ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', ethers.provider);

    const txDetails = {
        to: to.address,
        value: ethers.parseEther('1000'),
        gasLimit: 21000,
    };

    const txResponse = await wallet.sendTransaction(txDetails);
    console.log(`Transaction hash: ${txResponse.hash}`);

    const receipt = await txResponse.wait();
    console.log(`Transaction confirmed in block: ${receipt.blockNumber}`);
}

sendEther().catch(error => {
    console.error('Error sending Ether:', error);
});

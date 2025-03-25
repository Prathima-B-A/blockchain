require("@nomiclabs/hardhat-ethers");

task("accounts-with-balance", "Print the list of accounts with their balances")
    .setAction(async () => {
        const accounts = await ethers.getSigners();
        for (const account of accounts) {
            const balance = await account.getBalance();
            console.log(`${account.address}: ${ethers.utils.formatEther(balance)} ETH`);
        }
    });
task("accounts-with-balance-greaterthanZero", "Print the list of accounts with balances greater than zero")
    .setAction(async () => {
        const accounts = await ethers.getSigners();
        for (const account of accounts) {
            const balance = await account.getBalance();
            if (balance.gt(0)) {
                console.log(`${account.address}: ${ethers.utils.formatEther(balance)} ETH`);
            }
        }
    });
task("deploy-contract", "Deploys the Example contract")
    .setAction(async () => {
        const Example = await ethers.getContractFactory("Example");
        const example = await Example.deploy();
        await example.deployed();
        console.log(`Contract deployed to ${example.address}`);
    });

task("set-value", "Sets a value in the Example Contract")
    .addParam("address", "The deployed contract address")
    .addParam("value", "The value to set")
    .setAction(async (taskArgs) => {
        const example = await ethers.getContractAt("Example", taskArgs.address);
        const tx = await example.set(taskArgs.value);
        await tx.wait();
        console.log(`Value set to ${taskArgs.value}`);
    });

    task("get-value", "Gets the stored value from the Example Contract")
    .addParam("address", "The deployed contract address")
    .setAction(async (taskArgs, hre) => {
        const example = await hre.ethers.getContractAt("Example", taskArgs.address);
        const value = await example.get();
        console.log(`Stored value: ${value}`);
    });

    // task("get-value", "Gets the stored value from the contract")
    // .addParam("address", "The contract address")
    // .setAction(async (taskArgs, hre) => {
    //     const contract = await hre.ethers.getContractAt("Example", taskArgs.address);

    //     try {
    //         const value = await contract.get();
    //         console.log(Stored value: ${value});
    //     } catch (error) {
    //         console.error("Error fetching value:", error);
    //     }
    // });



module.exports = {
    solidity: "0.8.20",
    networks: { 
        localhost: { 
            url: "http://127.0.0.1:8545", // Local Hardhat blockchain 
        }, 
        sepolia: {
            url: "https://eth-sepolia.g.alchemy.com/v2/ZB3Rw4ZS_WbBsm_RCfgrs7IfZ-V3uDEL",
            accounts: ["0xce25f0186c56aa5747ac3ff80db5c0f8c22bc7bcf2e2eed91b94d223e5803d7a"],
        }
    }, 
};


// 

const { ethers } = require("hardhat");

async function main() {
    // Compile the contract
    const VotingSystem = await ethers.getContractFactory("VotingSystem");

    // Define the candidates
    const candidateNames = ["Alice", "Bob", "Charlie"];

    // Deploy the contract
    const voting = await VotingSystem.deploy(candidateNames);

    // Wait for the deployment to complete
    await voting.deployed();

    console.log("VotingSystem deployed to:", voting.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

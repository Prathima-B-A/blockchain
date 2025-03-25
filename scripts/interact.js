// const hre = require("hardhat");

// async function main() {
//     const [deployer] = await hre.ethers.getSigners();

//     const DynamicArray = await hre.ethers.getContractFactory("DynamicArray");
//     const contract = await DynamicArray.deploy();
//     await contract.deployed();

//     console.log("Contract deployed at:", await contract.address);

//     // Adding numbers to the array
//     let tx = await contract.addNumber(10);
//     await tx.wait();

//     tx = await contract.addNumber(20);
//     await tx.wait();

//     // Fetch numbers and convert to array
//     let numbers = await contract.getNumbers();
//     console.log("Numbers in array:", numbers.map(n => n.toNumber()));

//     // Remove last element
//     tx = await contract.removeLast();
//     await tx.wait();

//     // Fetch updated numbers
//     numbers = await contract.getNumbers();
//     console.log("Numbers after removal:", numbers.map(n => n.toNumber()));
// }

// main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
// });


// Import Hardhat runtime environment
// const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    // Contract Factory for VotingSystem
    const VotingSystem = await hre.ethers.getContractFactory("VotingSystem");

    // Deploy the contract with candidate names
    const candidates = ["Alice", "Bruno", "Charlie"];
    const contract = await VotingSystem.deploy(candidates);
    await contract.deployed();

    console.log("Contract deployed at:",contract.address);

    // Interacting with the contract
    // Cast a vote for candidate at index 1 (Bruno)
    let tx = await contract.vote(1);
    await tx.wait();
    console.log("Vote cast for Bruno.");

    // Get current winner
    let winner = await contract.getWinner();
    console.log("Current winner:", winner);

    // Check candidate details
    const candidateIndex = 1; // Index of Bob
    const candidateDetails = await contract.candidates(candidateIndex);
    console.log(`Candidate: ${candidateDetails[0]}, Votes: ${candidateDetails[1].toString()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

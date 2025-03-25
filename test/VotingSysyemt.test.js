const { expect } = require("chai");

describe("VotingSystem Tests", function () {
    it("Should deploy and allow a vote", async function () {
        const VotingSystem = await ethers.getContractFactory("VotingSystem");
        const voting = await VotingSystem.deploy(["Alice", "Bruno", "Charlie"]);
        await voting.deployed();

        await voting.vote(1); // Vote for Bruno

        const candidate = await voting.candidates(1);
        expect(candidate.voteCount.toNumber()).to.equal(1); 
    });
});

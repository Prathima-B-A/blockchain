// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract VotingSystem {
    // Struct to define a Candidate
    struct Candidate {
        string name;       // Candidate's name
        uint256 voteCount; // Total votes for the candidate
    }

    // Mapping to track if an address has voted
    mapping(address => bool) public hasVoted;

    // Array to store all candidates
    Candidate[] public candidates;

    // Constructor to initialize candidates
    constructor(string[] memory _candidateNames) {
        for (uint256 i = 0; i < _candidateNames.length; i++) {
            candidates.push(Candidate({
                name: _candidateNames[i],
                voteCount: 0
            }));
        }
    }

    // Function to cast a vote for a candidate
    function vote(uint256 _candidateIndex) public {
        require(!hasVoted[msg.sender], "You have already voted.");
        require(_candidateIndex < candidates.length, "Invalid candidate index.");

        hasVoted[msg.sender] = true;
        candidates[_candidateIndex].voteCount++;
    }

    // Function to get the winner's name
    function getWinner() external view returns (string memory) {
        Candidate memory winner = candidates[0];
        for (uint256 i = 1; i < candidates.length; i++) {
            if (candidates[i].voteCount > winner.voteCount) {
                winner = candidates[i];
            }
        }
        return winner.name;
    }
}

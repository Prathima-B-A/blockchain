pragma solidity ^0.8.20;

contract VotingSystem {
    // Struct to define a Candidate
    struct Candidate {
        string name; // Candidate's name
        uint256 voteCount; // Total votes for the candidate
    }

    // Mapping to track if an address has voted
    mapping(address => bool) public hasVoted;

    // Array to store all candidates
    Candidate[] public candidates;

    // Event to emit when a vote is cast
    event VoteCasted(address voter, string candidate);

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
        require(!hasVoted[msg.sender], "You have already voted."); // Ensure voter hasn't voted yet
        require(_candidateIndex < candidates.length, "Invalid candidate index."); // Ensure valid candidate index

        hasVoted[msg.sender] = true; // Mark the voter as having voted
        candidates[_candidateIndex].voteCount++; // Increment vote count for the chosen candidate

        emit VoteCasted(msg.sender, candidates[_candidateIndex].name); // Emit vote event
    }

    // Function to get the winner's name
    function getWinner() external view returns (string memory) {
        Candidate memory winner = candidates[0]; // Assume first candidate is the winner
        for (uint256 i = 1; i < candidates.length; i++) {
            if (candidates[i].voteCount > winner.voteCount) {
                winner = candidates[i]; // Update winner if current candidate has more votes
            }
        }
        return winner.name;
    }
}

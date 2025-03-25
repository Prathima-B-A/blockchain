// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EtherWallet {
    address public owner;
    mapping(address => uint256) public balances;  // Corrected variable name

    constructor() {
        owner = msg.sender;
    }

    // Fallback function to accept Ether directly sent to the contract
    receive() external payable {
        balances[msg.sender] += msg.value;
    }

    // Deposit function: Deposit Ether into the contract
    function deposit() external payable {
        require(msg.value > 0, "Deposit amount must be greater than zero");
        balances[msg.sender] += msg.value;
    }

    // Withdraw function: Withdraw a specified amount of Ether from the contract
    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }

    // Owner withdraws all funds
    function withdrawAll() external {
        require(msg.sender == owner, "Only the owner can withdraw all funds");
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds available");
        payable(owner).transfer(balance);
    }

    // Get the contract's total balance
    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
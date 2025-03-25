// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DynamicArray {
    uint[] public numbers; // Dynamic array of unsigned integers

    // Function to add a number to the array
    function addNumber(uint _num) public {
        numbers.push(_num);
    }

    // Function to get all numbers
    function getNumbers() public view returns (uint[] memory) {
        return numbers;
    }

    // Function to remove the last element
    function removeLast() public {
        require(numbers.length > 0, "Array is empty");
        numbers.pop();
    }

    // Function to get array length
    function getLength() public view returns (uint) {
        return numbers.length;
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Example{
    string a;

    function set(string memory _a) public{
        a=_a;
    }
    function get() public view returns(string memory){
        return a;
    }
}
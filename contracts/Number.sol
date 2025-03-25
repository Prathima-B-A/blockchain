//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;
contract Numbers{
    uint a;
    function set(uint _a) public{
        a=_a;
    }
    function getter() public view returns(uint)
    {
        return a;
    }
}
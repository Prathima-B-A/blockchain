//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;
contract Add{
    uint num1;
    uint num2;
    constructor(uint _num1,uint _num2)
    {
           num1=_num1;
           num2=_num2;
    }
    uint sum=num1+num2;
    function getter() public view returns(uint)
    {
        return sum;
    }
}
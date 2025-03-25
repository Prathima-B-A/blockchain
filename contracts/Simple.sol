//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract Simple{
    string name="Prathima";
    function getter() public view returns(string memory)
    {
        return name;
    }
}
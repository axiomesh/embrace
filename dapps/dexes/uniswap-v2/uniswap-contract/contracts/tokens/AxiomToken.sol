pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AxiomToken is ERC20 {
    constructor(string memory _name, string memory _symbol, uint _totalSupply) ERC20(_name, _symbol) {
        if (_totalSupply > 0) {
            _mint(msg.sender, _totalSupply);
        }
    }

    // 铸造代币
    function mint(address recipient, uint256 amount) public {
        _mint(recipient, amount);
    }

    // 销毁代币
    function burn(address from, uint256 amount) public {
        _burn(from, amount);
    }
}
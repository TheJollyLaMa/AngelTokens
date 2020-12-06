pragma solidity >=0.5.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Color is ERC721{
  string[] public colors;
  mapping(string => bool) _colorExists;

  constructor() ERC721("Color", "COLOR") public {  //setup <-- run once like an init <-- pass in name and symbol as per ERC721 Standard

  }

  function mint(string memory _color) public { // restrict to owner and restrict inputs to only color values
    require(!_colorExists[_color]);
    colors.push(_color);
    uint _id = colors.length;
    _mint(msg.sender, _id);
    _colorExists[_color] = true;
  }

}

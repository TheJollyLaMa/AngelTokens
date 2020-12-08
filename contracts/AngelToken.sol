pragma solidity >=0.4.21 <0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract AngelToken is ERC721{
  /* using SafeMath for uint256;
  using Address for address; */
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  string[] public angel_tokens;
  string[] public uris;
  uint256 __totalSupply = 8000000000000;
  bytes private __uriBase = "http://localhost:3001/"; // maybe a good use for an "unstoppable domain"

  mapping(uint256 => bool) angel_token_exists;
  mapping(string => bool) uri_exists;
  mapping(string => address) angel_token_owners;
  mapping(string => string) public angel_token_id_to_uri_map;

  constructor()
   ERC721("AngelToken", "ANGEL") public {  //setup <-- run once like an init <-- pass in name and symbol as per ERC721 Standard
  }

  function mint(string memory angel_token) public { // restrict to owner and restrict inputs to only color values
      _tokenIds.increment();
      uint256 newTokenId = _tokenIds.current();
      string memory tokenURI = string(abi.encodePacked(angel_token, uintToString(newTokenId)));
      require(!angel_token_exists[newTokenId]);
      require(!uri_exists[tokenURI]);
      angel_tokens.push(angel_token);
      uris.push(tokenURI);
      _safeMint(msg.sender, newTokenId);
      _setTokenURI(newTokenId, tokenURI);

      angel_token_owners[angel_token] = msg.sender;
      angel_token_exists[newTokenId] = true;
      uri_exists[tokenURI] = true;
      angel_token_id_to_uri_map[angel_token] = tokenURI;
  }
  function uintToString(uint v) internal returns (string memory str) {
        uint maxlength = 100;
        bytes memory reversed = new bytes(maxlength);
        uint i = 0;
        while (v != 0) {
            uint remainder = v % 10;
            v = v / 10;
            reversed[i++] = byte(uint8(48 + remainder));
        }
        bytes memory s = new bytes(i + 1);
        for (uint j = 0; j <= i; j++) {
            s[j] = reversed[i - j];
        }
        str = string(s);
    }

  /* interface with another erc721 contract */
  /* input address of contract to ineract with */
  /* can call all the contracts functions through Interface */
  /* IERC721(0xafr490q3t5uteigsjdflkjbsoitg).transfer() */

}

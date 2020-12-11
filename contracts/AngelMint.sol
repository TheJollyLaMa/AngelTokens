pragma solidity >=0.4.21 <0.7.0;
import "@openzeppelin/contracts/utils/Counters.sol";
/* import "./AngelToken.sol"; */

contract AngelMint{
  /* using SafeMath for uint256; */
  /* using Address for address; */
  using Counters for Counters.Counter;
  uint256 iddig = 16;
  uint256 idmod = 10 ** iddig;
  uint256 id;     //token identifier
  uint256 series_issue_num; // the token number out of the total supply expressed as a fraction
  uint256 series_mint_date; // the date the Angel minted the particular issuance
  /* AngelToken[] angel_tokens; */
  event ManifestedAngelToken(
       string _name,
        string _symbol,
         uint256 _id,
          uint256 issue_num,
           uint256 _mint_date
         );
  constructor()
     public {  //setup <-- run once like an init <-- pass in name and symbol as per ERC721 Standard
 }

 //create new Angel Token
 function _tokenGenesis (
   string memory _name,
    string memory _symbol,
     uint256 _id,
      uint256 _issue_num,
        uint256 _mint_date
      /* string memory _status,
       string memory _product,
        string memory _cost,
         string memory _angel_coefficient,
           */
           ) private {
   /* angel_tokens.push( alm(
       _name,
        _symbol,
         _id,
          _issue_num,
           _mint_date
           _status,
           _product,
            _cost,
             _angel_coefficient
           )
     ); */
   emit ManifestedAngelToken(
          _name,
           _symbol,
            _id,
             _issue_num,
              _mint_date
              );
 }
 // generate random id
 function _idGenesis(string memory _str) private view returns (uint256) {
   uint256 token_id = uint256(keccak256(abi.encodePacked(_str)));
   return token_id % idmod;
 }
 // use id and passed in information to manifest an AngelToken
 function manifestAngelToken(
   string memory _name,
    string memory _symbol,
     uint256 _issue_num,
      uint256 _mint_date
     /* string memory _status,
      string memory _product,
       string memory _cost,
        string memory _angel_coefficient,
           */
   ) public {
     uint256 _id = _idGenesis(_name);
     _tokenGenesis(
       _name,
        _symbol,
         _id,
          _issue_num,
           _mint_date
          /* _status,
           _product,
            _cost,
             _angel_coefficient,
              _mint_date,
              */
               );
 }

}

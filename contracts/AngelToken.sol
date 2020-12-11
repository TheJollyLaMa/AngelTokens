pragma solidity >=0.4.21 <0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
//mad props to the crypto zombies tutorial!  Thanks!
contract AngelToken is ERC721{

  // event emitted when AngelTokens are made. - anyone in the world can see that an Angel is on an Endeavor!
  /* Counters.Counter private _tokenIds; */
  /* State variables are stored in the blockchain */
  string public ename;
  string public esym;

  struct Alm {
    string name;
     string sym;  // <10 alpha num
      uint256 id;  // the id of the token issuance
       /* uint256 issue_num;  // the status of the contract
        uint256 mint_date;  // the status of the contract
         string status;  // the status of the contract
          string product; // the unit product being produced in the endeavor - a lb of coffee, a chocalate bar, a bar of soap, a board, solar panel, or your grandmas comfy undies
           uint256 cost; // the Unit Retail Cost of your product in wei
            uint256 angel_coefficient; // coefficient of next round's profits */
  }
  Alm[] public alms;
  constructor(
    string memory _e_name, // endeavor name
     string memory _e_sym,  // endeavor symbol
      uint256 _id //id
     )
    ERC721("AngelToken", "ANGEL")
      public {  //setup <-- run once like an init <-- pass in name and symbol as per ERC721 Standard
        ename = _e_name;
        esym = _e_sym;
        _tokenGenesis(ename, esym, _id);
  }

  function _tokenGenesis (
    string memory _e_name,
     string memory _e_sym,
      uint256 _id
      )public {

        alms.push(Alm(_e_name, _e_sym, _id));

  }
}
/* string memory _symbol,
    uint256 _id,
     uint256 _issue_num,
      uint256 _mint_date */

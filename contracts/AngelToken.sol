pragma solidity >=0.4.21 <0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
//mad props to the crypto zombies tutorial!  Thanks!
contract AngelToken is ERC721{
  /* State variables are stored in the blockchain */

  struct Alm {
    string name;
     string sym;  // <10 alpha num
      uint256 id;  // the id of the token issuance
       uint256 issue_num;
        uint256 mint_date;
         uint256 cost; // the Unit Retail Cost of your product in wei
          uint256 angel_coefficient; // coefficient of next round's profits
           string status;  // the status of the contract
            string product; // the unit product being produced in the endeavor - a lb of coffee, a chocalate bar, a bar of soap, a board, solar panel, or your grandmas comfy undies
             }

  Alm[] public alms;
  event ManifestedAngelToken(
    string _ename, // endeavor name
     string _esym,  // endeavor symbol
      uint256 _id,
       uint256 _issue_num,
        uint256 _mint_date,
         uint256 _cost,
          uint256 _angel_coefficient,
           string _status,
            string _product
         );
  constructor(
    string memory _ename, // endeavor name
     string memory _esym,  // endeavor symbol
      uint256 _id,
       uint256 _issue_num,
        uint256 _mint_date,
         uint256 _cost,
          uint256 _angel_coefficient,
           string memory _status,
            string memory _product
            )

    ERC721("AngelToken", "ANGEL")
      public {  //setup <-- run once like an init <-- pass in name and symbol as per ERC721 Standard

        _tokenGenesis(_ename, _esym, _id, _issue_num, _mint_date, _cost, _angel_coefficient, _status, _product);
  }

  function _tokenGenesis (
    string memory _e_name,
     string memory _e_sym,
      uint256 _id,
       uint256 _issue_num,
        uint256 _mint_date,
         uint256 _cost,
          uint256 _angel_coefficient,
           string memory _status,
            string memory _product
            )

      public {

        alms.push(Alm(_e_name, _e_sym, _id, _issue_num, _mint_date, _cost, _angel_coefficient, _status, _product));
        emit ManifestedAngelToken(
               _e_name,
                _e_sym,
                 _id,
                  _issue_num,
                   _mint_date,
                    _cost,
                     _angel_coefficient,
                      _status,
                       _product
                       );
  }
}

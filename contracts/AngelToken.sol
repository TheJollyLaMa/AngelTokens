pragma solidity >=0.4.21 <0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
//mad props to the crypto zombies tutorial!  Thanks!
contract AngelToken is ERC721{
  /* State variables are stored in the blockchain */
  uint256 public iddig = 16;
  uint256 idmod = 10 ** iddig;
  uint256 id;
  mapping (address => uint256) public map_address_to_id;
  mapping (uint256 => address) public map_id_to_address;
  mapping(uint256 => bool) public is_on_manifest;

  struct Alm {
   uint256 uri;
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

  mapping (uint256 => Alm) public map_id_to_Alm;

  Alm[] public alms;
  event ManifestedAngelToken(
     uint256 _uri,
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
       uint256 _issue_num,
        uint256 _mint_date,
         uint256 _cost,
          uint256 _angel_coefficient,
           string memory _status,
            string memory _product
            )

    ERC721("AngelToken", "ANGEL")
      public {  //setup <-- run once like an init <-- pass in name and symbol as per ERC721 Standard
        manifestAngelToken(_ename, _esym, _issue_num, _mint_date, _cost, _angel_coefficient, _status, _product);

  }

  function _tokenGenesis (
    string memory _ename,
     string memory _esym,
      uint256 _id,
       uint256 _issue_num,
        uint256 _mint_date,
         uint256 _cost,
          uint256 _angel_coefficient,
           string memory _status,
            string memory _product
            )

      public returns(uint256){
        require(!is_on_manifest[_id]);
        uint256 _uri = _id;//string(abi.encodePacked(_esym, uintToString(_id)));
        Alm memory new_alm = Alm(_uri, _ename, _esym, _id, _issue_num, _mint_date, _cost, _angel_coefficient, _status, _product);
        alms.push(new_alm);
        is_on_manifest[_id] = true;
        map_id_to_Alm[_id] = new_alm;
        map_address_to_id[msg.sender] = _id;
        map_id_to_address[_id] = msg.sender;
    /*  convert new_alm to bytes so _mint will accept it */
    /*  _safeMint(_ename, _id, new_alm); */
    /*  send data to file at uri on unstoppable domains or some other decentralized servicer */
        emit ManifestedAngelToken(
              _uri,
               _ename,
                _esym,
                 _id,
                  _issue_num,
                   _mint_date,
                    _cost,
                     _angel_coefficient,
                      _status,
                       _product
                       );
        return _id;
  }
  // generate random id
  function _idGenesis(string memory _str) private view returns (uint256) {
    uint256 token_id = uint256(keccak256(abi.encodePacked(_str)));
    return token_id % idmod;
  }

  function manifestAngelToken(
    string memory _ename,
     string memory _esym,
       uint256 _issue_num,
        uint256 _mint_date,
         uint256 _cost,
          uint256 _angel_coefficient,
           string memory _status,
            string memory _product
    ) public {
      uint256 _id = _idGenesis(_ename);
      _tokenGenesis(_ename, _esym, _id, _issue_num, _mint_date, _cost, _angel_coefficient, _status, _product);
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
}

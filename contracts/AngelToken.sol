pragma solidity >=0.4.21 <0.7.0;
//V5
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
//mad props to the crypto zombies tutorial!  Thanks!
contract AngelToken is ERC721{
  /* State variables are stored in the blockchain */
  bytes public mintData;
  mapping(uint256 => bool) public is_on_manifest;
  /* mapping (address => uint256) public map_address_to_id; */
  /* mapping (uint256 => Alm) public map_id_to_Alm; */
 mapping (string => Alm) public map_uri_to_Alm;

  struct Alm {
   string uri;
    string name;
     string sym;  // <10 alpha num
      uint256 id;  // the id of the token issuance
       uint256 issue_num;
        uint256 mint_date;
         uint256 cost; // the Unit Retail Cost of your product in wei
          uint256 angel_coefficient; // coefficient of next round's profits
           uint256 status;  // the status of the contract
            string product; // the unit product being produced in the endeavor - a lb of coffee, a chocalate bar, a bar of soap, a board, solar panel, or your grandmas comfy undies
             }
   Alm[] public alms;
   event MintDataEvent(bytes mintData);
   event ManifestedAngelToken(
      string _uri,
       string _ename, // endeavor name
        string _esym,  // endeavor symbol
         uint256 _id,
          uint256 _issue_num,
           uint256 _mint_date,
            uint256 _cost,
             uint256 _angel_coefficient,
              uint256 _status,
               string _product
          );

  constructor(
    string memory _ename, // endeavor name
     string memory _esym,  // endeavor symbol
       uint256 _issue_num,
        uint256 _mint_date,
         uint256 _cost,
          uint256 _angel_coefficient,
           uint256 _status, // 1: waiting 2: executed 3: shipped 4: fullfilled
            string memory _product
            )

    ERC721("AngelToken", "ANGEL")
      public {  //setup <-- run once like an init <-- pass in name and symbol as per ERC721 Standard
        /*uncomment below to run through mocha tests */
        manifestAngelToken(_ename, _esym, _issue_num, _mint_date, _cost, _angel_coefficient, _status, _product);

  }


  function manifestAngelToken(
    string memory _ename,
     string memory _esym,
      uint256 _issue_num,
       uint256 _mint_date,
        uint256 _cost,
         uint256 _angel_coefficient,
          uint256 _status,
           string memory _product
    ) public {
      uint256 _id = _idGenesis(_ename); //the id is made of the name and has the symbol attached to the front
      _tokenGenesis(_ename, _esym, _id, _issue_num, _mint_date, _cost, _angel_coefficient, _status, _product);
  }

   function _tokenGenesis (
    string memory _ename,
     string memory _esym,
      uint256 _id,
       uint256 _issue_num,
        uint256 _mint_date,
         uint256 _cost,
          uint256 _angel_coefficient,
           uint256 _status,
            string memory _product
            )

      internal {
        require(!is_on_manifest[_id]);
        string memory new_uri = string(abi.encodePacked(_esym, _id.toString())); //Hare Krsna to the String library
        new_uri = string(abi.encodePacked(new_uri, ".json"));

        Alm memory new_alm;// = Alm(new_uri, _ename, _esym, _id, _issue_num, _mint_date, _cost, _angel_coefficient, _status, _product);
        new_alm.uri = new_uri;
        new_alm.name = _ename;
        new_alm.sym = _esym;
        new_alm.id = _id;

        new_alm.issue_num = _issue_num;
        new_alm.mint_date = _mint_date;
        new_alm.cost = _cost;
        new_alm.angel_coefficient = _angel_coefficient;
        new_alm.status = _status;
        new_alm.product = _product;
        mintData = abi.encode(_issue_num.toString(), _mint_date.toString(), _cost.toString(), _angel_coefficient.toString(), _status, _product);
        /* bytes with a fixed variable length can be passed between contracts */

        alms.push(new_alm);
        is_on_manifest[_id] = true;
        /* map_id_to_Alm[_id] = new_alm; */
        map_uri_to_Alm[new_uri] = new_alm;
//      map_address_to_id[msg.sender] = _id; */ //redundant and expensive unless there's some other reason to have them
    /*  convert new_alm to bytes so _mint will accept it
        /* mintData = toBytes(new_alm); */
        _safeMint(msg.sender, _id, mintData);
        _setBaseURI("http://localhost:3000/public/#!/treasure_chest/");
        _setTokenURI(_id, new_uri);
        /* _mint(msg.sender, _id); */
    /*  send data to file at uri on unstoppable domains or some other decentralized servicer */
        emit MintDataEvent(mintData);
        emit ManifestedAngelToken(
              new_uri,
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


  }
  // generate random id
  function _idGenesis(string memory _str) internal pure returns (uint256) {
    uint256 idmod = 10 ** 16;
    uint256 token_id = uint256(keccak256(abi.encodePacked(_str)));
    return token_id % idmod;
  }

}

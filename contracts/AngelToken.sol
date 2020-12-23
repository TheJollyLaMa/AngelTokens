pragma solidity >=0.4.21 <0.7.0;
//it's been quite the year on our little blue sphere
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
//mad props to the crypto zombies tutorial!  Thanks!
//And gregory at Dapp U
/* and anthony at the daily gwei
  stand on the shoulders of giants
*/
contract AngelToken is ERC1155{
  /* State variables are stored in the blockchain */
  bytes public mintData;
  mapping(uint256 => bool) public is_on_manifest;
  mapping (address => uint256) public map_owner_to_id;
  /* mapping (uint256 => Alm) public map_id_to_Alm; */
  mapping (string => Alm) public map_uri_to_Alm;

  struct Alm {
    address owner;
   string uri;
    string name;
     string sym;  // <10 alpha num
      uint256 id;  // the id of the token issuance
       /* uint256 issue_num; // issue number and ID are UNIQUE to each Alm */
        /* uint256 _num_to_issue; // total amount of alms issued this round */
         /* uint256 mint_date; */
          /* uint256 cost; // the Unit Retail Cost of your product in wei */
           /* uint256 angel_coefficient; // coefficient of next round's profits */
            /* uint256 status;  // the status of the contract */
             /* string product; // the unit product being produced in the endeavor - a lb of coffee, a chocalate bar, a bar of soap, a board, solar panel, or your grandmas comfy undies */ */
             }
  Alm[] public alms;
  event MintDataEvent(bytes mintData);
  event ManifestedAngelToken(
     address owner,
      string _uri,
       string _ename, // endeavor name
        string _esym,  // endeavor symbol
         uint256 _id
          /* uint256 _issue_num,
           uint256 _num_to_issue,
            uint256 _mint_date,
             uint256 _cost,
              uint256 _angel_coefficient,
               uint256 _status,
                string _product */
              );
  constructor(
    string memory _ename, // endeavor name
     string memory _esym,  // endeavor symbol
       uint256 _num_to_issue,
        uint256 _mint_date,
         uint256 _cost,
          uint256 _angel_coefficient,
           uint256 _status, // 1: waiting 2: executed 3: shipped 4: fullfilled
            string memory _product
            )
    ERC1155("http://localhost:3000/")
      public {  //setup <-- run once like an init <-- pass in name and symbol as per ERC721 Standard
        /*uncomment below to run through mocha tests on deployment */
        tokenGenesis(_ename, _esym, _num_to_issue, _mint_date, _cost, _angel_coefficient, _status, _product);

  }

   function tokenGenesis (
    string memory _ename,
     string memory _esym,
      uint256 _num_to_issue,
        uint256 _mint_date,
         uint256 _cost,
          uint256 _angel_coefficient,
           uint256 _status,
            string memory _product
            )
      public {

        /* for (uint i = 1; i <= _num_to_issue; i++) { */ //1155 takes care of multiminting
          Alm memory new_alm;// = Alm(new_uri, _ename, _esym, _id, _issue_num, _mint_date, _cost, _angel_coefficient, _status, _product);
            new_alm.owner = msg.sender;
            new_alm.name = _ename;
            new_alm.sym = _esym;
            uint256 _id = _idGenesis(_ename); //the id is made of the name and has the symbol attached to the front
            require(!is_on_manifest[_id]);
            new_alm.id = _id;
            is_on_manifest[_id] = true;
            new_alm.uri = string(abi.encodePacked(abi.encodePacked(_esym, _id), ".json")); //Hare Krsna to the String library
            /* new_alm.issue_num = i;
            new_alm._num_to_issue = _num_to_issue; */  //too Phat to Phit 2legit2quit
            /* new_alm.mint_date = _mint_date;
            new_alm.cost = _cost;
            new_alm.angel_coefficient = _angel_coefficient;
            new_alm.status = _status;
            new_alm.product = _product; */
            alms.push(new_alm);
          mintData = abi.encode(_num_to_issue, _mint_date, _cost, _angel_coefficient, _status, _product);
          map_owner_to_id[msg.sender] = _id;
          /* map_uri_to_Alm[new_uri] = new_alm; */
          /* _safeMint(msg.sender, _id, mintData); ERC721 standard
          _setBaseURI("http://localhost:3000/public/#!/treasure_chest/");
          _setTokenURI(_id, new_alm.uri); */
          _mint(msg.sender, _id, _num_to_issue, mintData);
          /*  send data to file at uri on unstoppable domains or some other decentralized servicer */
          emit MintDataEvent(mintData);
          emit ManifestedAngelToken(
               new_alm.owner,
                new_alm.uri,
                 _ename,
                  _esym,
                   _id
                    /* i,
                    _num_to_issue,
                     _mint_date,
                      _cost,
                       _angel_coefficient,
                        _status,
                         _product */
                         );
   /* } */
}
  function getAlmsLength() public view returns(uint256){
    return alms.length;
  }
  // generate random id
  function _idGenesis(string memory _str) internal pure returns (uint256) {
    uint256 idmod = 10 ** 16;
    uint256 token_id = uint256(keccak256(abi.encodePacked(_str)));
    return token_id % idmod;
  }
}

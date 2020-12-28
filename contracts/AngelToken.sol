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
  mapping(uint256 => bool) public is_on_manifest;
  mapping (address => uint256) public map_owner_to_id;
  /* mapping (uint256 => Alm) public map_id_to_Alm; */
  mapping (string => Alm) public map_uri_to_Alm;

  struct Alm {
    address owner;
     bytes uri;
      string name;
       string sym;
        uint256 id;  // the id of the token issuance
         bytes mint_data;
          }
  Alm[] public alms;
  event ManifestedAngelToken(
     address owner,
      bytes _uri,
       string _ename,
        string _esym,
         uint256 _id,
          bytes mint_data
           );
  constructor(
    string memory _ename, // endeavor name
     string memory _esym,  // endeavor symbol
      uint256 _num_to_issue,
       uint256 _mint_date,
        uint256 _cost,
         uint256 _angel_coefficient,
           string memory _product
            )
    ERC1155("http://localhost:3000/")
      public {
        tokenGenesis(_ename, _esym, _num_to_issue, _mint_date, _cost, _angel_coefficient, _product);
   }

   function tokenGenesis (
      string memory _ename,
       string memory _esym,
        uint256 _num_to_issue,
         uint256 _mint_date,
          uint256 _cost,
           uint256 _angel_coefficient,
            string memory _product
            )
      public {
          uint256 _id = _idGenesis(_ename);
          require(!is_on_manifest[_id]);
          is_on_manifest[_id] = true;
          Alm memory new_alm;
          new_alm.owner = msg.sender;
          new_alm.name = _ename;
          new_alm.sym = _esym;
          new_alm.id = _id;
          bytes memory new_uri = abi.encode(_esym, _id, ".json");
          new_alm.uri = new_uri;
          bytes memory mintData = abi.encode(_num_to_issue, _mint_date, _cost, _angel_coefficient, 1, _product);
          new_alm.mint_data = mintData;
          alms.push(new_alm);
          map_owner_to_id[msg.sender] = _id;
          /* map_uri_to_Alm[new_uri] = new_alm; */
          _mint(msg.sender, _id, _num_to_issue, mintData);

          emit ManifestedAngelToken(
               new_alm.owner,
                new_alm.uri,
                 new_alm.name,
                  new_alm.sym,
                   new_alm.id,
                    new_alm.mint_data
                     );

  }
  function getAlmsLength() public view returns(uint256){
    return alms.length;
  }
  function _idGenesis(string memory _str) internal pure returns (uint256) {
    uint256 idmod = 10 ** 16;
    uint256 token_id = uint256(keccak256(abi.encodePacked(_str)));
    return token_id % idmod;
  }
}

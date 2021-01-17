pragma solidity >=0.4.21 <0.7.0;
//it's been quite the year on our little blue sphere
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
/*
  mad props to the crypto zombies tutorial!  Thanks!
  And gregory at Dapp U
  and anthony at the daily gwei
  stand on the shoulders of giants
*/
contract AngelToken is ERC1155{
  /* State variables are stored in the blockchain */
  mapping(uint256 => bool) public is_on_manifest;
  mapping (address => uint256) public map_owner_to_id;
  mapping (uint256 => Alm) public map_id_to_Alm;
  mapping (string => Alm) public map_uri_to_Alm;

  address payable public CafLaMAccount = msg.sender;
  address payable public OA = 0x35C9B089ea8703cC5e097fb0fBA5d1ca850f9854;
  mapping(uint256 => mapping(address => uint256)) public CafLaM_angels_map;
  address[] public CafLaM_angels_list;
  uint256 last_rnd_id = 0;
  uint256 this_round_id;

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
  event CrowdFundComplete(uint256 _id, bool progress);

  constructor()
    ERC1155("http://localhost:3000/public/#!/treasure_chest/")
      public {}

   function tokenGenesis (
      string memory _ename,
       string memory _esym,
        uint256 _num_to_issue,
         string memory _mint_date,
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
          map_id_to_Alm[_id] = new_alm;
          _mint(msg.sender, _id, _num_to_issue, mintData);
          emit ManifestedAngelToken(
               new_alm.owner,
                new_alm.uri,
                 new_alm.name,
                  new_alm.sym,
                   new_alm.id,
                    new_alm.mint_data
                     );
                     /* address payable oa = OA; */
                     /* require(oa.send(1/1000)); // rice for the deities whenever a new batch of alms is manifested */
  }
  function getAlmsLength() public view returns(uint256){
    return alms.length;
  }
  function _idGenesis(string memory _str) internal pure returns (uint256) {
    uint256 idmod = 10 ** 16;
    uint256 token_id = uint256(keccak256(abi.encodePacked(_str)));
    return token_id % idmod;
  }
  function buyAlms(address payable _owner, address _buyer, uint256 _id, uint256 _amount, bytes memory _data, uint256 cost) public payable {
      require(msg.value >= (cost * _amount), "not enough eth sent");
      require(_owner.send(msg.value), "owner send revert"); // replace with deposits to escrow account
      require(balanceOf(_owner, _id) >= _amount, "youre asking for too much");
      /* require(OA.send(10 wei)); // rice for the deities */
      CafLaM_angels_map[_id][_buyer] += _amount;
      CafLaM_angels_list.push(_buyer);

      safeTransferFrom(_owner, _buyer, _id, _amount, _data);

      /* trigger crowdfund phase 1 execution if all alms are sold */
      if(balanceOf(_owner, _id) == 0){
        /* crowd_sale_complete */
        /* crowdfund_execution(_id); */
        emit CrowdFundComplete(_id,true);
      }
      /* pause tokens until next round executes*/

  }
  function crowdfund_execution(uint256 _id) private {
    change_status_x(_id);
    if(false){
      payout_last(last_rnd_id);
    }else{
      seed_round();//no angel share - first round goes directly to startup funding
    }
    this_now_last(_id);
  /*   send email to minter to prompt a week long roast session */
  }
  function this_now_last(uint256 _id) private {
    last_rnd_id = _id;
  }
  function seed_round() public payable {
    uint256 _cost = 10;
    uint256 _num_to_issue = 1000;
    uint256 total_fund = _cost * _num_to_issue;
    /* require(total_fund >= EscrowAccount) */ //withdraw amount from escrow and
    /* send to contract owner, creator of the alm */
    CafLaMAccount.transfer(total_fund); // make CafLaMAccount the contract Escrow and send total_funds to the token owner, which would generally be the RoastMeister
  }
  function payout_last(uint256 _last_rnd_id) public payable {
      /* fetch the current alm */
      /* _id = id to last alm; */
      AngelToken.Alm memory last_alm = map_id_to_Alm[_last_rnd_id];
        uint256 _num_to_issue;
         string memory _mint_date;
          uint256 _cost;
           uint256 _angel_coefficient;
            uint256 _status;
             string memory _product;
      (_num_to_issue, _mint_date, _cost, _angel_coefficient, _status, _product) = abi.decode(last_alm.mint_data,(uint256, string, uint256, uint256, uint256, string));
      /* Load tokens with payout from this round */
      uint256 total_fund = _cost * _num_to_issue;
      uint256 expenses = 5500;// estimated expenses to import, produce, and ship product
      uint256 _total_angels_share = total_fund - expenses;

      for(uint256 i=1; i<=CafLaM_angels_list.length; i++) {
        address angel = CafLaM_angels_list[i];
        uint256 angels_bal = ERC1155.balanceOf(angel, _last_rnd_id);
        uint256 payout_amt = _total_angels_share / (angels_bal * _angel_coefficient);
        /* angel.transfer(payout_amt); */
      }

      /* change status on tokens to 'PAID' */
      _status = 4;
      /* reencode */
      last_alm.mint_data = abi.encode(_num_to_issue, _mint_date, _cost, _angel_coefficient, _status, _product);

  }

  function change_status_x(uint256 _id) public view {
  /* fetch the current alm */
  AngelToken.Alm memory cur_alm =  AngelToken.map_id_to_Alm[_id];
    uint256 _num_to_issue;
     string memory _mint_date;
      uint256 _cost;
       uint256 _angel_coefficient;
        uint256 _status;
         string memory _product;
  (_num_to_issue, _mint_date, _cost, _angel_coefficient, _status, _product) = abi.decode(cur_alm.mint_data,(uint256, string, uint256, uint256, uint256, string));
  /* change status on tokens to 'executed' */
  _status = 2;
  /* reencode */
  cur_alm.mint_data = abi.encode(_num_to_issue, _mint_date, _cost, _angel_coefficient, _status, _product);
  }
  function change_status_s(uint256 _id, bool is_shipping) public view{
    if(is_shipping){
      /* fetch the current alm */
      AngelToken.Alm memory cur_alm =  AngelToken.map_id_to_Alm[_id];
        uint256 _num_to_issue;
         string memory _mint_date;
          uint256 _cost;
           uint256 _angel_coefficient;
            uint256 _status;
             string memory _product;
      (_num_to_issue, _mint_date, _cost, _angel_coefficient, _status, _product) = abi.decode(cur_alm.mint_data,(uint256, string, uint256, uint256, uint256, string));
      /* change status on tokens to 'executed' */
      _status = 3;
      /* reencode */
      cur_alm.mint_data = abi.encode(_num_to_issue, _mint_date, _cost, _angel_coefficient, _status, _product);
    }
  }
}

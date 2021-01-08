pragma solidity >=0.4.21 <0.7.0;
import "@openzeppelin/contracts/utils/Counters.sol";
import "./AngelToken.sol";

contract AngelTokenCrowdfund is AngelToken{
  /* using SafeMath for uint256; */
  /* using Address for address; */
  address payable public CafLaMAccount = msg.sender;
  mapping(uint256 => mapping(address => uint256)) public CafLaM_angels_map;
  address payable[] public CafLaM_angels_list;
  uint256 last_rnd_id = 0;
  uint256 this_round_id;
  event CrowdFundComplete(uint256 _id, bool complete);
  constructor(
      string memory _ename, // endeavor name
       string memory _esym,  // endeavor symbol
        uint256 _num_to_issue,
         string memory _mint_date,
          uint256 _cost,
           uint256 _angel_coefficient,
             string memory _product
             )
  AngelToken(_ename, _esym, _num_to_issue, _mint_date, _cost, _angel_coefficient, _product)
  ERC1155("http://localhost:3000/public/#!/treasure_chest/")
    public {
      tokenGenesis(_ename, _esym, _num_to_issue, _mint_date, _cost, _angel_coefficient, _product);
  }

  function buyAlms(address payable _owner, address payable _buyer, uint256 _id, uint256 _amount, bytes memory _data, uint256 cost) public payable {
      require(msg.value >= (cost * _amount));
      //setApprovalForAll(, true);//eventually move to whitelist to tighten the exposure
      require(_owner.send(msg.value)); // replace with deposits to escrow account
      /* address payable oa = OA; */
      /* require(oa.send(1/10000)); // rice for the deities */
      CafLaM_angels_map[_id][_buyer] += _amount;
      CafLaM_angels_list.push(_buyer);
      ERC1155.safeTransferFrom(_owner, _buyer, _id, _amount, _data);
      /* trigger crowdfund phase 1 execution if all alms are sold */
      if(checkProgress(_owner, _id)){
        crowdfund_execution(_id);
        emit CrowdFundComplete(_id,true);
      }
      /* pause tokens until next round executes*/

  }
  function checkProgress(address _owner, uint256 _id) private returns(bool complete) {
    if(balanceOf(_owner,_id) == 0){
      /* crowd_sale_complete */
      complete = true;
   } else {
     complete = false;
   }
   return complete;
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
      Alm memory last_alm =  map_id_to_Alm[_last_rnd_id];
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
        address payable angel = CafLaM_angels_list[i];
        uint256 angels_bal = balanceOf(angel, _last_rnd_id);
        uint256 payout_amt = _total_angels_share / (angels_bal * _angel_coefficient);
        angel.transfer(payout_amt);
      }

      /* change status on tokens to 'PAID' */
      _status = 4;
      /* reencode */
      last_alm.mint_data = abi.encode(_num_to_issue, _mint_date, _cost, _angel_coefficient, _status, _product);

  }

  function change_status_x(uint256 _id) private {
  /* fetch the current alm */
  Alm memory cur_alm =  map_id_to_Alm[_id];
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
  function change_status_s(uint256 _id, bool is_shipping) public {
    if(is_shipping){
      /* fetch the current alm */
      Alm memory cur_alm =  map_id_to_Alm[_id];
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

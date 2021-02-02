pragma solidity >=0.4.21 <0.7.0;
import "./AngelToken.sol";

contract AT_X is AngelToken {
  constructor()
   AngelToken()
    public {}

  function crowdfund_execution(address _owner, uint256 _id, bytes memory md) public returns(bool executed){
    //fetch the current alm and change its status
    Alms.Alm memory cur_alm ;//= AngelToken.map_id_to_Alm[_id]; can't get map_id_to_Alm to call
    uint256 ca_num_to_issue;
    string memory ca_mint_date;
    uint256 ca_cost;
    uint256 ca_angel_coefficient;
    uint256 ca_status;
    string memory ca_product;
    //next line is the last known problem - 27 JAN 2021
    (ca_num_to_issue, ca_mint_date, ca_cost, ca_angel_coefficient, ca_status, ca_product) = abi.decode(md,(uint256, string, uint256, uint256, uint256, string));
    //change status on tokens to 'executed' & reencode
    cur_alm.mint_data = abi.encode(ca_num_to_issue, ca_mint_date, ca_cost, ca_angel_coefficient, 2, ca_product);
    map_id_to_Alm[_id] = cur_alm;
    /* if(false){
      // if last_rn_id != 0
      Alm memory last_alm = map_id_to_Alm[last_rnd_id];
        uint256 la_num_to_issue;
         string memory la_mint_date;
          uint256 la_cost;
           uint256 la_angel_coefficient;
            uint256 la_status;
             string memory la_product;
      (la_num_to_issue, la_mint_date, la_cost, la_angel_coefficient, la_status, la_product) = abi.decode(last_alm.mint_data,(uint256, string, uint256, uint256, uint256, string));
      //Load tokens with payout from this round
      uint256 total_fund = la_cost * la_num_to_issue;
      uint256 expenses = 5500;// estimated expenses to import, produce, and ship product
      uint256 _total_angels_share = total_fund - expenses;
      for(uint256 i=1; i<=CafLaM_angels_list.length; i++) {
        address payable angel = CafLaM_angels_list[i];
        uint256 angels_bal = balanceOf(angel, last_rnd_id);
        uint256 payout_amt = _total_angels_share / (angels_bal * la_angel_coefficient);
      //  withdrawPayments(angel, payout_amt);
      }
      uint256 RoasterShare = _total_angels_share / (la_num_to_issue * la_angel_coefficient);
      //withdrawPayments(cur_alm.owner, RoasterShare);
      //change status on tokens to 'PAID' & reencode
      last_alm.mint_data = abi.encode(la_num_to_issue, la_mint_date, la_cost, la_angel_coefficient, 4, la_product);
      map_id_to_Alm[last_rnd_id] = last_alm;
    }else{
      //seed round
      uint256 RoasterShare = ca_cost * ca_num_to_issue;
      //withdrawPayments(cur_alm.owner, RoasterShare);
    } */
    //last_rnd_id = _id;
    executed = true;
  }
  function change_status_s(uint256 _id) public payable{
    /* fetch the current alm */
    Alms.Alm memory alm =  map_id_to_Alm[_id];
    require(msg.sender == alm.owner, "Err: Must own token to change status");
      uint256 alm_num_to_issue;
       string memory alm_mint_date;
        uint256 alm_cost;
         uint256 alm_angel_coefficient;
          uint256 alm_status;
           string memory alm_product;
    (alm_num_to_issue, alm_mint_date, alm_cost, alm_angel_coefficient, alm_status, alm_product) = abi.decode(alm.mint_data,(uint256, string, uint256, uint256, uint256, string));
    /* change status on tokens to 'executed' & reencode */
    alm.mint_data = abi.encode(alm_num_to_issue, alm_mint_date, alm_cost, alm_angel_coefficient, 3, alm_product);
    map_id_to_Alm[_id] = alm;
  }

}

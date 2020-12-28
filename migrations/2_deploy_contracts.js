const AngelToken = artifacts.require("AngelToken");

module.exports = function(deployer) {
  const original_alm = {
    endeavor_name: "Caffeine LaManna Seed",
    endeavor_symbol : "CafLaM",
    issue_num : 1000,
    mint_date : 01012021,
    cost : 10,
    angel_coefficient : 0005,
    product : "1/2lb whole bean roasted coffee"
  }
  try{
    deployer.deploy(
      AngelToken,
       original_alm.endeavor_name,
        original_alm.endeavor_symbol,
         original_alm.issue_num,
          original_alm.mint_date,
            original_alm.cost,
             original_alm.angel_coefficient,
               original_alm.product
             )
  }catch(err){console.log(err);}

};

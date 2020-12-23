const AngelToken = artifacts.require("AngelToken");

module.exports = function(deployer) {
  const original_alm = {
    endeavor_name: "Caffeine LaManna",
    endeavor_symbol : "CafLaM",
    issue_num : 3,
    mint_date : 12102020,
    cost : 1000,
    angel_coefficient : 0005,
    status : 1,
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
              original_alm.status,
               original_alm.product
             )
  }catch(err){console.log(err);}

};

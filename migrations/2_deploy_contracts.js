const AngelToken = artifacts.require("AngelToken");
const AngelTokenCrowdfund = artifacts.require("AngelTokenCrowdfund");

module.exports = function(deployer) {
  var date = new Date("01/01/2021").toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
  const original_alm = {
    endeavor_name: "Original Angel",
    endeavor_symbol : "OA",
    issue_num : 8000000000,
    mint_date : date,
    cost : 100,
    angel_coefficient : 0000000008,
    product : "1/2lb Shit from Healthy Bull"
  }
  try{
    deployer.deploy(
      AngelToken,
       original_alm.endeavor_name,
        original_alm.endeavor_symbol,
         original_alm.issue_num,
          String(original_alm.mint_date),
            original_alm.cost,
             original_alm.angel_coefficient,
               original_alm.product
             )
  }catch(err){console.log(err);}

  const CafLaM_original_alm = {
    endeavor_name: "Caffeine LaManna Seed",
    endeavor_symbol : "CafLaM",
    issue_num : 1000,
    mint_date : date,
    cost : 10,
    angel_coefficient : 0005,
    product : "1/2lb whole bean roasted coffee"
  }
  try{
    deployer.deploy(
      AngelTokenCrowdfund,
       CafLaM_original_alm.endeavor_name,
        CafLaM_original_alm.endeavor_symbol,
         CafLaM_original_alm.issue_num,
          String(CafLaM_original_alm.mint_date),
            CafLaM_original_alm.cost,
             CafLaM_original_alm.angel_coefficient,
               CafLaM_original_alm.product
             )
  }catch(err){console.log(err);}
};

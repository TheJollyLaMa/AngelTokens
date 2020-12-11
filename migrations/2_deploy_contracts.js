const AngelToken = artifacts.require("AngelToken");

module.exports = function(deployer) {
  const endeavor_name = "Caffeine LaManna";
  const endeavor_symbol = "CafLaM";
  const alm_id = 00001;
  const issue_num = 1234;
  const mint_date = 12102020;
  const cost = 10;
  const angel_coefficient = 0005;
  const status = "waiting";
  const product = "1/2lb whole bean roasted coffee";

  deployer.deploy(
    AngelToken,
     endeavor_name,
      endeavor_symbol,
       alm_id,
        issue_num,
         mint_date,
          cost,
           angel_coefficient,
            status,
             product
              );
};

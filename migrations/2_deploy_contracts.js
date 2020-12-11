const AngelToken = artifacts.require("AngelToken");

module.exports = function(deployer) {
  const endeavor_name = "Caffeine LaManna";
  const endeavor_symbol = "CafLaM";
  const alm_id = 000000000001;

  deployer.deploy(
    AngelToken,
     endeavor_name,
      endeavor_symbol,
       alm_id
    );
};

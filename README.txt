<em>
                ------ Frontend --------
                    "The Angel Room"
                AngularJs with web3.js GUI
                _________________________

</em
<hr/>
WhatsItAbout();// ???? the details of this issue ???

  -- NextTokenOffering();// the details of the next offering - so they understand the next possible dividend if enough Angels bring their cups to the next Council

  -- ThisTokenOffering();// the terms of this token offering
                          // - the cost - the coffee weight shipped - and the dividend (percent profit share on next round)

  -- LastTokenOffering(); // terms of last offer to compare past executions to present offerings

  -- TheGeneralStory(); // general readable terms to just what the heck this is all about and links to facilitate understanding of cryptoToken, smart contracts, CrowdFunding, micro lending, and Angel Investing

BuyToken(); // button for Angels to buy tokens
  -- CreateAngelCup(); // if no account, create a Caffeine LaManna Angel Cup to hold tokens for the Angel when they buy them (Angels don't have pockets)
                      //Unique Token Cup address is your "Wallet"
                      //It holds tokens you purchase by pressing the "BuyTokens" button
        -- GetAngelPersonality(); //enter your name, address, and contact information ( for regulatory purposes ).

        //Your wallet address is yours and yours only -- DONT ASK ME TO "RECOVER" a lost one because I cannot!! It will be lost in the ether FOREVER if you lose it!

  -- XChange(); // exchange Dollars for ether and the ether for Token

  -- TransferTokensToAngelCup(); // Transfer Tokens to Angel Cup and out of Initial Supply


CheckBalance(); input "Angel Cup Address" to display the Tokens owned by the Angel's Cup
    -- AmountTokensInCup(address(AngelCup)); // the address of the Angel Cup to display - enter your address to see your tokens

    -- BeanValue(); // The value of your tokens in whole roasted coffee bean (shipping included continental US)

    -- DividendValue(); // The dividend value in Dollars attached to the Angel Cup

    -- DividendCashOut(); // Withdraw Coffee Dividend after the next round has been executed for discounted Fresh Beans to you door!

    --DisplayTokensRemaining();// The amount of tokens left from the Initial Supply
                               // Also the amount needed until the round is "executable"

    -- Uses Web3.js to communicate with Solidity Smart-Contract <---- var contract = new web3.eth.Contract(abi,address)

/*
        ------ Immutable Backend -------
              "The Angel Offering"
               Solidity Contract
           _________________________
*/
-- Access a deployed Solidity Smart-Contract from a frontend website with the contract ABI and the contract address obtained once deployed

-- Stakes(); // describes profit break down and fund allocations for initialization of new round
              // Gives a name to the Current Round of Issuance, ie, "2020 Micro Mint" or "2020 Seed Round"
              // Sets limitations on how many tokens can be owned by any one party(by name and address, not by wallet)
              // Sets Angel's Share of next profit per token
              // Sets Angel's Bean Reward per token when round executes (All tokens are sold(all angels present at Council))
              // Sets estimated shipping amount to be reserved on execution
              // - Shipping - Beans - Dividend Payout(profitshare) - Roaster Profit
              // for seeding a $10K MicroRound: $3500 - $2500 - $0(0.0005%) - $4000
              // for the First $10K Micro Mint: $3500 - $2500 - $2000(0.0005) - $2000
              // Sets RoastMeisterAllocation

-- ExecuteContract(); // When all tokens are sold, contract emails RoastMeister to Verify the Offering
                      // RoastMeister Enters unique key to Verify Angel Council's Order
                      ReleaseToRoaster();// Funds are released to RoastMeister's account to purchase beans and use Profit
                      RewardDividend();// Funds are released to Reward last rounds Angels with Cash payout according to the share they bought into (tokens*profitshare)
                      ShippingEscrow();// Funds remain locked for shipping cost

-- CreateAngelCup(); // backend to create unique wallet for Angel ("the Angel's Cup")
                      // enters Angel onto AngelCouncil();

-- AngelCouncil(); // Immutable distributed ledger of the Angels who hold tokens for the Unique Issue
                    // Angel Name, Address, Public Wallet Address, amount of tokens owned, terms of unique token, Year Issued

-- Buy Tokens(); // make sure owner doesn't already have max amount allowable
                 // issue tokens with input information from frontend form

-- DividendCashOut(); exchanges earned dividend at the store for coffee shipped to your door!

-- AngelsMustered(); // executes when all tokens are bought;
                       // releases BeanReserve();
                       // releases RoastMeisterAllocation();
                       // releases RewardDividend(); from last contract;

-- BeanReserve();  // amount set aside for beans available on execution to RoastMeister

-- ShippingEscrow(); // reserves a portion of the raised funds to estimated shipping costs

-- RoasterWithdrawal();
      // doesn't allow RoastMeister to withdraw the Angel's Reward owed from last round
      // doesn't allow RoastMeister to withdraw funds needed for beans until all tokens are sold
      // doesn't allow RoastMeister to withdraw funds estimated for shipping
      // Allows RoastMeister to:
                withdraw funds designated as Roaster Profit as soon as all tokens are sold and contract becomes executable
                withdraw Bean Fund to order beans
                withdraw ShippingEscrow when all beans have been shipped
-- RewardDividend();
      // When next round is executed, call AngelCouncil() for list of Angels from last round and reward payout to angel's according to token ownership terms
      //
-- KillContract(); // if not enough Angel's bring their Cups to Council,
                      the round will not be executed,
                      all pledges will be refunded,
                      no dividends owed to last round until successful Mustering of Angels

-- DestroyParent(); // kill the last contract once all Angel's are rewarded their respective dividends

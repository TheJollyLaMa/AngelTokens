### Step 1: Install Git
https://github.com/git-guides/install-git

### Step 2: Install Node.js
https://nodejs.org/en/download/

### Step 3: Clone the Repo
`git clone https://github.com/JollyLaMa/AngelTokens /AngelTokensOnYourComputer`

### Step 4: Install Accompanying Packages
`npm install`

### Step 5: Start the Local Express Server
node express_server.js
Your terminal should say "Angel Tokens appearing in Heaven on port 3000!"
Now open a chrome browser. The Angel Token Manifestation Form can be found at http://localhost:3000/public/

### Step 6: Invite the Fox
https://metamask.io

download metamask and create or import a wallet. Say Hello Crypto! welcome to the free, decentralized world.

Connect metamask to the appropriate net (test-nets while we test for now) with your wallet

You should see your account displayed in the upper right corner to let you know your wallet is connected.

make tokens, purchase tokens, rejoice. everyone likes tokens.

if you mint your own tokens, you can branch this repository, copy all the code, change the buttons to represent your product, and sell your angel tokens in your personal bubble to raise funds for your own venture.
all transactions will go to the public ledger, viewable on etherscan by anyone who clones the repo and reuses the contract - as well as other existing and future marketplaces!
if you keep your venture small, efficient, and close to home, you'll have better luck and we'll all be better off.
if you make some tokens and clone the site, let me know!  I want to see what everybody is creating with the Angels in their life!


if you want to play with the solidity contracts you'll need truffle: `npm install -g truffle`





// bool isClosed = false; --> closes when all tokens are finally bought
// bool first_rnd = true;
// const _estShipping = 0.35;
// const _beans&Packaging = 0.20;
// const _roastMeisters_share; 0.225
// const _angels_share = 0; --> 0.225
// const reward_per_token = 0.005% --->  equals $2.25 profit share when next $10,000

// if (first_rnd = true)
    // const _angels_share = 0;
    // const _roastMeisters_share = 1.00;  --> first round to RoastMeister Wallet - about 0.45 should be profit
    // first_rnd = false;
// if (first_rnd = false)
        // _angels_share = 0.225  --> every round thereafter Angels receive 22.5% of funds raised
        // _roastMeisters_share = 0.225 --> roastmeister receives 22.5%




        // purchase a token for $10 in Ethereum
            //have to have a wallet already
            //have to log onto the angel site and connect with metamask
            //can view:
              // amount of tokens owned by your metamask wallet account currently selected
              // interest to earn on next rnd (0.0005%)
              // whether or not the interest has been executed by the next rnd
              // a Cash Out button to exchange the $interest_earned for ether

            // get a 1/2lb per token shipped to your door (continental US) once the round is executed
              // Comes individually packaged so ....
              // Enjoy it in your cup as you're ready
              // OR
              // Give it away !!
              // OR
              // Sell it for whatever price you like!! Seriously!!

            // once the coffee has shipped, sell your token on the open market or keep it to gain interest on the next round!

        // AND have an Investors Token Minted!
            // Earn Say(0.0005%) interest on your token Next Round.
            // Tokens aren't executable until next round completes
            // Once the next round completes, your token will be charged with an amount of ether
            // when next rnd is complete and token is charged with ether,
                //you can exchange it at anytime for your share of the profits
                // Need a Sell button to sell tokens for ether at their inherited value
                // or ride the Ether wave!  Be Careful!  I'm not your investment advisor, just your coffee roaster!

        // Round executes when all shares are owned
            // First thing is to pay last rounds angels their %share
              // if first round, then no past obligations to fill
              // else
                //amount of total profit ==> (TotalRaisedFunds - Beans&Packaging - EstShipping)
                //this is the amount to cut in half.
                //Half goes to last rounds Angel List , half goes to the RoastMEister

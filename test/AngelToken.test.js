const AngelToken = artifacts.require("./contracts/AngelToken.sol"); /* get the artifact files */
const BigNumber = web3.utils.BN;
require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should();

contract('AngelToken', (accounts) => {   /* ganache accounts for now */
    const _uri = 'SomeUriOnTheChain.crypto/idofthetoken';
    const _endeavor_name = 'Caffeine LaManna';
    const _endeavor_symbol = 'CafLaM';
    const _id = 0;
    const _issue_num = 1234;
    const _mint_date = 12102020;
    const _cost = 10;
    const _angel_coefficient = 0005;
    const _product = "1/2lb whole bean roasted coffee";
    const _status = 1;

    const _alm = [_uri, _endeavor_name, _endeavor_symbol, _id, _issue_num, _mint_date, _cost, _angel_coefficient, _status, _product];

    beforeEach(async () => {
      this.token = await AngelToken.new(_endeavor_name, _endeavor_symbol, _issue_num, _mint_date, _cost, _angel_coefficient, _status, _product);
      this.alm = await this.token.alms(0);
    })
    /* check for proper deployment of contract */
    describe('The Angel Token contract', async () => {
      describe('to have properly deployed ...', async () => {
        it('should have an address', async () => {
            const address = this.token.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
        });
        it("should have an ERC721 name", async () => {
            const name = await this.token.name();
            assert.equal(name, 'AngelToken');
        });
        it("should have an ERC721 symbol", async () => {
            const symbol = await this.token.symbol();
            assert.equal(symbol, 'ANGEL');
        });
      });
      /* check for Alm structure */
      describe('must structure an Alm which ...', async () => {
          it("should have a uri", async () => {
              var uri = this.alm.uri,
                   id = new BigNumber(this.alm.id),
                  sym = this.alm.sym; // console.log(uri);console.log("***^^^the above should be the same as the below vvv***");console.log(sym + id);
              assert.equal(uri, sym + id.toNumber());
          });
          it("should have a name", async () => {
              const name = this.alm.name;
              assert.equal(name, _alm[1]);
          });
          it("should have a symbol", async () => {
              const sym = this.alm.sym;
              assert.equal(sym, _alm[2]);
          });
          it("should have an id of proper length", async () => {
              var id = new BigNumber(this.alm.id);
              id = id.toNumber();
              var idl = id.toString().length;
              assert.equal(idl, 16);
          });
          it("should have an issue number", () => {
              const issue_num = this.alm.issue_num;
              assert.equal(issue_num, _alm[4]);
          });
          it("should have a mint date", () => {
              const mint_date = this.alm.mint_date;
              assert.equal(mint_date, _alm[5]);
          });
          it("should have a cost", () => {
              const cost = this.alm.cost;
              assert.equal(cost, _alm[6]);
          });
          it("should have an angel coefficient", () => {
              const angel_coefficient = this.alm.angel_coefficient;
              assert.equal(angel_coefficient, _alm[7]);
          });
          it("should have a status", () => {
              const status = this.alm.status;
              assert.equal(status, _alm[8]);
          });
          it("should have a product", () => {
              const product = this.alm.product;
              assert.equal(product, _alm[9]);
          });
      });

      /* check minting functionality */
      describe("must manifest new Angel Tokens which", async () => {
          it('should be marked in the manifest', async () => {
            var id = new BigNumber(this.alm.id);
            const is_on_manifest = await this.token.is_on_manifest(id);
            assert.equal(is_on_manifest, true);
          });
          it('should be uniquely identifiable', async () => {
            await this.token.manifestAngelToken(_endeavor_name, _endeavor_symbol, _issue_num, _mint_date, _cost, _angel_coefficient, _product, _status).should.be.rejected; // cannot mint the same AngelToken twice
          });
          describe('must mint ERC721 tokens alongside Angel Tokens which', async () => {
            it('should have mintData that is packaged in bytes for _safeMint()', async () => {
              const mintData = await this.token.mintData();
              console.log(mintData);

            })

            // which has a total supply function, as well as others to check



          });
      });
    });
});
// describe('minting', async () => {
//   it('creates a new token', async () => {
//     const result = await contract.mint('#EC058E')
//     const totalSupply = await contract.totalSupply()
//     //SUCCESS
//     assert.equal(totalSupply, 1)
//     const event = result.logs[0].args
//     assert.equal(event.tokenId.toNumber(), 1, 'id is correct')
//     // who it is minted from should be the corwdsale address
//     assert.equal(event.from, '0x0000000000000000000000000000000000000000', 'from is correct')
//     // who it is minted to will be the Angel Investor
//     assert.equal(event.to, accounts[0])
//
//     //FAILURE
//     await contract.mint('#EC058E').should.be.rejected; // cannot mint the same AngelToken twice
//   })
// })
//
// describe('indexing', async () => {
//   it('lists AngelTokens', async () => {
//     // mint 3 Tokens
//     await contract.mint('#5386E4')
//     await contract.mint('#FFFFFF')
//     await contract.mint('#000000')
//     const totalSupply = await contract.totalSupply()
//
//     let angel_tokens
//     let result = []
//
//     for (var i = 1; i <= totalSupply; i++) {
//       angel_tokens = await contract.angel_tokens(i-1)
//       result.push(angel_tokens)
//     }
//
//     let expected = ['#EC058E', '#5386E4', '#FFFFFF', '#000000']
//     assert.equal(result.join(','), expected.join(','))
//
//   })
// })

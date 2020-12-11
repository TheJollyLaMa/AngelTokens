const AngelToken = artifacts.require("./contracts/AngelToken.sol"); /* get the artifact files */

// require('chai')
//   .use(require('chai-as-promised'))
//   .should();

contract('AngelToken', (accounts) => {   /* ganache accounts for now */
    const _endeavor_name = 'Caffeine LaManna';
    const _endeavor_symbol = 'CafLaM';
    const _id = 123456789;
    const _issue_num = 1234;
    const _mint_date = 12102020;
    const _cost = 10;
    const _angel_coefficient = 0005;
    const _product = "1/2lb whole bean roasted coffee";
    const _status = "waiting";

    const _alm = [_endeavor_name, _endeavor_symbol, _id, _issue_num, _mint_date, _cost, _angel_coefficient, _product, _status];

    before(async () => {
      this.token = await AngelToken.new(_endeavor_name, _endeavor_symbol, _id, _issue_num, _mint_date, _cost, _angel_coefficient, _product, _status);
      this.alm = await this.token.alms(0);
    })
    /* check for proper deployment of contract */
    describe('The Angel Token contract', async () => {
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
        //
        describe('An Angel Endeavor', async () => {
            it("should have an endeavor name", async () => {
                const endeavor_name = await this.token.ename();
                assert.equal(endeavor_name, 'Caffeine LaManna');
            });
            it("should have an endeavor symbol", async () => {
                const endeavor_symbol = await this.token.esym();
                assert.equal(endeavor_symbol, 'CafLaM');
            });
        });
        describe('An Alm for an Angel Endeavor', async () => {
            it("should have a name", async () => {
                const name = this.alm.name;
                assert.equal(name, _alm[0]);
            });
            it("should have a symbol", async () => {
                const sym = this.alm.sym;
                assert.equal(sym, _alm[1]);
            });
            it("should have an id", async () => {
                const id = this.alm.id;
                assert.equal(id, _alm[2]);
            });
            it("should have an issue number", async () => {
                const issue_num = this.alm.issue_num;
                assert.equal(issue_num, _alm[3]);
            });
            it("should have a mint date", async () => {
                const mint_date = this.alm.mint_date;
                assert.equal(mint_date, _alm[4]);
            });
            it("should have a cost", () => {
                const cost = this.alm.cost;
                assert.equal(cost, _alm[5]);
            });
            it("should have an angel coefficient", () => {
                const angel_coefficient = this.alm.angel_coefficient;
                assert.equal(angel_coefficient, _alm[6]);
            });
            it("should have a status", () => {
                const status = this.alm.status;
                assert.equal(status, _alm[7]);
            });
            it("should have a product", () => {
                const product = this.alm.product;
                assert.equal(product, _alm[8]);
            });
        });
    });
    /* check minting functionality */
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
});

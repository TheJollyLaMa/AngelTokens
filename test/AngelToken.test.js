const AngelToken = artifacts.require("./AngelToken.sol"); /* get the artifact files */

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('AngelToken', (accounts) => {   /* ganache accounts for now */
    let contract;
    before(async () => {
      contract = await AngelToken.deployed();
    })
    /* check for proper deployment of contract */
    describe('deployment', async () => {
      it('deploys succesfully', async () => {
          const address = contract.address;
          assert.notEqual(address, 0x0);
          assert.notEqual(address, '');
          assert.notEqual(address, null);
          assert.notEqual(address, undefined);
      })
      it('has a name', async () => {
        const name = await contract.name()
        assert.equal(name, 'AngelToken')
      })
      it('has a symbol', async () => {
        const symbol = await contract.symbol()
        assert.equal(symbol, 'ANGEL')
      })
    })
    /* check minting functionality */
    describe('minting', async () => {
      it('creates a new token', async () => {
        const result = await contract.mint('#EC058E')
        const totalSupply = await contract.totalSupply()
        //SUCCESS
        assert.equal(totalSupply, 1)
        const event = result.logs[0].args
        assert.equal(event.tokenId.toNumber(), 1, 'id is correct')
        // who it is minted from should be the corwdsale address
        assert.equal(event.from, '0x0000000000000000000000000000000000000000', 'from is correct')
        // who it is minted to will be the Angel Investor
        assert.equal(event.to, accounts[0])

        //FAILURE
        await contract.mint('#EC058E').should.be.rejected; // cannot mint the same AngelToken twice
      })
    })

    describe('indexing', async () => {
      it('lists AngelTokens', async () => {
        // mint 3 Tokens
        await contract.mint('#5386E4')
        await contract.mint('#FFFFFF')
        await contract.mint('#000000')
        const totalSupply = await contract.totalSupply()

        let angel_tokens
        let result = []

        for (var i = 1; i <= totalSupply; i++) {
          angel_tokens = await contract.angel_tokens(i-1)
          result.push(angel_tokens)
        }

        let expected = ['#EC058E', '#5386E4', '#FFFFFF', '#000000']
        assert.equal(result.join(','), expected.join(','))

      })
    })
});

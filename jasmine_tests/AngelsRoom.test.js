describe('AngelsRoomController', function() {
  beforeEach(module('webApp')); // call the angular app by name
  var $controller, $rootscope;
  angular.mock.inject(function GetDependencies(BlockFactory){
    var MockBlockFactory = BlockFactory;
  });

  beforeEach(inject(function(_$controller_, _$rootScope_){
      $controller = _$controller_;
      $rootScope = _$rootScope_;

      // spyOn(BlockFactory, 'all').and.callFake(function() {
      //   return testjson;
      // });

  }));

  describe('"Load The Block"', function() {

    it('sanity check on init variables', function () {
      var $scope = $rootScope.$new();
      var controller = $controller('AngelsRoomController', {$scope: $scope});
        expect(controller).toBeDefined();
        expect($scope.test).toBe("testing data binding in the angel's room");
        expect(typeof($scope.newtoken)).toBe('string');
        expect(typeof($scope.ids)).toBe('object');
        expect(typeof($scope.uris)).toBe('object');
        expect(typeof($scope.AngelTokens)).toBe('object');
        expect(typeof($scope.token_ids_owned)).toBe('object');
        expect(typeof($scope.mintDataArray)).toBe('object');
        expect(typeof($scope.new_alm)).toBe('object');
    });
    it('fetches the token contract json from backend for use in the frontend', function() {
      var $scope = $rootScope.$new();
      var controller = $controller('AngelsRoomController', {$scope: $scope});
      console.log($scope.AngelTokenjson);
      var tokenJson = {
        "contractName": "AngelToken",
        "abi": [
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_ename",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_esym",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "_num_to_issue",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_mint_date",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_cost",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_angel_coefficient",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_status",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "_product",
                "type": "string"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
              }
            ],
            "name": "ApprovalForAll",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "_uri",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "_ename",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "_esym",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
              }
            ],
            "name": "ManifestedAngelToken",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "bytes",
                "name": "mintData",
                "type": "bytes"
              }
            ],
            "name": "MintDataEvent",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
              },
              {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
              }
            ],
            "name": "TransferBatch",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "TransferSingle",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "string",
                "name": "value",
                "type": "string"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              }
            ],
            "name": "URI",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "alms",
            "outputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "uri",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "sym",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              }
            ],
            "name": "balanceOf",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "address[]",
                "name": "accounts",
                "type": "address[]"
              },
              {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
              }
            ],
            "name": "balanceOfBatch",
            "outputs": [
              {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "operator",
                "type": "address"
              }
            ],
            "name": "isApprovedForAll",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "is_on_manifest",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "map_owner_to_id",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "name": "map_uri_to_Alm",
            "outputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "uri",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "sym",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [],
            "name": "mintData",
            "outputs": [
              {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
              },
              {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "name": "safeBatchTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
              }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
              }
            ],
            "name": "supportsInterface",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "uri",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_ename",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_esym",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "_num_to_issue",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_mint_date",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_cost",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_angel_coefficient",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_status",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "_product",
                "type": "string"
              }
            ],
            "name": "tokenGenesis",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getAlmsLength",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          }
        ],
        "metadata": "{\"compiler\":{\"version\":\"0.6.12+commit.27d51765\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_ename\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_esym\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_num_to_issue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_mint_date\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_cost\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_angel_coefficient\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_status\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_product\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"_uri\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"_ename\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"_esym\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"ManifestedAngelToken\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"mintData\",\"type\":\"bytes\"}],\"name\":\"MintDataEvent\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"TransferBatch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"URI\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"alms\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"uri\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"sym\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"}],\"name\":\"balanceOfBatch\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getAlmsLength\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"is_on_manifest\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"map_owner_to_id\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"map_uri_to_Alm\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"uri\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"sym\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"mintData\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeBatchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_ename\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_esym\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_num_to_issue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_mint_date\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_cost\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_angel_coefficient\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_status\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_product\",\"type\":\"string\"}],\"name\":\"tokenGenesis\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"uri\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"balanceOf(address,uint256)\":{\"details\":\"See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.\"},\"balanceOfBatch(address[],uint256[])\":{\"details\":\"See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC1155-isApprovedForAll}.\"},\"safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)\":{\"details\":\"See {IERC1155-safeBatchTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,uint256,bytes)\":{\"details\":\"See {IERC1155-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC1155-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"uri(uint256)\":{\"details\":\"See {IERC1155MetadataURI-uri}. This implementation returns the same URI for *all* token types. It relies on the token type ID substitution mechanism https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP]. Clients calling this function must replace the `\\\\{id\\\\}` substring with the actual token type ID.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/Volumes/ETH/webApp6/contracts/AngelToken.sol\":\"AngelToken\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Volumes/ETH/webApp6/contracts/AngelToken.sol\":{\"keccak256\":\"0x71db4cc3a45c8a3b06c05f0346119f08b48c80169255485a580fe6b19966519c\",\"urls\":[\"bzz-raw://4ecadd0f970415d3433f84d206f684aa6c972fe0540b2c1e18038252c9c7f645\",\"dweb:/ipfs/QmYydPLseefbg45AP8RpeV2p7Hyto8Q5EGNpMw3xnWCBFS\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ded47ec7c96750f9bd04bbbc84f659992d4ba901cb7b532a52cd468272cf378f\",\"dweb:/ipfs/QmfBrGtQP7rZEqEg6Wz6jh2N2Kukpj1z5v3CGWmAqrzm96\"]},\"@openzeppelin/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0xd6b90e604fb2eb2d641c7110c72440bf2dc999ec6ab8ff60f200e71ca75d1d90\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7b92d8ab83b21ff984b1f0d6d66897d5afb1f2052004cbcb133cea023e0ae468\",\"dweb:/ipfs/QmTarypkQrFp4UMjTh7Zzhz2nZLz5uPS4nJQtHDEuwBVe6\"]},\"@openzeppelin/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xf70bc25d981e4ec9673a995ad2995d5d493ea188d3d8f388bba9c227ce09fb82\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bd970f51e3a77790c2f02b5b1759827c3b897c3d98c407b3631e8af32e3dc93c\",\"dweb:/ipfs/QmPF85Amgbqjk3SNZKsPCsqCw8JfwYEPMnnhvMJUyX58je\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x3b21f2c8d626de3b9925ae33e972d8bf5c8b1bffb3f4ee94daeed7d0679036e6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7f8d45329fecbf0836ad7543330c3ecd0f8d0ffa42d4016278c3eb2215fdcdfe\",\"dweb:/ipfs/QmXWLT7GcnHtA5NiD6MFi2CV3EWJY4wv5mLNnypqYDrxL3\"]},\"@openzeppelin/contracts/token/ERC1155/ERC1155.sol\":{\"keccak256\":\"0xe7fff2c63a8ae715484391eb8626588e27194d7b5b1bf4b60e413b7e1f84b3ad\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0712ac4fd76480553208b1a85e88333d909f87f58df9679e0672df2ac1e93450\",\"dweb:/ipfs/Qmbj7gRTwzkvGvF4dcyFz6zjXEXNZsQCvvEha5RCK2mEtt\"]},\"@openzeppelin/contracts/token/ERC1155/IERC1155.sol\":{\"keccak256\":\"0x61321d2c86346045bf394885ee3afeecc65f9daad2694bc19110967588fd7b5d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1703b877203e0447ede72dcf73f1c4f2089b415bd1c44877904128a64fafed5b\",\"dweb:/ipfs/QmaZoYDo2FWtKcwCc9zuabU6zri8KV9xJrhU614d93sLid\"]},\"@openzeppelin/contracts/token/ERC1155/IERC1155MetadataURI.sol\":{\"keccak256\":\"0xd918cca1b659f588a6d12d05fd7196179a8b1eac9133d7f77da7ef3133e13256\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7c75d578f42e2e2e427b934e6c41cc759be2d0a52155868308e915328c8feb2b\",\"dweb:/ipfs/QmbFNHtWAoNhe82Hy6yKTePWJRczqzp1APSBfLS9XfAN6e\"]},\"@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\":{\"keccak256\":\"0x2690a9b7f4f7489b8d25a4fc6bffc02ec3971fb41ed6c8b59adef2833bdab07c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8148c99452b6793ac9599abdc8bdaf4eeb47f34590beea8aa01089be14e2990c\",\"dweb:/ipfs/QmNdenmZ4EDfH9TuBas3pHeGuZvDNo2rsfgUj6ka8vuH37\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6a15ddddcbf29d2922a1e0d4151b5d2d33da24b93cc9ebc12390e0d855532f8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7c119bcaecfa853d564ac88d312777f75fa1126a3bca88a3371adb0ad9f35cb0\",\"dweb:/ipfs/QmY9UPuXeSKq86Zh38fE43VGQPhKMN34mkuFSFqPcr6nvZ\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x16b5422892fbdd9648f12e59de85b42efd57d76b6d6b2358cb46e0f6d4a71aaf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ef38821a4ee756757dc1ce9074ef6096d1b5c760627e92c0852d788dc636ea7\",\"dweb:/ipfs/QmdGwP6BtRMcp4VVJUWwTmXEjYmL52A8WZpBdFJYmzc9pJ\"]}},\"version\":1}",
        "bytecode": "0x60806040523480156200001157600080fd5b5060405162004e1938038062004e1983398181016040526101008110156200003857600080fd5b81019080805160405193929190846401000000008211156200005957600080fd5b838201915060208201858111156200007057600080fd5b82518660018202830111640100000000821117156200008e57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c4578082015181840152602081019050620000a7565b50505050905090810190601f168015620000f25780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011657600080fd5b838201915060208201858111156200012d57600080fd5b82518660018202830111640100000000821117156200014b57600080fd5b8083526020830192505050908051906020019080838360005b838110156200018157808201518184015260208101905062000164565b50505050905090810190601f168015620001af5780820380516001836020036101000a031916815260200191505b506040526020018051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805160405193929190846401000000008211156200020557600080fd5b838201915060208201858111156200021c57600080fd5b82518660018202830111640100000000821117156200023a57600080fd5b8083526020830192505050908051906020019080838360005b838110156200027057808201518184015260208101905062000253565b50505050905090810190601f1680156200029e5780820380516001836020036101000a031916815260200191505b506040525050506040518060400160405280601681526020017f687474703a2f2f6c6f63616c686f73743a333030302f00000000000000000000815250620002f36301ffc9a760e01b6200035b60201b60201c565b62000304816200046460201b60201c565b6200031c63d9b67a2660e01b6200035b60201b60201c565b62000334630e89341c60e01b6200035b60201b60201c565b506200034d88888888888888886200048060201b60201c565b5050505050505050620014dc565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620003f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b80600390805190602001906200047c92919062001288565b5050565b6200048a6200130f565b33816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508881604001819052508781606001819052506000620004e78a62000b6d60201b60201c565b90506005600082815260200190815260200160002060009054906101000a900460ff16156200051557600080fd5b8082608001818152505060016005600083815260200190815260200160002060006101000a81548160ff02191690831515021790555088816040516020018083805190602001908083835b6020831062000585578051825260208201915060208101905060208303925062000560565b6001836020036101000a038019825116818451168082178552505050505050905001828152602001925050506040516020818303038152906040526040516020018082805190602001908083835b60208310620005f85780518252602082019150602081019050602083039250620005d3565b6001836020036101000a038019825116818451168082178552505050505050905001807f2e6a736f6e0000000000000000000000000000000000000000000000000000008152506005019150506040516020818303038152906040528260200181905250600882908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019080519060200190620006ed92919062001288565b5060408201518160020190805190602001906200070c92919062001288565b5060608201518160030190805190602001906200072b92919062001288565b506080820151816004015550508787878787876040516020018087815260200186815260200185815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015620007a157808201518184015260208101905062000784565b50505050905090810190601f168015620007cf5780820380516001836020036101000a031916815260200191505b5097505050505050505060405160208183030381529060405260049080519060200190620007ff92919062001354565b5080600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550620008f633828a60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015620008e55780601f10620008b957610100808354040283529160200191620008e5565b820191906000526020600020905b815481529060010190602001808311620008c757829003601f168201915b505050505062000c0960201b60201c565b7f12ae7fc64a50ae84cc0201fbe8dbdd65d11d5627f33d37124e44d747d70a1e2560046040518080602001828103825283818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015620009a65780601f106200097a57610100808354040283529160200191620009a6565b820191906000526020600020905b8154815290600101906020018083116200098857829003601f168201915b50509250505060405180910390a17f9eddef0401d389a49df6a624b2fcc2bc33528e291a3411510efc02fc415935d4826000015183602001518c8c85604051808673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001858152602001848103845288818151815260200191508051906020019080838360005b8381101562000a4e57808201518184015260208101905062000a31565b50505050905090810190601f16801562000a7c5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b8381101562000ab757808201518184015260208101905062000a9a565b50505050905090810190601f16801562000ae55780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019080838360005b8381101562000b2057808201518184015260208101905062000b03565b50505050905090810190601f16801562000b4e5780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390a150505050505050505050565b600080662386f26fc1000090506000836040516020018082805190602001908083835b6020831062000bb5578051825260208201915060208101905060208303925062000b90565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528051906020012060001c905081818162000bff57fe5b0692505050919050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141562000c91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018062004df86021913960400191505060405180910390fd5b600062000ca362000e3d60201b60201c565b905062000cdc8160008762000cbe8862000e4560201b60201c565b62000ccf8862000e4560201b60201c565b8762000eb860201b60201c565b62000d46836001600087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205462000ec060201b620029341790919060201c565b6001600086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628787604051808381526020018281526020019250505060405180910390a462000e368160008787878762000f4960201b60201c565b5050505050565b600033905090565b606080600167ffffffffffffffff8111801562000e6157600080fd5b5060405190808252806020026020018201604052801562000e915781602001602082028036833780820191505090505b509050828160008151811062000ea357fe5b60200260200101818152505080915050919050565b505050505050565b60008082840190508381101562000f3f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b62000f758473ffffffffffffffffffffffffffffffffffffffff166200127560201b620029bc1760201c565b156200126d578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156200103157808201518184015260208101905062001014565b50505050905090810190601f1680156200105f5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b1580156200108357600080fd5b505af1925050508015620010b957506040513d6020811015620010a557600080fd5b810190808051906020019092919050505060015b620011cc57620010c862001418565b80620010d557506200117a565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156200113e57808201518184015260208101905062001121565b50505050905090810190601f1680156200116c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603481526020018062004d9c6034913960400191505060405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146200126b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018062004dd06028913960400191505060405180910390fd5b505b505050505050565b600080823b905060008111915050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620012cb57805160ff1916838001178555620012fc565b82800160010185558215620012fc579182015b82811115620012fb578251825591602001919060010190620012de565b5b5090506200130b9190620013db565b5090565b6040518060a00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016060815260200160608152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200139757805160ff1916838001178555620013c8565b82800160010185558215620013c8579182015b82811115620013c7578251825591602001919060010190620013aa565b5b509050620013d79190620013db565b5090565b5b80821115620013f6576000816000905550600101620013dc565b5090565b6000601f19601f8301169050919050565b60008160e01c9050919050565b600060443d10156200142a57620014d9565b60046000803e6200143d6000516200140b565b6308c379a08114620014505750620014d9565b60405160043d036004823e80513d602482011167ffffffffffffffff821117156200147e57505050620014d9565b808201805167ffffffffffffffff8111156200149f575050505050620014d9565b8060208301013d8501811115620014bc57505050505050620014d9565b620014c782620013fa565b60208401016040528296505050505050505b90565b6138b080620014ec6000396000f3fe608060405234801561001057600080fd5b50600436106100f45760003560e01c80635195e8c511610097578063bd37c35e11610066578063bd37c35e146109e6578063d2a55e3314610c02578063e985e9c514610da5578063f242432a14610e1f576100f4565b80635195e8c51461089d578063590743e5146109205780635d91889a14610978578063a22cb46514610996576100f4565b80632ba5d427116100d35780632ba5d427146102655780632eb2c2d6146104955780634b8ae8cd146106b85780634e1273f4146106fc576100f4565b8062fdd58e146100f957806301ffc9a71461015b5780630e89341c146101be575b600080fd5b6101456004803603604081101561010f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f2e565b6040518082815260200191505060405180910390f35b6101a66004803603602081101561017157600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061100e565b60405180821515815260200191505060405180910390f35b6101ea600480360360208110156101d457600080fd5b8101908080359060200190929190505050611075565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561022a57808201518184015260208101905061020f565b50505050905090810190601f1680156102575780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61031e6004803603602081101561027b57600080fd5b810190808035906020019064010000000081111561029857600080fd5b8201836020820111156102aa57600080fd5b803590602001918460018302840111640100000000831117156102cc57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611119565b604051808673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001858152602001848103845288818151815260200191508051906020019080838360005b8381101561038857808201518184015260208101905061036d565b50505050905090810190601f1680156103b55780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b838110156103ee5780820151818401526020810190506103d3565b50505050905090810190601f16801561041b5780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019080838360005b83811015610454578082015181840152602081019050610439565b50505050905090810190601f1680156104815780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b6106b6600480360360a08110156104ab57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561050857600080fd5b82018360208201111561051a57600080fd5b8035906020019184602083028401116401000000008311171561053c57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561059c57600080fd5b8201836020820111156105ae57600080fd5b803590602001918460208302840111640100000000831117156105d057600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561063057600080fd5b82018360208201111561064257600080fd5b8035906020019184600183028401116401000000008311171561066457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061134d565b005b6106e4600480360360208110156106ce57600080fd5b81019080803590602001909291905050506117d8565b60405180821515815260200191505060405180910390f35b6108466004803603604081101561071257600080fd5b810190808035906020019064010000000081111561072f57600080fd5b82018360208201111561074157600080fd5b8035906020019184602083028401116401000000008311171561076357600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156107c357600080fd5b8201836020820111156107d557600080fd5b803590602001918460208302840111640100000000831117156107f757600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192905050506117f8565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561088957808201518184015260208101905061086e565b505050509050019250505060405180910390f35b6108a56119ea565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108e55780820151818401526020810190506108ca565b50505050905090810190601f1680156109125780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6109626004803603602081101561093657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a88565b6040518082815260200191505060405180910390f35b610980611aa0565b6040518082815260200191505060405180910390f35b6109e4600480360360408110156109ac57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611aad565b005b610c0060048036036101008110156109fd57600080fd5b8101908080359060200190640100000000811115610a1a57600080fd5b820183602082011115610a2c57600080fd5b80359060200191846001830284011164010000000083111715610a4e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610ab157600080fd5b820183602082011115610ac357600080fd5b80359060200191846001830284011164010000000083111715610ae557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190640100000000811115610b7a57600080fd5b820183602082011115610b8c57600080fd5b80359060200191846001830284011164010000000083111715610bae57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611c46565b005b610c2e60048036036020811015610c1857600080fd5b8101908080359060200190929190505050612300565b604051808673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001858152602001848103845288818151815260200191508051906020019080838360005b83811015610c98578082015181840152602081019050610c7d565b50505050905090810190601f168015610cc55780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610cfe578082015181840152602081019050610ce3565b50505050905090810190601f168015610d2b5780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019080838360005b83811015610d64578082015181840152602081019050610d49565b50505050905090810190601f168015610d915780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b610e0760048036036040811015610dbb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061252b565b60405180821515815260200191505060405180910390f35b610f2c600480360360a0811015610e3557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190640100000000811115610ea657600080fd5b820183602082011115610eb857600080fd5b80359060200191846001830284011164010000000083111715610eda57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506125bf565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610fb5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806136da602b913960400191505060405180910390fd5b6001600083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060038054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561110d5780601f106110e25761010080835404028352916020019161110d565b820191906000526020600020905b8154815290600101906020018083116110f057829003601f168201915b50505050509050919050565b6007818051602081018201805184825260208301602085012081835280955050505050506000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112015780601f106111d657610100808354040283529160200191611201565b820191906000526020600020905b8154815290600101906020018083116111e457829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561129f5780601f106112745761010080835404028352916020019161129f565b820191906000526020600020905b81548152906001019060200180831161128257829003601f168201915b505050505090806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561133d5780601f106113125761010080835404028352916020019161133d565b820191906000526020600020905b81548152906001019060200180831161132057829003601f168201915b5050505050908060040154905085565b81518351146113a7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806138326028913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561142d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061375f6025913960400191505060405180910390fd5b6114356129cf565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061147b575061147a856114756129cf565b61252b565b5b6114d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806137846032913960400191505060405180910390fd5b60006114da6129cf565b90506114ea8187878787876129d7565b60005b84518110156116bb57600085828151811061150457fe5b60200260200101519050600085838151811061151c57fe5b602002602001015190506115a3816040518060600160405280602a81526020016137b6602a91396001600086815260200190815260200160002060008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546129df9092919063ffffffff16565b6001600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061165a816001600085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461293490919063ffffffff16565b6001600084815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050508060010190506114ed565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561176b578082015181840152602081019050611750565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156117ad578082015181840152602081019050611792565b5050505090500194505050505060405180910390a46117d0818787878787612a9f565b505050505050565b60056020528060005260406000206000915054906101000a900460ff1681565b60608151835114611854576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806138096029913960400191505060405180910390fd5b6060835167ffffffffffffffff8111801561186e57600080fd5b5060405190808252806020026020018201604052801561189d5781602001602082028036833780820191505090505b50905060005b84518110156119df57600073ffffffffffffffffffffffffffffffffffffffff168582815181106118d057fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff161415611945576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806137056031913960400191505060405180910390fd5b6001600085838151811061195557fe5b60200260200101518152602001908152602001600020600086838151811061197957fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548282815181106119c857fe5b6020026020010181815250508060010190506118a3565b508091505092915050565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a805780601f10611a5557610100808354040283529160200191611a80565b820191906000526020600020905b815481529060010190602001808311611a6357829003601f168201915b505050505081565b60066020528060005260406000206000915090505481565b6000600880549050905090565b8173ffffffffffffffffffffffffffffffffffffffff16611acc6129cf565b73ffffffffffffffffffffffffffffffffffffffff161415611b39576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806137e06029913960400191505060405180910390fd5b8060026000611b466129cf565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611bf36129cf565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b611c4e613447565b33816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508881604001819052508781606001819052506000611ca38a612e2e565b90506005600082815260200190815260200160002060009054906101000a900460ff1615611cd057600080fd5b8082608001818152505060016005600083815260200190815260200160002060006101000a81548160ff02191690831515021790555088816040516020018083805190602001908083835b60208310611d3e5780518252602082019150602081019050602083039250611d1b565b6001836020036101000a038019825116818451168082178552505050505050905001828152602001925050506040516020818303038152906040526040516020018082805190602001908083835b60208310611daf5780518252602082019150602081019050602083039250611d8c565b6001836020036101000a038019825116818451168082178552505050505050905001807f2e6a736f6e0000000000000000000000000000000000000000000000000000008152506005019150506040516020818303038152906040528260200181905250600882908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019080519060200190611ea292919061348c565b506040820151816002019080519060200190611ebf92919061348c565b506060820151816003019080519060200190611edc92919061348c565b506080820151816004015550508787878787876040516020018087815260200186815260200185815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611f50578082015181840152602081019050611f35565b50505050905090810190601f168015611f7d5780820380516001836020036101000a031916815260200191505b5097505050505050505060405160208183030381529060405260049080519060200190611fab92919061350c565b5080600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061209633828a60048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561208c5780601f106120615761010080835404028352916020019161208c565b820191906000526020600020905b81548152906001019060200180831161206f57829003601f168201915b5050505050612ec7565b7f12ae7fc64a50ae84cc0201fbe8dbdd65d11d5627f33d37124e44d747d70a1e25600460405180806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156121425780601f1061211757610100808354040283529160200191612142565b820191906000526020600020905b81548152906001019060200180831161212557829003601f168201915b50509250505060405180910390a17f9eddef0401d389a49df6a624b2fcc2bc33528e291a3411510efc02fc415935d4826000015183602001518c8c85604051808673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001858152602001848103845288818151815260200191508051906020019080838360005b838110156121e85780820151818401526020810190506121cd565b50505050905090810190601f1680156122155780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b8381101561224e578082015181840152602081019050612233565b50505050905090810190601f16801561227b5780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019080838360005b838110156122b4578082015181840152602081019050612299565b50505050905090810190601f1680156122e15780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390a150505050505050505050565b6008818154811061230d57fe5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156123df5780601f106123b4576101008083540402835291602001916123df565b820191906000526020600020905b8154815290600101906020018083116123c257829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561247d5780601f106124525761010080835404028352916020019161247d565b820191906000526020600020905b81548152906001019060200180831161246057829003601f168201915b505050505090806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561251b5780601f106124f05761010080835404028352916020019161251b565b820191906000526020600020905b8154815290600101906020018083116124fe57829003601f168201915b5050505050908060040154905085565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415612645576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061375f6025913960400191505060405180910390fd5b61264d6129cf565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061269357506126928561268d6129cf565b61252b565b5b6126e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806137366029913960400191505060405180910390fd5b60006126f26129cf565b9050612712818787612703886130ca565b61270c886130ca565b876129d7565b61278f836040518060600160405280602a81526020016137b6602a91396001600088815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546129df9092919063ffffffff16565b6001600086815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612846836001600087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461293490919063ffffffff16565b6001600086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628787604051808381526020018281526020019250505060405180910390a461292c81878787878761313a565b505050505050565b6000808284019050838110156129b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600080823b905060008111915050919050565b600033905090565b505050505050565b6000838311158290612a8c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612a51578082015181840152602081019050612a36565b50505050905090810190601f168015612a7e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b612abe8473ffffffffffffffffffffffffffffffffffffffff166129bc565b15612e26578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015612b76578082015181840152602081019050612b5b565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015612bb8578082015181840152602081019050612b9d565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015612bf7578082015181840152602081019050612bdc565b50505050905090810190601f168015612c245780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b158015612c4957600080fd5b505af1925050508015612c7d57506040513d6020811015612c6957600080fd5b810190808051906020019092919050505060015b612d8757612c896135c7565b80612c945750612d36565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612cfb578082015181840152602081019050612ce0565b50505050905090810190601f168015612d285780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603481526020018061367e6034913960400191505060405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614612e24576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806136b26028913960400191505060405180910390fd5b505b505050505050565b600080662386f26fc1000090506000836040516020018082805190602001908083835b60208310612e745780518252602082019150602081019050602083039250612e51565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528051906020012060001c9050818181612ebd57fe5b0692505050919050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415612f4d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061385a6021913960400191505060405180910390fd5b6000612f576129cf565b9050612f7881600087612f69886130ca565b612f72886130ca565b876129d7565b612fdb836001600087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461293490919063ffffffff16565b6001600086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628787604051808381526020018281526020019250505060405180910390a46130c38160008787878761313a565b5050505050565b606080600167ffffffffffffffff811180156130e557600080fd5b506040519080825280602002602001820160405280156131145781602001602082028036833780820191505090505b509050828160008151811061312557fe5b60200260200101818152505080915050919050565b6131598473ffffffffffffffffffffffffffffffffffffffff166129bc565b1561343f578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156132125780820151818401526020810190506131f7565b50505050905090810190601f16801561323f5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b15801561326257600080fd5b505af192505050801561329657506040513d602081101561328257600080fd5b810190808051906020019092919050505060015b6133a0576132a26135c7565b806132ad575061334f565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156133145780820151818401526020810190506132f9565b50505050905090810190601f1680156133415780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603481526020018061367e6034913960400191505060405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461343d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806136b26028913960400191505060405180910390fd5b505b505050505050565b6040518060a00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016060815260200160608152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106134cd57805160ff19168380011785556134fb565b828001600101855582156134fb579182015b828111156134fa5782518255916020019190600101906134df565b5b509050613508919061358c565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061354d57805160ff191683800117855561357b565b8280016001018555821561357b579182015b8281111561357a57825182559160200191906001019061355f565b5b509050613588919061358c565b5090565b5b808211156135a557600081600090555060010161358d565b5090565b6000601f19601f8301169050919050565b60008160e01c9050919050565b600060443d10156135d75761367a565b60046000803e6135e86000516135ba565b6308c379a081146135f9575061367a565b60405160043d036004823e80513d602482011167ffffffffffffffff821117156136255750505061367a565b808201805167ffffffffffffffff81111561364457505050505061367a565b8060208301013d850181111561365f5750505050505061367a565b613668826135a9565b60208401016040528296505050505050505b9056fe455243313135353a207472616e7366657220746f206e6f6e2045524331313535526563656976657220696d706c656d656e746572455243313135353a204552433131353552656365697665722072656a656374656420746f6b656e73455243313135353a2062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a2062617463682062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a207472616e7366657220746f20746865207a65726f2061646472657373455243313135353a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a20696e73756666696369656e742062616c616e636520666f72207472616e73666572455243313135353a2073657474696e6720617070726f76616c2073746174757320666f722073656c66455243313135353a206163636f756e747320616e6420696473206c656e677468206d69736d61746368455243313135353a2069647320616e6420616d6f756e7473206c656e677468206d69736d61746368455243313135353a206d696e7420746f20746865207a65726f2061646472657373a2646970667358221220cb75921fdf7614cd96649b68436343e1ac63ec9fed98e4a5349549ec2a9e353a64736f6c634300060c0033455243313135353a207472616e7366657220746f206e6f6e2045524331313535526563656976657220696d706c656d656e746572455243313135353a204552433131353552656365697665722072656a656374656420746f6b656e73455243313135353a206d696e7420746f20746865207a65726f2061646472657373",
        "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100f45760003560e01c80635195e8c511610097578063bd37c35e11610066578063bd37c35e146109e6578063d2a55e3314610c02578063e985e9c514610da5578063f242432a14610e1f576100f4565b80635195e8c51461089d578063590743e5146109205780635d91889a14610978578063a22cb46514610996576100f4565b80632ba5d427116100d35780632ba5d427146102655780632eb2c2d6146104955780634b8ae8cd146106b85780634e1273f4146106fc576100f4565b8062fdd58e146100f957806301ffc9a71461015b5780630e89341c146101be575b600080fd5b6101456004803603604081101561010f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f2e565b6040518082815260200191505060405180910390f35b6101a66004803603602081101561017157600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061100e565b60405180821515815260200191505060405180910390f35b6101ea600480360360208110156101d457600080fd5b8101908080359060200190929190505050611075565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561022a57808201518184015260208101905061020f565b50505050905090810190601f1680156102575780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61031e6004803603602081101561027b57600080fd5b810190808035906020019064010000000081111561029857600080fd5b8201836020820111156102aa57600080fd5b803590602001918460018302840111640100000000831117156102cc57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611119565b604051808673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001858152602001848103845288818151815260200191508051906020019080838360005b8381101561038857808201518184015260208101905061036d565b50505050905090810190601f1680156103b55780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b838110156103ee5780820151818401526020810190506103d3565b50505050905090810190601f16801561041b5780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019080838360005b83811015610454578082015181840152602081019050610439565b50505050905090810190601f1680156104815780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b6106b6600480360360a08110156104ab57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561050857600080fd5b82018360208201111561051a57600080fd5b8035906020019184602083028401116401000000008311171561053c57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561059c57600080fd5b8201836020820111156105ae57600080fd5b803590602001918460208302840111640100000000831117156105d057600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561063057600080fd5b82018360208201111561064257600080fd5b8035906020019184600183028401116401000000008311171561066457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061134d565b005b6106e4600480360360208110156106ce57600080fd5b81019080803590602001909291905050506117d8565b60405180821515815260200191505060405180910390f35b6108466004803603604081101561071257600080fd5b810190808035906020019064010000000081111561072f57600080fd5b82018360208201111561074157600080fd5b8035906020019184602083028401116401000000008311171561076357600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156107c357600080fd5b8201836020820111156107d557600080fd5b803590602001918460208302840111640100000000831117156107f757600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192905050506117f8565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561088957808201518184015260208101905061086e565b505050509050019250505060405180910390f35b6108a56119ea565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108e55780820151818401526020810190506108ca565b50505050905090810190601f1680156109125780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6109626004803603602081101561093657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a88565b6040518082815260200191505060405180910390f35b610980611aa0565b6040518082815260200191505060405180910390f35b6109e4600480360360408110156109ac57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611aad565b005b610c0060048036036101008110156109fd57600080fd5b8101908080359060200190640100000000811115610a1a57600080fd5b820183602082011115610a2c57600080fd5b80359060200191846001830284011164010000000083111715610a4e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610ab157600080fd5b820183602082011115610ac357600080fd5b80359060200191846001830284011164010000000083111715610ae557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190640100000000811115610b7a57600080fd5b820183602082011115610b8c57600080fd5b80359060200191846001830284011164010000000083111715610bae57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611c46565b005b610c2e60048036036020811015610c1857600080fd5b8101908080359060200190929190505050612300565b604051808673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001858152602001848103845288818151815260200191508051906020019080838360005b83811015610c98578082015181840152602081019050610c7d565b50505050905090810190601f168015610cc55780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b83811015610cfe578082015181840152602081019050610ce3565b50505050905090810190601f168015610d2b5780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019080838360005b83811015610d64578082015181840152602081019050610d49565b50505050905090810190601f168015610d915780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b610e0760048036036040811015610dbb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061252b565b60405180821515815260200191505060405180910390f35b610f2c600480360360a0811015610e3557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190640100000000811115610ea657600080fd5b820183602082011115610eb857600080fd5b80359060200191846001830284011164010000000083111715610eda57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506125bf565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610fb5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806136da602b913960400191505060405180910390fd5b6001600083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060038054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561110d5780601f106110e25761010080835404028352916020019161110d565b820191906000526020600020905b8154815290600101906020018083116110f057829003601f168201915b50505050509050919050565b6007818051602081018201805184825260208301602085012081835280955050505050506000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112015780601f106111d657610100808354040283529160200191611201565b820191906000526020600020905b8154815290600101906020018083116111e457829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561129f5780601f106112745761010080835404028352916020019161129f565b820191906000526020600020905b81548152906001019060200180831161128257829003601f168201915b505050505090806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561133d5780601f106113125761010080835404028352916020019161133d565b820191906000526020600020905b81548152906001019060200180831161132057829003601f168201915b5050505050908060040154905085565b81518351146113a7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806138326028913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561142d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061375f6025913960400191505060405180910390fd5b6114356129cf565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061147b575061147a856114756129cf565b61252b565b5b6114d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806137846032913960400191505060405180910390fd5b60006114da6129cf565b90506114ea8187878787876129d7565b60005b84518110156116bb57600085828151811061150457fe5b60200260200101519050600085838151811061151c57fe5b602002602001015190506115a3816040518060600160405280602a81526020016137b6602a91396001600086815260200190815260200160002060008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546129df9092919063ffffffff16565b6001600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061165a816001600085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461293490919063ffffffff16565b6001600084815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050508060010190506114ed565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561176b578082015181840152602081019050611750565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156117ad578082015181840152602081019050611792565b5050505090500194505050505060405180910390a46117d0818787878787612a9f565b505050505050565b60056020528060005260406000206000915054906101000a900460ff1681565b60608151835114611854576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806138096029913960400191505060405180910390fd5b6060835167ffffffffffffffff8111801561186e57600080fd5b5060405190808252806020026020018201604052801561189d5781602001602082028036833780820191505090505b50905060005b84518110156119df57600073ffffffffffffffffffffffffffffffffffffffff168582815181106118d057fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff161415611945576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806137056031913960400191505060405180910390fd5b6001600085838151811061195557fe5b60200260200101518152602001908152602001600020600086838151811061197957fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548282815181106119c857fe5b6020026020010181815250508060010190506118a3565b508091505092915050565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a805780601f10611a5557610100808354040283529160200191611a80565b820191906000526020600020905b815481529060010190602001808311611a6357829003601f168201915b505050505081565b60066020528060005260406000206000915090505481565b6000600880549050905090565b8173ffffffffffffffffffffffffffffffffffffffff16611acc6129cf565b73ffffffffffffffffffffffffffffffffffffffff161415611b39576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806137e06029913960400191505060405180910390fd5b8060026000611b466129cf565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611bf36129cf565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b611c4e613447565b33816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508881604001819052508781606001819052506000611ca38a612e2e565b90506005600082815260200190815260200160002060009054906101000a900460ff1615611cd057600080fd5b8082608001818152505060016005600083815260200190815260200160002060006101000a81548160ff02191690831515021790555088816040516020018083805190602001908083835b60208310611d3e5780518252602082019150602081019050602083039250611d1b565b6001836020036101000a038019825116818451168082178552505050505050905001828152602001925050506040516020818303038152906040526040516020018082805190602001908083835b60208310611daf5780518252602082019150602081019050602083039250611d8c565b6001836020036101000a038019825116818451168082178552505050505050905001807f2e6a736f6e0000000000000000000000000000000000000000000000000000008152506005019150506040516020818303038152906040528260200181905250600882908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019080519060200190611ea292919061348c565b506040820151816002019080519060200190611ebf92919061348c565b506060820151816003019080519060200190611edc92919061348c565b506080820151816004015550508787878787876040516020018087815260200186815260200185815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611f50578082015181840152602081019050611f35565b50505050905090810190601f168015611f7d5780820380516001836020036101000a031916815260200191505b5097505050505050505060405160208183030381529060405260049080519060200190611fab92919061350c565b5080600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061209633828a60048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561208c5780601f106120615761010080835404028352916020019161208c565b820191906000526020600020905b81548152906001019060200180831161206f57829003601f168201915b5050505050612ec7565b7f12ae7fc64a50ae84cc0201fbe8dbdd65d11d5627f33d37124e44d747d70a1e25600460405180806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156121425780601f1061211757610100808354040283529160200191612142565b820191906000526020600020905b81548152906001019060200180831161212557829003601f168201915b50509250505060405180910390a17f9eddef0401d389a49df6a624b2fcc2bc33528e291a3411510efc02fc415935d4826000015183602001518c8c85604051808673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001858152602001848103845288818151815260200191508051906020019080838360005b838110156121e85780820151818401526020810190506121cd565b50505050905090810190601f1680156122155780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b8381101561224e578082015181840152602081019050612233565b50505050905090810190601f16801561227b5780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019080838360005b838110156122b4578082015181840152602081019050612299565b50505050905090810190601f1680156122e15780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390a150505050505050505050565b6008818154811061230d57fe5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156123df5780601f106123b4576101008083540402835291602001916123df565b820191906000526020600020905b8154815290600101906020018083116123c257829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561247d5780601f106124525761010080835404028352916020019161247d565b820191906000526020600020905b81548152906001019060200180831161246057829003601f168201915b505050505090806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561251b5780601f106124f05761010080835404028352916020019161251b565b820191906000526020600020905b8154815290600101906020018083116124fe57829003601f168201915b5050505050908060040154905085565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415612645576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061375f6025913960400191505060405180910390fd5b61264d6129cf565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061269357506126928561268d6129cf565b61252b565b5b6126e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806137366029913960400191505060405180910390fd5b60006126f26129cf565b9050612712818787612703886130ca565b61270c886130ca565b876129d7565b61278f836040518060600160405280602a81526020016137b6602a91396001600088815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546129df9092919063ffffffff16565b6001600086815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612846836001600087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461293490919063ffffffff16565b6001600086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628787604051808381526020018281526020019250505060405180910390a461292c81878787878761313a565b505050505050565b6000808284019050838110156129b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600080823b905060008111915050919050565b600033905090565b505050505050565b6000838311158290612a8c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612a51578082015181840152602081019050612a36565b50505050905090810190601f168015612a7e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b612abe8473ffffffffffffffffffffffffffffffffffffffff166129bc565b15612e26578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015612b76578082015181840152602081019050612b5b565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015612bb8578082015181840152602081019050612b9d565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015612bf7578082015181840152602081019050612bdc565b50505050905090810190601f168015612c245780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b158015612c4957600080fd5b505af1925050508015612c7d57506040513d6020811015612c6957600080fd5b810190808051906020019092919050505060015b612d8757612c896135c7565b80612c945750612d36565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612cfb578082015181840152602081019050612ce0565b50505050905090810190601f168015612d285780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603481526020018061367e6034913960400191505060405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614612e24576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806136b26028913960400191505060405180910390fd5b505b505050505050565b600080662386f26fc1000090506000836040516020018082805190602001908083835b60208310612e745780518252602082019150602081019050602083039250612e51565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528051906020012060001c9050818181612ebd57fe5b0692505050919050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415612f4d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061385a6021913960400191505060405180910390fd5b6000612f576129cf565b9050612f7881600087612f69886130ca565b612f72886130ca565b876129d7565b612fdb836001600087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461293490919063ffffffff16565b6001600086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628787604051808381526020018281526020019250505060405180910390a46130c38160008787878761313a565b5050505050565b606080600167ffffffffffffffff811180156130e557600080fd5b506040519080825280602002602001820160405280156131145781602001602082028036833780820191505090505b509050828160008151811061312557fe5b60200260200101818152505080915050919050565b6131598473ffffffffffffffffffffffffffffffffffffffff166129bc565b1561343f578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156132125780820151818401526020810190506131f7565b50505050905090810190601f16801561323f5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b15801561326257600080fd5b505af192505050801561329657506040513d602081101561328257600080fd5b810190808051906020019092919050505060015b6133a0576132a26135c7565b806132ad575061334f565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156133145780820151818401526020810190506132f9565b50505050905090810190601f1680156133415780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603481526020018061367e6034913960400191505060405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461343d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806136b26028913960400191505060405180910390fd5b505b505050505050565b6040518060a00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016060815260200160608152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106134cd57805160ff19168380011785556134fb565b828001600101855582156134fb579182015b828111156134fa5782518255916020019190600101906134df565b5b509050613508919061358c565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061354d57805160ff191683800117855561357b565b8280016001018555821561357b579182015b8281111561357a57825182559160200191906001019061355f565b5b509050613588919061358c565b5090565b5b808211156135a557600081600090555060010161358d565b5090565b6000601f19601f8301169050919050565b60008160e01c9050919050565b600060443d10156135d75761367a565b60046000803e6135e86000516135ba565b6308c379a081146135f9575061367a565b60405160043d036004823e80513d602482011167ffffffffffffffff821117156136255750505061367a565b808201805167ffffffffffffffff81111561364457505050505061367a565b8060208301013d850181111561365f5750505050505061367a565b613668826135a9565b60208401016040528296505050505050505b9056fe455243313135353a207472616e7366657220746f206e6f6e2045524331313535526563656976657220696d706c656d656e746572455243313135353a204552433131353552656365697665722072656a656374656420746f6b656e73455243313135353a2062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a2062617463682062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a207472616e7366657220746f20746865207a65726f2061646472657373455243313135353a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a20696e73756666696369656e742062616c616e636520666f72207472616e73666572455243313135353a2073657474696e6720617070726f76616c2073746174757320666f722073656c66455243313135353a206163636f756e747320616e6420696473206c656e677468206d69736d61746368455243313135353a2069647320616e6420616d6f756e7473206c656e677468206d69736d61746368455243313135353a206d696e7420746f20746865207a65726f2061646472657373a2646970667358221220cb75921fdf7614cd96649b68436343e1ac63ec9fed98e4a5349549ec2a9e353a64736f6c634300060c0033",
        "immutableReferences": {},
        "sourceMap": "203:5256:1:-:0;;;1744:673;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1974:354:7;;;;;;;;;;;;;;;;;768:40:4;435:10;787:20;;768:18;;;:40;;:::i;:::-;2024:13:7;2032:4;2024:7;;;:13;;:::i;:::-;2126:41;1762:10;2145:21;;2126:18;;;:41;;:::i;:::-;2267:54;1914:10;2286:34;;2267:18;;;:54;;:::i;:::-;1974:354;2311:100:1::1;2324:6;2332:5;2339:13;2354:10;2366:5;2373:18;2393:7;2402:8;2311:12;;;:100;;:::i;:::-;1744:673:::0;;;;;;;;203:5256;;1499:198:4;1597:10;1582:25;;:11;:25;;;;;1574:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1686:4;1650:20;:33;1671:11;1650:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;1499:198;:::o;7600:86:7:-;7673:6;7666:4;:13;;;;;;;;;;;;:::i;:::-;;7600:86;:::o;2815:2327:1:-;3171:18;;:::i;:::-;3327:10;3311:7;:13;;:26;;;;;;;;;;;3366:6;3351:7;:12;;:21;;;;3400:5;3386:7;:11;;:19;;;;3419:11;3433:18;3444:6;3433:10;;;:18;;:::i;:::-;3419:32;;3544:14;:19;3559:3;3544:19;;;;;;;;;;;;;;;;;;;;;3543:20;3535:29;;;;;;3591:3;3578:7;:10;;:16;;;;;3630:4;3608:14;:19;3623:3;3608:19;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;3703:5;3710:3;3686:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3669:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3648:7;:11;;:77;;;;4088:4;4098:7;4088:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;4140:13;4155:10;4167:5;4174:18;4194:7;4203:8;4129:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4118:8;:94;;;;;;;;;;;;:::i;:::-;;4254:3;4224:15;:27;4240:10;4224:27;;;;;;;;;;;;;;;:33;;;;4506:47;4512:10;4524:3;4529:13;4544:8;4506:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:5;;;:47;;:::i;:::-;4672:23;4686:8;4672:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4712:416;4749:7;:13;;;4780:7;:11;;;4810:6;4836:5;4862:3;4712:416;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2815:2327;;;;;;;;;;:::o;5254:203::-;5317:7;5332:13;5348:8;5332:24;;5362:16;5416:4;5399:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5389:33;;;;;;5381:42;;5362:61;;5447:5;5436:8;:16;;;;;;5429:23;;;;5254:203;;;:::o;8069:572:7:-;8202:1;8183:21;;:7;:21;;;;8175:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8253:16;8272:12;:10;;;:12;;:::i;:::-;8253:31;;8295:107;8316:8;8334:1;8338:7;8347:21;8365:2;8347:17;;;:21;;:::i;:::-;8370:25;8388:6;8370:17;;;:25;;:::i;:::-;8397:4;8295:20;;;:107;;:::i;:::-;8438:34;8465:6;8438:9;:13;8448:2;8438:13;;;;;;;;;;;:22;8452:7;8438:22;;;;;;;;;;;;;;;;:26;;;;;;:34;;;;:::i;:::-;8413:9;:13;8423:2;8413:13;;;;;;;;;;;:22;8427:7;8413:22;;;;;;;;;;;;;;;:59;;;;8524:7;8487:57;;8520:1;8487:57;;8502:8;8487:57;;;8533:2;8537:6;8487:57;;;;;;;;;;;;;;;;;;;;;;;;8555:79;8586:8;8604:1;8608:7;8617:2;8621:6;8629:4;8555:30;;;:79;;:::i;:::-;8069:572;;;;;:::o;598:104:3:-;651:15;685:10;678:17;;598:104;:::o;14070:193:7:-;14136:16;14164:22;14203:1;14189:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14164:41;;14226:7;14215:5;14221:1;14215:8;;;;;;;;;;;;;:18;;;;;14251:5;14244:12;;;14070:193;;;:::o;12306:227::-;;;;;;;:::o;882:176:6:-;940:7;959:9;975:1;971;:5;959:17;;999:1;994;:6;;986:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1050:1;1043:8;;;882:176;;;;:::o;12539:741:7:-;12758:15;:2;:13;;;;;;;:15;;:::i;:::-;12754:520;;;12810:2;12793:38;;;12832:8;12842:4;12848:2;12852:6;12860:4;12793:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12789:475;;;;:::i;:::-;;;;;;;;13140:6;13133:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12789:475;13187:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12789:475;12926:47;;;12914:59;;;:8;:59;;;;12910:156;;12997:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12910:156;12866:214;12754:520;12539:741;;;;;;:::o;726:413:11:-;786:4;989:12;1098:7;1086:20;1078:28;;1131:1;1124:4;:8;1117:15;;;726:413;;;:::o;203:5256:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;5:97:-1:-;;93:2;89:7;84:2;77:5;73:14;69:28;59:38;;53:49;;;:::o;110:106::-;;200:5;195:3;191:15;169:37;;163:53;;;:::o;224:739::-;;297:4;279:16;276:26;273:2;;;305:5;;273:2;339:1;336;333;318:23;357:34;388:1;382:8;357:34;:::i;:::-;414:10;409:3;406:19;396:2;;429:5;;;396:2;460;454:9;514:1;496:16;492:24;489:1;483:4;468:49;543:4;537:11;624:16;617:4;609:6;605:17;602:39;576:18;568:6;565:30;556:91;553:2;;;655:5;;;;;553:2;693:6;687:4;683:17;725:3;719:10;748:18;740:6;737:30;734:2;;;770:5;;;;;;;734:2;814:6;807:4;802:3;798:14;794:27;847:16;841:4;837:27;832:3;829:36;826:2;;;868:5;;;;;;;;826:2;912:29;934:6;912:29;:::i;:::-;905:4;900:3;896:14;892:50;888:2;881:62;955:3;948:10;;267:696;;;;;;;;:::o;203:5256:1:-;;;;;;;",
        "deployedSourceMap": "203:5256:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2966:220:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;965:140:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;2727:97:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;475:45:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5593:1184:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;315:46:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;3343:615:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;290:21:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;365:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;5145:82;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4026:306:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2815:2327:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1260:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4399:158:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;4624:897;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2966:220;3044:7;3090:1;3071:21;;:7;:21;;;;3063:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3157:9;:13;3167:2;3157:13;;;;;;;;;;;:22;3171:7;3157:22;;;;;;;;;;;;;;;;3150:29;;2966:220;;;;:::o;965:140:4:-;1042:4;1065:20;:33;1086:11;1065:33;;;;;;;;;;;;;;;;;;;;;;;;;;;1058:40;;965:140;;;:::o;2727:97:7:-;2781:13;2813:4;2806:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2727:97;;;:::o;475:45:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5593:1184:7:-;5847:7;:14;5833:3;:10;:28;5825:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5938:1;5924:16;;:2;:16;;;;5916:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6021:12;:10;:12::i;:::-;6013:20;;:4;:20;;;:60;;;;6037:36;6054:4;6060:12;:10;:12::i;:::-;6037:16;:36::i;:::-;6013:60;5992:157;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6160:16;6179:12;:10;:12::i;:::-;6160:31;;6202:60;6223:8;6233:4;6239:2;6243:3;6248:7;6257:4;6202:20;:60::i;:::-;6278:9;6273:349;6297:3;:10;6293:1;:14;6273:349;;;6328:10;6341:3;6345:1;6341:6;;;;;;;;;;;;;;6328:19;;6361:14;6378:7;6386:1;6378:10;;;;;;;;;;;;;;6361:27;;6425:123;6466:6;6425:123;;;;;;;;;;;;;;;;;:9;:13;6435:2;6425:13;;;;;;;;;;;:19;6439:4;6425:19;;;;;;;;;;;;;;;;:23;;:123;;;;;:::i;:::-;6403:9;:13;6413:2;6403:13;;;;;;;;;;;:19;6417:4;6403:19;;;;;;;;;;;;;;;:145;;;;6582:29;6604:6;6582:9;:13;6592:2;6582:13;;;;;;;;;;;:17;6596:2;6582:17;;;;;;;;;;;;;;;;:21;;:29;;;;:::i;:::-;6562:9;:13;6572:2;6562:13;;;;;;;;;;;:17;6576:2;6562:17;;;;;;;;;;;;;;;:49;;;;6273:349;;6309:3;;;;;6273:349;;;;6667:2;6637:47;;6661:4;6637:47;;6651:8;6637:47;;;6671:3;6676:7;6637:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6695:75;6731:8;6741:4;6747:2;6751:3;6756:7;6765:4;6695:35;:75::i;:::-;5593:1184;;;;;;:::o;315:46:1:-;;;;;;;;;;;;;;;;;;;;;;:::o;3343:615:7:-;3500:16;3559:3;:10;3540:8;:15;:29;3532:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3626:30;3673:8;:15;3659:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3626:63;;3705:9;3700:221;3724:8;:15;3720:1;:19;3700:221;;;3791:1;3768:25;;:8;3777:1;3768:11;;;;;;;;;;;;;;:25;;;;3760:87;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3880:9;:17;3890:3;3894:1;3890:6;;;;;;;;;;;;;;3880:17;;;;;;;;;;;:30;3898:8;3907:1;3898:11;;;;;;;;;;;;;;3880:30;;;;;;;;;;;;;;;;3861:13;3875:1;3861:16;;;;;;;;;;;;;:49;;;;;3741:3;;;;;3700:221;;;;3938:13;3931:20;;;3343:615;;;;:::o;290:21:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;365:51::-;;;;;;;;;;;;;;;;;:::o;5145:82::-;5190:7;5211:4;:11;;;;5204:18;;5145:82;:::o;4026:306:7:-;4144:8;4128:24;;:12;:10;:12::i;:::-;:24;;;;4120:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4254:8;4209:18;:32;4228:12;:10;:12::i;:::-;4209:32;;;;;;;;;;;;;;;:42;4242:8;4209:42;;;;;;;;;;;;;;;;:53;;;;;;;;;;;;;;;;;;4306:8;4277:48;;4292:12;:10;:12::i;:::-;4277:48;;;4316:8;4277:48;;;;;;;;;;;;;;;;;;;;4026:306;;:::o;2815:2327:1:-;3171:18;;:::i;:::-;3327:10;3311:7;:13;;:26;;;;;;;;;;;3366:6;3351:7;:12;;:21;;;;3400:5;3386:7;:11;;:19;;;;3419:11;3433:18;3444:6;3433:10;:18::i;:::-;3419:32;;3544:14;:19;3559:3;3544:19;;;;;;;;;;;;;;;;;;;;;3543:20;3535:29;;;;;;3591:3;3578:7;:10;;:16;;;;;3630:4;3608:14;:19;3623:3;3608:19;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;3703:5;3710:3;3686:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3669:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3648:7;:11;;:77;;;;4088:4;4098:7;4088:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;4140:13;4155:10;4167:5;4174:18;4194:7;4203:8;4129:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4118:8;:94;;;;;;;;;;;;:::i;:::-;;4254:3;4224:15;:27;4240:10;4224:27;;;;;;;;;;;;;;;:33;;;;4506:47;4512:10;4524:3;4529:13;4544:8;4506:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:5;:47::i;:::-;4672:23;4686:8;4672:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4712:416;4749:7;:13;;;4780:7;:11;;;4810:6;4836:5;4862:3;4712:416;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2815:2327;;;;;;;;;;:::o;1260:17::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4399:158:7:-;4490:4;4513:18;:27;4532:7;4513:27;;;;;;;;;;;;;;;:37;4541:8;4513:37;;;;;;;;;;;;;;;;;;;;;;;;;4506:44;;4399:158;;;;:::o;4624:897::-;4853:1;4839:16;;:2;:16;;;;4831:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4936:12;:10;:12::i;:::-;4928:20;;:4;:20;;;:60;;;;4952:36;4969:4;4975:12;:10;:12::i;:::-;4952:16;:36::i;:::-;4928:60;4907:148;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5066:16;5085:12;:10;:12::i;:::-;5066:31;;5108:96;5129:8;5139:4;5145:2;5149:21;5167:2;5149:17;:21::i;:::-;5172:25;5190:6;5172:17;:25::i;:::-;5199:4;5108:20;:96::i;:::-;5237:77;5261:6;5237:77;;;;;;;;;;;;;;;;;:9;:13;5247:2;5237:13;;;;;;;;;;;:19;5251:4;5237:19;;;;;;;;;;;;;;;;:23;;:77;;;;;:::i;:::-;5215:9;:13;5225:2;5215:13;;;;;;;;;;;:19;5229:4;5215:19;;;;;;;;;;;;;;;:99;;;;5344:29;5366:6;5344:9;:13;5354:2;5344:13;;;;;;;;;;;:17;5358:2;5344:17;;;;;;;;;;;;;;;;:21;;:29;;;;:::i;:::-;5324:9;:13;5334:2;5324:13;;;;;;;;;;;:17;5338:2;5324:17;;;;;;;;;;;;;;;:49;;;;5420:2;5389:46;;5414:4;5389:46;;5404:8;5389:46;;;5424:2;5428:6;5389:46;;;;;;;;;;;;;;;;;;;;;;;;5446:68;5477:8;5487:4;5493:2;5497;5501:6;5509:4;5446:30;:68::i;:::-;4624:897;;;;;;:::o;882:176:6:-;940:7;959:9;975:1;971;:5;959:17;;999:1;994;:6;;986:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1050:1;1043:8;;;882:176;;;;:::o;726:413:11:-;786:4;989:12;1098:7;1086:20;1078:28;;1131:1;1124:4;:8;1117:15;;;726:413;;;:::o;598:104:3:-;651:15;685:10;678:17;;598:104;:::o;12306:227:7:-;;;;;;;:::o;1754:187:6:-;1840:7;1872:1;1867;:6;;1875:12;1859:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1898:9;1914:1;1910;:5;1898:17;;1933:1;1926:8;;;1754:187;;;;;:::o;13286:778:7:-;13530:15;:2;:13;;;:15::i;:::-;13526:532;;;13582:2;13565:43;;;13609:8;13619:4;13625:3;13630:7;13639:4;13565:79;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13561:487;;;;:::i;:::-;;;;;;;;13924:6;13917:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13561:487;13971:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13561:487;13705:52;;;13693:64;;;:8;:64;;;;13689:161;;13781:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13689:161;13645:219;13526:532;13286:778;;;;;;:::o;5254:203:1:-;5317:7;5332:13;5348:8;5332:24;;5362:16;5416:4;5399:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5389:33;;;;;;5381:42;;5362:61;;5447:5;5436:8;:16;;;;;;5429:23;;;;5254:203;;;:::o;8069:572:7:-;8202:1;8183:21;;:7;:21;;;;8175:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8253:16;8272:12;:10;:12::i;:::-;8253:31;;8295:107;8316:8;8334:1;8338:7;8347:21;8365:2;8347:17;:21::i;:::-;8370:25;8388:6;8370:17;:25::i;:::-;8397:4;8295:20;:107::i;:::-;8438:34;8465:6;8438:9;:13;8448:2;8438:13;;;;;;;;;;;:22;8452:7;8438:22;;;;;;;;;;;;;;;;:26;;:34;;;;:::i;:::-;8413:9;:13;8423:2;8413:13;;;;;;;;;;;:22;8427:7;8413:22;;;;;;;;;;;;;;;:59;;;;8524:7;8487:57;;8520:1;8487:57;;8502:8;8487:57;;;8533:2;8537:6;8487:57;;;;;;;;;;;;;;;;;;;;;;;;8555:79;8586:8;8604:1;8608:7;8617:2;8621:6;8629:4;8555:30;:79::i;:::-;8069:572;;;;;:::o;14070:193::-;14136:16;14164:22;14203:1;14189:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14164:41;;14226:7;14215:5;14221:1;14215:8;;;;;;;;;;;;;:18;;;;;14251:5;14244:12;;;14070:193;;;:::o;12539:741::-;12758:15;:2;:13;;;:15::i;:::-;12754:520;;;12810:2;12793:38;;;12832:8;12842:4;12848:2;12852:6;12860:4;12793:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12789:475;;;;:::i;:::-;;;;;;;;13140:6;13133:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12789:475;13187:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12789:475;12926:47;;;12914:59;;;:8;:59;;;;12910:156;;12997:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12910:156;12866:214;12754:520;12539:741;;;;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;5:97::-;;93:2;89:7;84:2;77:5;73:14;69:28;59:38;;53:49;;;:::o;110:106::-;;200:5;195:3;191:15;169:37;;163:53;;;:::o;224:739::-;;297:4;279:16;276:26;273:2;;;305:5;;273:2;339:1;336;333;318:23;357:34;388:1;382:8;357:34;:::i;:::-;414:10;409:3;406:19;396:2;;429:5;;;396:2;460;454:9;514:1;496:16;492:24;489:1;483:4;468:49;543:4;537:11;624:16;617:4;609:6;605:17;602:39;576:18;568:6;565:30;556:91;553:2;;;655:5;;;;;553:2;693:6;687:4;683:17;725:3;719:10;748:18;740:6;737:30;734:2;;;770:5;;;;;;;734:2;814:6;807:4;802:3;798:14;794:27;847:16;841:4;837:27;832:3;829:36;826:2;;;868:5;;;;;;;;826:2;912:29;934:6;912:29;:::i;:::-;905:4;900:3;896:14;892:50;888:2;881:62;955:3;948:10;;267:696;;;;;;;;:::o",
        "source": "pragma solidity >=0.4.21 <0.7.0;\n//V5\nimport \"@openzeppelin/contracts/token/ERC1155/ERC1155.sol\";\nimport \"@openzeppelin/contracts/utils/Strings.sol\";\n//mad props to the crypto zombies tutorial!  Thanks!\ncontract AngelToken is ERC1155{\n  /* State variables are stored in the blockchain */\n  bytes public mintData;\n  mapping(uint256 => bool) public is_on_manifest;\n  mapping (address => uint256) public map_owner_to_id;\n  /* mapping (uint256 => Alm) public map_id_to_Alm; */\n  mapping (string => Alm) public map_uri_to_Alm;\n\n  struct Alm {\n    address owner;\n   string uri;\n    string name;\n     string sym;  // <10 alpha num\n      uint256 id;  // the id of the token issuance\n       /* uint256 issue_num; // issue number and ID are UNIQUE to each Alm\n        uint256 _num_to_issue; // total amount of alms issued this round\n         uint256 mint_date;\n          uint256 cost; // the Unit Retail Cost of your product in wei\n           uint256 angel_coefficient; // coefficient of next round's profits\n            uint256 status;  // the status of the contract\n             string product; // the unit product being produced in the endeavor - a lb of coffee, a chocalate bar, a bar of soap, a board, solar panel, or your grandmas comfy undies */\n             }\n  Alm[] public alms;\n  event MintDataEvent(bytes mintData);\n  event ManifestedAngelToken(\n     address owner,\n      string _uri,\n       string _ename, // endeavor name\n        string _esym,  // endeavor symbol\n         uint256 _id\n          /* uint256 _issue_num,\n           uint256 _num_to_issue,\n            uint256 _mint_date,\n             uint256 _cost,\n              uint256 _angel_coefficient,\n               uint256 _status,\n                string _product */\n              );\n  constructor(\n    string memory _ename, // endeavor name\n     string memory _esym,  // endeavor symbol\n       uint256 _num_to_issue,\n        uint256 _mint_date,\n         uint256 _cost,\n          uint256 _angel_coefficient,\n           uint256 _status, // 1: waiting 2: executed 3: shipped 4: fullfilled\n            string memory _product\n            )\n    ERC1155(\"http://localhost:3000/\")\n      public {  //setup <-- run once like an init <-- pass in name and symbol as per ERC721 Standard\n        /*uncomment below to run through mocha tests on deployment */\n        tokenGenesis(_ename, _esym, _num_to_issue, _mint_date, _cost, _angel_coefficient, _status, _product);\n\n  }\n  /* function manifestAngelToken(\n    string memory _ename,\n     string memory _esym,\n      uint256 _num_to_issue,\n       uint256 _mint_date,\n        uint256 _cost,\n         uint256 _angel_coefficient,\n          uint256 _status,\n           string memory _product\n    ) public {\n      _tokenGenesis(_ename, _esym, _num_to_issue, _mint_date, _cost, _angel_coefficient, _status, _product);\n  } */\n   function tokenGenesis (\n    string memory _ename,\n     string memory _esym,\n      uint256 _num_to_issue,\n        uint256 _mint_date,\n         uint256 _cost,\n          uint256 _angel_coefficient,\n           uint256 _status,\n            string memory _product\n            )\n      public {\n\n        /* for (uint i = 1; i <= _num_to_issue; i++) { */\n          Alm memory new_alm;// = Alm(new_uri, _ename, _esym, _id, _issue_num, _mint_date, _cost, _angel_coefficient, _status, _product);\n            new_alm.owner = msg.sender;\n            new_alm.name = _ename;\n            new_alm.sym = _esym;\n            uint256 _id = _idGenesis(_ename); //the id is made of the name and has the symbol attached to the front\n            require(!is_on_manifest[_id]);\n            new_alm.id = _id;\n            is_on_manifest[_id] = true;\n            new_alm.uri = string(abi.encodePacked(abi.encodePacked(_esym, _id), \".json\")); //Hare Krsna to the String library\n            /* new_alm.issue_num = i;\n            new_alm._num_to_issue = _num_to_issue; */\n            /* new_alm.mint_date = _mint_date;\n            new_alm.cost = _cost;\n            new_alm.angel_coefficient = _angel_coefficient;\n            new_alm.status = _status;\n            new_alm.product = _product; */\n            alms.push(new_alm);\n          mintData = abi.encode(_num_to_issue, _mint_date, _cost, _angel_coefficient, _status, _product);\n          map_owner_to_id[msg.sender] = _id;\n          /* map_uri_to_Alm[new_uri] = new_alm; */\n          /* _safeMint(msg.sender, _id, mintData); ERC721 standard\n          _setBaseURI(\"http://localhost:3000/public/#!/treasure_chest/\");\n          _setTokenURI(_id, new_alm.uri); */\n          _mint(msg.sender, _id, _num_to_issue, mintData);\n          /*  send data to file at uri on unstoppable domains or some other decentralized servicer */\n          emit MintDataEvent(mintData);\n          emit ManifestedAngelToken(\n               new_alm.owner,\n                new_alm.uri,\n                 _ename,\n                  _esym,\n                   _id\n                    /* i,\n                    _num_to_issue,\n                     _mint_date,\n                      _cost,\n                       _angel_coefficient,\n                        _status,\n                         _product */\n                         );\n   /* } */\n}\n  function getAlmsLength() public view returns(uint256){\n    return alms.length;\n  }\n  // generate random id\n  function _idGenesis(string memory _str) internal pure returns (uint256) {\n    uint256 idmod = 10 ** 16;\n    uint256 token_id = uint256(keccak256(abi.encodePacked(_str)));\n    return token_id % idmod;\n  }\n}\n",
        "sourcePath": "/Volumes/ETH/webApp6/contracts/AngelToken.sol",
        "ast": {
          "absolutePath": "/Volumes/ETH/webApp6/contracts/AngelToken.sol",
          "exportedSymbols": {
            "AngelToken": [
              259
            ]
          },
          "id": 260,
          "license": null,
          "nodeType": "SourceUnit",
          "nodes": [
            {
              "id": 6,
              "literals": [
                "solidity",
                ">=",
                "0.4",
                ".21",
                "<",
                "0.7",
                ".0"
              ],
              "nodeType": "PragmaDirective",
              "src": "0:32:1"
            },
            {
              "absolutePath": "@openzeppelin/contracts/token/ERC1155/ERC1155.sol",
              "file": "@openzeppelin/contracts/token/ERC1155/ERC1155.sol",
              "id": 7,
              "nodeType": "ImportDirective",
              "scope": 260,
              "sourceUnit": 1602,
              "src": "38:59:1",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "absolutePath": "@openzeppelin/contracts/utils/Strings.sol",
              "file": "@openzeppelin/contracts/utils/Strings.sol",
              "id": 8,
              "nodeType": "ImportDirective",
              "scope": 260,
              "sourceUnit": 2161,
              "src": "98:51:1",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "abstract": false,
              "baseContracts": [
                {
                  "arguments": null,
                  "baseName": {
                    "contractScope": null,
                    "id": 9,
                    "name": "ERC1155",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1601,
                    "src": "226:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC1155_$1601",
                      "typeString": "contract ERC1155"
                    }
                  },
                  "id": 10,
                  "nodeType": "InheritanceSpecifier",
                  "src": "226:7:1"
                }
              ],
              "contractDependencies": [
                315,
                372,
                384,
                1601,
                1723,
                1738
              ],
              "contractKind": "contract",
              "documentation": null,
              "fullyImplemented": true,
              "id": 259,
              "linearizedBaseContracts": [
                259,
                1601,
                1738,
                1723,
                372,
                384,
                315
              ],
              "name": "AngelToken",
              "nodeType": "ContractDefinition",
              "nodes": [
                {
                  "constant": false,
                  "functionSelector": "5195e8c5",
                  "id": 12,
                  "mutability": "mutable",
                  "name": "mintData",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 259,
                  "src": "290:21:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 11,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "290:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "functionSelector": "4b8ae8cd",
                  "id": 16,
                  "mutability": "mutable",
                  "name": "is_on_manifest",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 259,
                  "src": "315:46:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                    "typeString": "mapping(uint256 => bool)"
                  },
                  "typeName": {
                    "id": 15,
                    "keyType": {
                      "id": 13,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "323:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "315:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                      "typeString": "mapping(uint256 => bool)"
                    },
                    "valueType": {
                      "id": 14,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "334:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "functionSelector": "590743e5",
                  "id": 20,
                  "mutability": "mutable",
                  "name": "map_owner_to_id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 259,
                  "src": "365:51:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "typeName": {
                    "id": 19,
                    "keyType": {
                      "id": 17,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "374:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "365:28:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                      "typeString": "mapping(address => uint256)"
                    },
                    "valueType": {
                      "id": 18,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "385:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "functionSelector": "2ba5d427",
                  "id": 24,
                  "mutability": "mutable",
                  "name": "map_uri_to_Alm",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 259,
                  "src": "475:45:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Alm_$35_storage_$",
                    "typeString": "mapping(string => struct AngelToken.Alm)"
                  },
                  "typeName": {
                    "id": 23,
                    "keyType": {
                      "id": 21,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "484:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "475:23:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Alm_$35_storage_$",
                      "typeString": "mapping(string => struct AngelToken.Alm)"
                    },
                    "valueType": {
                      "contractScope": null,
                      "id": 22,
                      "name": "Alm",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 35,
                      "src": "494:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Alm_$35_storage_ptr",
                        "typeString": "struct AngelToken.Alm"
                      }
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "canonicalName": "AngelToken.Alm",
                  "id": 35,
                  "members": [
                    {
                      "constant": false,
                      "id": 26,
                      "mutability": "mutable",
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 35,
                      "src": "542:13:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 25,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "542:7:1",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 28,
                      "mutability": "mutable",
                      "name": "uri",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 35,
                      "src": "560:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 27,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "560:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 30,
                      "mutability": "mutable",
                      "name": "name",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 35,
                      "src": "576:11:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 29,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "576:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 32,
                      "mutability": "mutable",
                      "name": "sym",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 35,
                      "src": "594:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 31,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "594:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 34,
                      "mutability": "mutable",
                      "name": "id",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 35,
                      "src": "630:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 33,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "630:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "name": "Alm",
                  "nodeType": "StructDefinition",
                  "scope": 259,
                  "src": "525:732:1",
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "functionSelector": "d2a55e33",
                  "id": 38,
                  "mutability": "mutable",
                  "name": "alms",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 259,
                  "src": "1260:17:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Alm_$35_storage_$dyn_storage",
                    "typeString": "struct AngelToken.Alm[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 36,
                      "name": "Alm",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 35,
                      "src": "1260:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Alm_$35_storage_ptr",
                        "typeString": "struct AngelToken.Alm"
                      }
                    },
                    "id": 37,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1260:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Alm_$35_storage_$dyn_storage_ptr",
                      "typeString": "struct AngelToken.Alm[]"
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "anonymous": false,
                  "documentation": null,
                  "id": 42,
                  "name": "MintDataEvent",
                  "nodeType": "EventDefinition",
                  "parameters": {
                    "id": 41,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 40,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "mintData",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 42,
                        "src": "1301:14:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes"
                        },
                        "typeName": {
                          "id": 39,
                          "name": "bytes",
                          "nodeType": "ElementaryTypeName",
                          "src": "1301:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_storage_ptr",
                            "typeString": "bytes"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1300:16:1"
                  },
                  "src": "1281:36:1"
                },
                {
                  "anonymous": false,
                  "documentation": null,
                  "id": 54,
                  "name": "ManifestedAngelToken",
                  "nodeType": "EventDefinition",
                  "parameters": {
                    "id": 53,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 44,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "owner",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 54,
                        "src": "1353:13:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 43,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1353:7:1",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 46,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "_uri",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 54,
                        "src": "1374:11:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 45,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "1374:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 48,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "_ename",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 54,
                        "src": "1394:13:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 47,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "1394:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 50,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "_esym",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 54,
                        "src": "1434:12:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 49,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "1434:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 52,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "_id",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 54,
                        "src": "1477:11:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 51,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1477:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1346:394:1"
                  },
                  "src": "1320:421:1"
                },
                {
                  "body": {
                    "id": 87,
                    "nodeType": "Block",
                    "src": "2145:272:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 77,
                              "name": "_ename",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56,
                              "src": "2324:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 78,
                              "name": "_esym",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58,
                              "src": "2332:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 79,
                              "name": "_num_to_issue",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60,
                              "src": "2339:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 80,
                              "name": "_mint_date",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62,
                              "src": "2354:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 81,
                              "name": "_cost",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 64,
                              "src": "2366:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 82,
                              "name": "_angel_coefficient",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66,
                              "src": "2373:18:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 83,
                              "name": "_status",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68,
                              "src": "2393:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 84,
                              "name": "_product",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 70,
                              "src": "2402:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 76,
                            "name": "tokenGenesis",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 219,
                            "src": "2311:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory,uint256,uint256,uint256,uint256,uint256,string memory)"
                            }
                          },
                          "id": 85,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2311:100:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 86,
                        "nodeType": "ExpressionStatement",
                        "src": "2311:100:1"
                      }
                    ]
                  },
                  "documentation": null,
                  "id": 88,
                  "implemented": true,
                  "kind": "constructor",
                  "modifiers": [
                    {
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "687474703a2f2f6c6f63616c686f73743a333030302f",
                          "id": 73,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2106:24:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_2a04a7bc50d9f8e10f3ea0f2a07d1d451c3f6a4f07f1e689d435029d6d79bdb3",
                            "typeString": "literal_string \"http://localhost:3000/\""
                          },
                          "value": "http://localhost:3000/"
                        }
                      ],
                      "id": 74,
                      "modifierName": {
                        "argumentTypes": null,
                        "id": 72,
                        "name": "ERC1155",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1601,
                        "src": "2098:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC1155_$1601_$",
                          "typeString": "type(contract ERC1155)"
                        }
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "2098:33:1"
                    }
                  ],
                  "name": "",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 71,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 56,
                        "mutability": "mutable",
                        "name": "_ename",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 88,
                        "src": "1761:20:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 55,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "1761:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 58,
                        "mutability": "mutable",
                        "name": "_esym",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 88,
                        "src": "1805:19:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 57,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "1805:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 60,
                        "mutability": "mutable",
                        "name": "_num_to_issue",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 88,
                        "src": "1853:21:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 59,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1853:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 62,
                        "mutability": "mutable",
                        "name": "_mint_date",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 88,
                        "src": "1884:18:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 61,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1884:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 64,
                        "mutability": "mutable",
                        "name": "_cost",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 88,
                        "src": "1913:13:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 63,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1913:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 66,
                        "mutability": "mutable",
                        "name": "_angel_coefficient",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 88,
                        "src": "1938:26:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 65,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1938:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 68,
                        "mutability": "mutable",
                        "name": "_status",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 88,
                        "src": "1977:15:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 67,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1977:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 70,
                        "mutability": "mutable",
                        "name": "_product",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 88,
                        "src": "2057:22:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 69,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "2057:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1755:338:1"
                  },
                  "returnParameters": {
                    "id": 75,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "2145:0:1"
                  },
                  "scope": 259,
                  "src": "1744:673:1",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 218,
                    "nodeType": "Block",
                    "src": "3100:2042:1",
                    "statements": [
                      {
                        "assignments": [
                          108
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 108,
                            "mutability": "mutable",
                            "name": "new_alm",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 218,
                            "src": "3171:18:1",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                              "typeString": "struct AngelToken.Alm"
                            },
                            "typeName": {
                              "contractScope": null,
                              "id": 107,
                              "name": "Alm",
                              "nodeType": "UserDefinedTypeName",
                              "referencedDeclaration": 35,
                              "src": "3171:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Alm_$35_storage_ptr",
                                "typeString": "struct AngelToken.Alm"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 109,
                        "initialValue": null,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3171:18:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 115,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 110,
                              "name": "new_alm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 108,
                              "src": "3311:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                                "typeString": "struct AngelToken.Alm memory"
                              }
                            },
                            "id": 112,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "owner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 26,
                            "src": "3311:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 113,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "3327:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 114,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3327:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "3311:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 116,
                        "nodeType": "ExpressionStatement",
                        "src": "3311:26:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 121,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 117,
                              "name": "new_alm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 108,
                              "src": "3351:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                                "typeString": "struct AngelToken.Alm memory"
                              }
                            },
                            "id": 119,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "name",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 30,
                            "src": "3351:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 120,
                            "name": "_ename",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 90,
                            "src": "3366:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "3351:21:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "id": 122,
                        "nodeType": "ExpressionStatement",
                        "src": "3351:21:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 127,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 123,
                              "name": "new_alm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 108,
                              "src": "3386:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                                "typeString": "struct AngelToken.Alm memory"
                              }
                            },
                            "id": 125,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "sym",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 32,
                            "src": "3386:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 126,
                            "name": "_esym",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92,
                            "src": "3400:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "3386:19:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "id": 128,
                        "nodeType": "ExpressionStatement",
                        "src": "3386:19:1"
                      },
                      {
                        "assignments": [
                          130
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 130,
                            "mutability": "mutable",
                            "name": "_id",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 218,
                            "src": "3419:11:1",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 129,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3419:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 134,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 132,
                              "name": "_ename",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 90,
                              "src": "3444:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 131,
                            "name": "_idGenesis",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 258,
                            "src": "3433:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_uint256_$",
                              "typeString": "function (string memory) pure returns (uint256)"
                            }
                          },
                          "id": 133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3433:18:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3419:32:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 139,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "!",
                              "prefix": true,
                              "src": "3543:20:1",
                              "subExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 136,
                                  "name": "is_on_manifest",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 16,
                                  "src": "3544:14:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                    "typeString": "mapping(uint256 => bool)"
                                  }
                                },
                                "id": 138,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 137,
                                  "name": "_id",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 130,
                                  "src": "3559:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "3544:19:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "id": 135,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "3535:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 140,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3535:29:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 141,
                        "nodeType": "ExpressionStatement",
                        "src": "3535:29:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 146,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 142,
                              "name": "new_alm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 108,
                              "src": "3578:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                                "typeString": "struct AngelToken.Alm memory"
                              }
                            },
                            "id": 144,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "id",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 34,
                            "src": "3578:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 145,
                            "name": "_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 130,
                            "src": "3591:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3578:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 147,
                        "nodeType": "ExpressionStatement",
                        "src": "3578:16:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 152,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 148,
                              "name": "is_on_manifest",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16,
                              "src": "3608:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                "typeString": "mapping(uint256 => bool)"
                              }
                            },
                            "id": 150,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 149,
                              "name": "_id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 130,
                              "src": "3623:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3608:19:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "74727565",
                            "id": 151,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3630:4:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "3608:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 153,
                        "nodeType": "ExpressionStatement",
                        "src": "3608:26:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 169,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 154,
                              "name": "new_alm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 108,
                              "src": "3648:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                                "typeString": "struct AngelToken.Alm memory"
                              }
                            },
                            "id": 156,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "uri",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 28,
                            "src": "3648:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "id": 163,
                                        "name": "_esym",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 92,
                                        "src": "3703:5:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_string_memory_ptr",
                                          "typeString": "string memory"
                                        }
                                      },
                                      {
                                        "argumentTypes": null,
                                        "id": 164,
                                        "name": "_id",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 130,
                                        "src": "3710:3:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_string_memory_ptr",
                                          "typeString": "string memory"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 161,
                                        "name": "abi",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": -1,
                                        "src": "3686:3:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_abi",
                                          "typeString": "abi"
                                        }
                                      },
                                      "id": 162,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "memberName": "encodePacked",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "3686:16:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                        "typeString": "function () pure returns (bytes memory)"
                                      }
                                    },
                                    "id": 165,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "3686:28:1",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "2e6a736f6e",
                                    "id": 166,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "3716:7:1",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_94311adc0a0cd4e10be11b23bd4316b8cffa4adf693e8f96f5c075aa439a7972",
                                      "typeString": "literal_string \".json\""
                                    },
                                    "value": ".json"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    },
                                    {
                                      "typeIdentifier": "t_stringliteral_94311adc0a0cd4e10be11b23bd4316b8cffa4adf693e8f96f5c075aa439a7972",
                                      "typeString": "literal_string \".json\""
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 159,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -1,
                                    "src": "3669:3:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 160,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3669:16:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 167,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3669:55:1",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 158,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3662:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                "typeString": "type(string storage pointer)"
                              },
                              "typeName": {
                                "id": 157,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "3662:6:1",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 168,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3662:63:1",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "3648:77:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "id": 170,
                        "nodeType": "ExpressionStatement",
                        "src": "3648:77:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 174,
                              "name": "new_alm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 108,
                              "src": "4098:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                                "typeString": "struct AngelToken.Alm memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                                "typeString": "struct AngelToken.Alm memory"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 171,
                              "name": "alms",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38,
                              "src": "4088:4:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Alm_$35_storage_$dyn_storage",
                                "typeString": "struct AngelToken.Alm storage ref[] storage ref"
                              }
                            },
                            "id": 173,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "4088:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Alm_$35_storage_$returns$__$",
                              "typeString": "function (struct AngelToken.Alm storage ref)"
                            }
                          },
                          "id": 175,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4088:18:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 176,
                        "nodeType": "ExpressionStatement",
                        "src": "4088:18:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 187,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 177,
                            "name": "mintData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12,
                            "src": "4118:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_storage",
                              "typeString": "bytes storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 180,
                                "name": "_num_to_issue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 94,
                                "src": "4140:13:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 181,
                                "name": "_mint_date",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 96,
                                "src": "4155:10:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 182,
                                "name": "_cost",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 98,
                                "src": "4167:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 183,
                                "name": "_angel_coefficient",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 100,
                                "src": "4174:18:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 184,
                                "name": "_status",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 102,
                                "src": "4194:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 185,
                                "name": "_product",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 104,
                                "src": "4203:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 178,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "4129:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 179,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encode",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4129:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 186,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4129:83:1",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "src": "4118:94:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_storage",
                            "typeString": "bytes storage ref"
                          }
                        },
                        "id": 188,
                        "nodeType": "ExpressionStatement",
                        "src": "4118:94:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 194,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 189,
                              "name": "map_owner_to_id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20,
                              "src": "4224:15:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 192,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 190,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "4240:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 191,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4240:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4224:27:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 193,
                            "name": "_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 130,
                            "src": "4254:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4224:33:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 195,
                        "nodeType": "ExpressionStatement",
                        "src": "4224:33:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 197,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "4512:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 198,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4512:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 199,
                              "name": "_id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 130,
                              "src": "4524:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 200,
                              "name": "_num_to_issue",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 94,
                              "src": "4529:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 201,
                              "name": "mintData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12,
                              "src": "4544:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_storage",
                                "typeString": "bytes storage ref"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_bytes_storage",
                                "typeString": "bytes storage ref"
                              }
                            ],
                            "id": 196,
                            "name": "_mint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1149,
                            "src": "4506:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (address,uint256,uint256,bytes memory)"
                            }
                          },
                          "id": 202,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4506:47:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 203,
                        "nodeType": "ExpressionStatement",
                        "src": "4506:47:1"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 205,
                              "name": "mintData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12,
                              "src": "4686:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_storage",
                                "typeString": "bytes storage ref"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_storage",
                                "typeString": "bytes storage ref"
                              }
                            ],
                            "id": 204,
                            "name": "MintDataEvent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42,
                            "src": "4672:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (bytes memory)"
                            }
                          },
                          "id": 206,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4672:23:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 207,
                        "nodeType": "EmitStatement",
                        "src": "4667:28:1"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 209,
                                "name": "new_alm",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 108,
                                "src": "4749:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                                  "typeString": "struct AngelToken.Alm memory"
                                }
                              },
                              "id": 210,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "owner",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 26,
                              "src": "4749:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 211,
                                "name": "new_alm",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 108,
                                "src": "4780:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                                  "typeString": "struct AngelToken.Alm memory"
                                }
                              },
                              "id": 212,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "uri",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 28,
                              "src": "4780:11:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 213,
                              "name": "_ename",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 90,
                              "src": "4810:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 214,
                              "name": "_esym",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 92,
                              "src": "4836:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 215,
                              "name": "_id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 130,
                              "src": "4862:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 208,
                            "name": "ManifestedAngelToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 54,
                            "src": "4712:20:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (address,string memory,string memory,string memory,uint256)"
                            }
                          },
                          "id": 216,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4712:416:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 217,
                        "nodeType": "EmitStatement",
                        "src": "4707:421:1"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "bd37c35e",
                  "id": 219,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "tokenGenesis",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 105,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 90,
                        "mutability": "mutable",
                        "name": "_ename",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 219,
                        "src": "2843:20:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 89,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "2843:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 92,
                        "mutability": "mutable",
                        "name": "_esym",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 219,
                        "src": "2870:19:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 91,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "2870:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 94,
                        "mutability": "mutable",
                        "name": "_num_to_issue",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 219,
                        "src": "2897:21:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 93,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2897:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 96,
                        "mutability": "mutable",
                        "name": "_mint_date",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 219,
                        "src": "2928:18:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 95,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2928:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 98,
                        "mutability": "mutable",
                        "name": "_cost",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 219,
                        "src": "2957:13:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 97,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2957:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 100,
                        "mutability": "mutable",
                        "name": "_angel_coefficient",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 219,
                        "src": "2982:26:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 99,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2982:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 102,
                        "mutability": "mutable",
                        "name": "_status",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 219,
                        "src": "3021:15:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 101,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3021:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 104,
                        "mutability": "mutable",
                        "name": "_product",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 219,
                        "src": "3050:22:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 103,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "3050:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2837:249:1"
                  },
                  "returnParameters": {
                    "id": 106,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "3100:0:1"
                  },
                  "scope": 259,
                  "src": "2815:2327:1",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 227,
                    "nodeType": "Block",
                    "src": "5198:29:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 224,
                            "name": "alms",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 38,
                            "src": "5211:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Alm_$35_storage_$dyn_storage",
                              "typeString": "struct AngelToken.Alm storage ref[] storage ref"
                            }
                          },
                          "id": 225,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "5211:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 223,
                        "id": 226,
                        "nodeType": "Return",
                        "src": "5204:18:1"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "5d91889a",
                  "id": 228,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "getAlmsLength",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 220,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "5167:2:1"
                  },
                  "returnParameters": {
                    "id": 223,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 222,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 228,
                        "src": "5190:7:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 221,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5190:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "5189:9:1"
                  },
                  "scope": 259,
                  "src": "5145:82:1",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 257,
                    "nodeType": "Block",
                    "src": "5326:131:1",
                    "statements": [
                      {
                        "assignments": [
                          236
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 236,
                            "mutability": "mutable",
                            "name": "idmod",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 257,
                            "src": "5332:13:1",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 235,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "5332:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 240,
                        "initialValue": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_rational_10000000000000000_by_1",
                            "typeString": "int_const 10000000000000000"
                          },
                          "id": 239,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "hexValue": "3130",
                            "id": 237,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5348:2:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3136",
                            "id": 238,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5354:2:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_16_by_1",
                              "typeString": "int_const 16"
                            },
                            "value": "16"
                          },
                          "src": "5348:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10000000000000000_by_1",
                            "typeString": "int_const 10000000000000000"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "5332:24:1"
                      },
                      {
                        "assignments": [
                          242
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 242,
                            "mutability": "mutable",
                            "name": "token_id",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 257,
                            "src": "5362:16:1",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 241,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "5362:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 252,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 248,
                                      "name": "_str",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 230,
                                      "src": "5416:4:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 246,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -1,
                                      "src": "5399:3:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 247,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "5399:16:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 249,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5399:22:1",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 245,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "5389:9:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 250,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5389:33:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 244,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5381:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 243,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "5381:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 251,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5381:42:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "5362:61:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 255,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 253,
                            "name": "token_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 242,
                            "src": "5436:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 254,
                            "name": "idmod",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 236,
                            "src": "5447:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5436:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 234,
                        "id": 256,
                        "nodeType": "Return",
                        "src": "5429:23:1"
                      }
                    ]
                  },
                  "documentation": null,
                  "id": 258,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "_idGenesis",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 231,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 230,
                        "mutability": "mutable",
                        "name": "_str",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 258,
                        "src": "5274:18:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 229,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "5274:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "5273:20:1"
                  },
                  "returnParameters": {
                    "id": 234,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 233,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 258,
                        "src": "5317:7:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 232,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5317:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "5316:9:1"
                  },
                  "scope": 259,
                  "src": "5254:203:1",
                  "stateMutability": "pure",
                  "virtual": false,
                  "visibility": "internal"
                }
              ],
              "scope": 260,
              "src": "203:5256:1"
            }
          ],
          "src": "0:5460:1"
        },
        "legacyAST": {
          "absolutePath": "/Volumes/ETH/webApp6/contracts/AngelToken.sol",
          "exportedSymbols": {
            "AngelToken": [
              259
            ]
          },
          "id": 260,
          "license": null,
          "nodeType": "SourceUnit",
          "nodes": [
            {
              "id": 6,
              "literals": [
                "solidity",
                ">=",
                "0.4",
                ".21",
                "<",
                "0.7",
                ".0"
              ],
              "nodeType": "PragmaDirective",
              "src": "0:32:1"
            },
            {
              "absolutePath": "@openzeppelin/contracts/token/ERC1155/ERC1155.sol",
              "file": "@openzeppelin/contracts/token/ERC1155/ERC1155.sol",
              "id": 7,
              "nodeType": "ImportDirective",
              "scope": 260,
              "sourceUnit": 1602,
              "src": "38:59:1",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "absolutePath": "@openzeppelin/contracts/utils/Strings.sol",
              "file": "@openzeppelin/contracts/utils/Strings.sol",
              "id": 8,
              "nodeType": "ImportDirective",
              "scope": 260,
              "sourceUnit": 2161,
              "src": "98:51:1",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "abstract": false,
              "baseContracts": [
                {
                  "arguments": null,
                  "baseName": {
                    "contractScope": null,
                    "id": 9,
                    "name": "ERC1155",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1601,
                    "src": "226:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC1155_$1601",
                      "typeString": "contract ERC1155"
                    }
                  },
                  "id": 10,
                  "nodeType": "InheritanceSpecifier",
                  "src": "226:7:1"
                }
              ],
              "contractDependencies": [
                315,
                372,
                384,
                1601,
                1723,
                1738
              ],
              "contractKind": "contract",
              "documentation": null,
              "fullyImplemented": true,
              "id": 259,
              "linearizedBaseContracts": [
                259,
                1601,
                1738,
                1723,
                372,
                384,
                315
              ],
              "name": "AngelToken",
              "nodeType": "ContractDefinition",
              "nodes": [
                {
                  "constant": false,
                  "functionSelector": "5195e8c5",
                  "id": 12,
                  "mutability": "mutable",
                  "name": "mintData",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 259,
                  "src": "290:21:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 11,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "290:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "functionSelector": "4b8ae8cd",
                  "id": 16,
                  "mutability": "mutable",
                  "name": "is_on_manifest",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 259,
                  "src": "315:46:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                    "typeString": "mapping(uint256 => bool)"
                  },
                  "typeName": {
                    "id": 15,
                    "keyType": {
                      "id": 13,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "323:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "315:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                      "typeString": "mapping(uint256 => bool)"
                    },
                    "valueType": {
                      "id": 14,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "334:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "functionSelector": "590743e5",
                  "id": 20,
                  "mutability": "mutable",
                  "name": "map_owner_to_id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 259,
                  "src": "365:51:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "typeName": {
                    "id": 19,
                    "keyType": {
                      "id": 17,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "374:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "365:28:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                      "typeString": "mapping(address => uint256)"
                    },
                    "valueType": {
                      "id": 18,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "385:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "functionSelector": "2ba5d427",
                  "id": 24,
                  "mutability": "mutable",
                  "name": "map_uri_to_Alm",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 259,
                  "src": "475:45:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Alm_$35_storage_$",
                    "typeString": "mapping(string => struct AngelToken.Alm)"
                  },
                  "typeName": {
                    "id": 23,
                    "keyType": {
                      "id": 21,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "484:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "475:23:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Alm_$35_storage_$",
                      "typeString": "mapping(string => struct AngelToken.Alm)"
                    },
                    "valueType": {
                      "contractScope": null,
                      "id": 22,
                      "name": "Alm",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 35,
                      "src": "494:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Alm_$35_storage_ptr",
                        "typeString": "struct AngelToken.Alm"
                      }
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "canonicalName": "AngelToken.Alm",
                  "id": 35,
                  "members": [
                    {
                      "constant": false,
                      "id": 26,
                      "mutability": "mutable",
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 35,
                      "src": "542:13:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 25,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "542:7:1",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 28,
                      "mutability": "mutable",
                      "name": "uri",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 35,
                      "src": "560:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 27,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "560:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 30,
                      "mutability": "mutable",
                      "name": "name",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 35,
                      "src": "576:11:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 29,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "576:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 32,
                      "mutability": "mutable",
                      "name": "sym",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 35,
                      "src": "594:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 31,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "594:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 34,
                      "mutability": "mutable",
                      "name": "id",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 35,
                      "src": "630:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 33,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "630:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "name": "Alm",
                  "nodeType": "StructDefinition",
                  "scope": 259,
                  "src": "525:732:1",
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "functionSelector": "d2a55e33",
                  "id": 38,
                  "mutability": "mutable",
                  "name": "alms",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 259,
                  "src": "1260:17:1",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Alm_$35_storage_$dyn_storage",
                    "typeString": "struct AngelToken.Alm[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 36,
                      "name": "Alm",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 35,
                      "src": "1260:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Alm_$35_storage_ptr",
                        "typeString": "struct AngelToken.Alm"
                      }
                    },
                    "id": 37,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1260:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Alm_$35_storage_$dyn_storage_ptr",
                      "typeString": "struct AngelToken.Alm[]"
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "anonymous": false,
                  "documentation": null,
                  "id": 42,
                  "name": "MintDataEvent",
                  "nodeType": "EventDefinition",
                  "parameters": {
                    "id": 41,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 40,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "mintData",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 42,
                        "src": "1301:14:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes"
                        },
                        "typeName": {
                          "id": 39,
                          "name": "bytes",
                          "nodeType": "ElementaryTypeName",
                          "src": "1301:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_storage_ptr",
                            "typeString": "bytes"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1300:16:1"
                  },
                  "src": "1281:36:1"
                },
                {
                  "anonymous": false,
                  "documentation": null,
                  "id": 54,
                  "name": "ManifestedAngelToken",
                  "nodeType": "EventDefinition",
                  "parameters": {
                    "id": 53,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 44,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "owner",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 54,
                        "src": "1353:13:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 43,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1353:7:1",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 46,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "_uri",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 54,
                        "src": "1374:11:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 45,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "1374:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 48,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "_ename",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 54,
                        "src": "1394:13:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 47,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "1394:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 50,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "_esym",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 54,
                        "src": "1434:12:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 49,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "1434:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 52,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "_id",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 54,
                        "src": "1477:11:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 51,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1477:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1346:394:1"
                  },
                  "src": "1320:421:1"
                },
                {
                  "body": {
                    "id": 87,
                    "nodeType": "Block",
                    "src": "2145:272:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 77,
                              "name": "_ename",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56,
                              "src": "2324:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 78,
                              "name": "_esym",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58,
                              "src": "2332:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 79,
                              "name": "_num_to_issue",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60,
                              "src": "2339:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 80,
                              "name": "_mint_date",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62,
                              "src": "2354:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 81,
                              "name": "_cost",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 64,
                              "src": "2366:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 82,
                              "name": "_angel_coefficient",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66,
                              "src": "2373:18:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 83,
                              "name": "_status",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68,
                              "src": "2393:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 84,
                              "name": "_product",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 70,
                              "src": "2402:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 76,
                            "name": "tokenGenesis",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 219,
                            "src": "2311:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory,uint256,uint256,uint256,uint256,uint256,string memory)"
                            }
                          },
                          "id": 85,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2311:100:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 86,
                        "nodeType": "ExpressionStatement",
                        "src": "2311:100:1"
                      }
                    ]
                  },
                  "documentation": null,
                  "id": 88,
                  "implemented": true,
                  "kind": "constructor",
                  "modifiers": [
                    {
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "687474703a2f2f6c6f63616c686f73743a333030302f",
                          "id": 73,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2106:24:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_2a04a7bc50d9f8e10f3ea0f2a07d1d451c3f6a4f07f1e689d435029d6d79bdb3",
                            "typeString": "literal_string \"http://localhost:3000/\""
                          },
                          "value": "http://localhost:3000/"
                        }
                      ],
                      "id": 74,
                      "modifierName": {
                        "argumentTypes": null,
                        "id": 72,
                        "name": "ERC1155",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1601,
                        "src": "2098:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC1155_$1601_$",
                          "typeString": "type(contract ERC1155)"
                        }
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "2098:33:1"
                    }
                  ],
                  "name": "",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 71,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 56,
                        "mutability": "mutable",
                        "name": "_ename",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 88,
                        "src": "1761:20:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 55,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "1761:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 58,
                        "mutability": "mutable",
                        "name": "_esym",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 88,
                        "src": "1805:19:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 57,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "1805:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 60,
                        "mutability": "mutable",
                        "name": "_num_to_issue",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 88,
                        "src": "1853:21:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 59,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1853:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 62,
                        "mutability": "mutable",
                        "name": "_mint_date",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 88,
                        "src": "1884:18:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 61,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1884:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 64,
                        "mutability": "mutable",
                        "name": "_cost",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 88,
                        "src": "1913:13:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 63,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1913:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 66,
                        "mutability": "mutable",
                        "name": "_angel_coefficient",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 88,
                        "src": "1938:26:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 65,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1938:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 68,
                        "mutability": "mutable",
                        "name": "_status",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 88,
                        "src": "1977:15:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 67,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1977:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 70,
                        "mutability": "mutable",
                        "name": "_product",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 88,
                        "src": "2057:22:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 69,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "2057:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1755:338:1"
                  },
                  "returnParameters": {
                    "id": 75,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "2145:0:1"
                  },
                  "scope": 259,
                  "src": "1744:673:1",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 218,
                    "nodeType": "Block",
                    "src": "3100:2042:1",
                    "statements": [
                      {
                        "assignments": [
                          108
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 108,
                            "mutability": "mutable",
                            "name": "new_alm",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 218,
                            "src": "3171:18:1",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                              "typeString": "struct AngelToken.Alm"
                            },
                            "typeName": {
                              "contractScope": null,
                              "id": 107,
                              "name": "Alm",
                              "nodeType": "UserDefinedTypeName",
                              "referencedDeclaration": 35,
                              "src": "3171:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Alm_$35_storage_ptr",
                                "typeString": "struct AngelToken.Alm"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 109,
                        "initialValue": null,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3171:18:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 115,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 110,
                              "name": "new_alm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 108,
                              "src": "3311:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                                "typeString": "struct AngelToken.Alm memory"
                              }
                            },
                            "id": 112,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "owner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 26,
                            "src": "3311:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 113,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "3327:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 114,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3327:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "3311:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 116,
                        "nodeType": "ExpressionStatement",
                        "src": "3311:26:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 121,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 117,
                              "name": "new_alm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 108,
                              "src": "3351:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                                "typeString": "struct AngelToken.Alm memory"
                              }
                            },
                            "id": 119,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "name",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 30,
                            "src": "3351:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 120,
                            "name": "_ename",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 90,
                            "src": "3366:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "3351:21:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "id": 122,
                        "nodeType": "ExpressionStatement",
                        "src": "3351:21:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 127,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 123,
                              "name": "new_alm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 108,
                              "src": "3386:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                                "typeString": "struct AngelToken.Alm memory"
                              }
                            },
                            "id": 125,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "sym",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 32,
                            "src": "3386:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 126,
                            "name": "_esym",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92,
                            "src": "3400:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "3386:19:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "id": 128,
                        "nodeType": "ExpressionStatement",
                        "src": "3386:19:1"
                      },
                      {
                        "assignments": [
                          130
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 130,
                            "mutability": "mutable",
                            "name": "_id",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 218,
                            "src": "3419:11:1",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 129,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3419:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 134,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 132,
                              "name": "_ename",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 90,
                              "src": "3444:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 131,
                            "name": "_idGenesis",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 258,
                            "src": "3433:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_uint256_$",
                              "typeString": "function (string memory) pure returns (uint256)"
                            }
                          },
                          "id": 133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3433:18:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3419:32:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 139,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "!",
                              "prefix": true,
                              "src": "3543:20:1",
                              "subExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 136,
                                  "name": "is_on_manifest",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 16,
                                  "src": "3544:14:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                    "typeString": "mapping(uint256 => bool)"
                                  }
                                },
                                "id": 138,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 137,
                                  "name": "_id",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 130,
                                  "src": "3559:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "3544:19:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "id": 135,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "3535:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 140,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3535:29:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 141,
                        "nodeType": "ExpressionStatement",
                        "src": "3535:29:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 146,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 142,
                              "name": "new_alm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 108,
                              "src": "3578:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                                "typeString": "struct AngelToken.Alm memory"
                              }
                            },
                            "id": 144,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "id",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 34,
                            "src": "3578:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 145,
                            "name": "_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 130,
                            "src": "3591:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3578:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 147,
                        "nodeType": "ExpressionStatement",
                        "src": "3578:16:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 152,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 148,
                              "name": "is_on_manifest",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16,
                              "src": "3608:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                "typeString": "mapping(uint256 => bool)"
                              }
                            },
                            "id": 150,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 149,
                              "name": "_id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 130,
                              "src": "3623:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3608:19:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "74727565",
                            "id": 151,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3630:4:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "3608:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 153,
                        "nodeType": "ExpressionStatement",
                        "src": "3608:26:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 169,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 154,
                              "name": "new_alm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 108,
                              "src": "3648:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                                "typeString": "struct AngelToken.Alm memory"
                              }
                            },
                            "id": 156,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "uri",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 28,
                            "src": "3648:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "id": 163,
                                        "name": "_esym",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 92,
                                        "src": "3703:5:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_string_memory_ptr",
                                          "typeString": "string memory"
                                        }
                                      },
                                      {
                                        "argumentTypes": null,
                                        "id": 164,
                                        "name": "_id",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 130,
                                        "src": "3710:3:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_string_memory_ptr",
                                          "typeString": "string memory"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 161,
                                        "name": "abi",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": -1,
                                        "src": "3686:3:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_abi",
                                          "typeString": "abi"
                                        }
                                      },
                                      "id": 162,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "memberName": "encodePacked",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "3686:16:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                        "typeString": "function () pure returns (bytes memory)"
                                      }
                                    },
                                    "id": 165,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "3686:28:1",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "2e6a736f6e",
                                    "id": 166,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "3716:7:1",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_94311adc0a0cd4e10be11b23bd4316b8cffa4adf693e8f96f5c075aa439a7972",
                                      "typeString": "literal_string \".json\""
                                    },
                                    "value": ".json"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    },
                                    {
                                      "typeIdentifier": "t_stringliteral_94311adc0a0cd4e10be11b23bd4316b8cffa4adf693e8f96f5c075aa439a7972",
                                      "typeString": "literal_string \".json\""
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 159,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -1,
                                    "src": "3669:3:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 160,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3669:16:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 167,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3669:55:1",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 158,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3662:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                "typeString": "type(string storage pointer)"
                              },
                              "typeName": {
                                "id": 157,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "3662:6:1",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 168,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3662:63:1",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "3648:77:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "id": 170,
                        "nodeType": "ExpressionStatement",
                        "src": "3648:77:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 174,
                              "name": "new_alm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 108,
                              "src": "4098:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                                "typeString": "struct AngelToken.Alm memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                                "typeString": "struct AngelToken.Alm memory"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 171,
                              "name": "alms",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38,
                              "src": "4088:4:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Alm_$35_storage_$dyn_storage",
                                "typeString": "struct AngelToken.Alm storage ref[] storage ref"
                              }
                            },
                            "id": 173,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "4088:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Alm_$35_storage_$returns$__$",
                              "typeString": "function (struct AngelToken.Alm storage ref)"
                            }
                          },
                          "id": 175,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4088:18:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 176,
                        "nodeType": "ExpressionStatement",
                        "src": "4088:18:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 187,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 177,
                            "name": "mintData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12,
                            "src": "4118:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_storage",
                              "typeString": "bytes storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 180,
                                "name": "_num_to_issue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 94,
                                "src": "4140:13:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 181,
                                "name": "_mint_date",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 96,
                                "src": "4155:10:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 182,
                                "name": "_cost",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 98,
                                "src": "4167:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 183,
                                "name": "_angel_coefficient",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 100,
                                "src": "4174:18:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 184,
                                "name": "_status",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 102,
                                "src": "4194:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 185,
                                "name": "_product",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 104,
                                "src": "4203:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 178,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "4129:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 179,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encode",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4129:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 186,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4129:83:1",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "src": "4118:94:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_storage",
                            "typeString": "bytes storage ref"
                          }
                        },
                        "id": 188,
                        "nodeType": "ExpressionStatement",
                        "src": "4118:94:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 194,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 189,
                              "name": "map_owner_to_id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20,
                              "src": "4224:15:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 192,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 190,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "4240:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 191,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4240:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4224:27:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 193,
                            "name": "_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 130,
                            "src": "4254:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4224:33:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 195,
                        "nodeType": "ExpressionStatement",
                        "src": "4224:33:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 197,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "4512:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 198,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4512:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 199,
                              "name": "_id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 130,
                              "src": "4524:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 200,
                              "name": "_num_to_issue",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 94,
                              "src": "4529:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 201,
                              "name": "mintData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12,
                              "src": "4544:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_storage",
                                "typeString": "bytes storage ref"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_bytes_storage",
                                "typeString": "bytes storage ref"
                              }
                            ],
                            "id": 196,
                            "name": "_mint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1149,
                            "src": "4506:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (address,uint256,uint256,bytes memory)"
                            }
                          },
                          "id": 202,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4506:47:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 203,
                        "nodeType": "ExpressionStatement",
                        "src": "4506:47:1"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 205,
                              "name": "mintData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12,
                              "src": "4686:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_storage",
                                "typeString": "bytes storage ref"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_storage",
                                "typeString": "bytes storage ref"
                              }
                            ],
                            "id": 204,
                            "name": "MintDataEvent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42,
                            "src": "4672:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (bytes memory)"
                            }
                          },
                          "id": 206,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4672:23:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 207,
                        "nodeType": "EmitStatement",
                        "src": "4667:28:1"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 209,
                                "name": "new_alm",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 108,
                                "src": "4749:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                                  "typeString": "struct AngelToken.Alm memory"
                                }
                              },
                              "id": 210,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "owner",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 26,
                              "src": "4749:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 211,
                                "name": "new_alm",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 108,
                                "src": "4780:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Alm_$35_memory_ptr",
                                  "typeString": "struct AngelToken.Alm memory"
                                }
                              },
                              "id": 212,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "uri",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 28,
                              "src": "4780:11:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 213,
                              "name": "_ename",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 90,
                              "src": "4810:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 214,
                              "name": "_esym",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 92,
                              "src": "4836:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 215,
                              "name": "_id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 130,
                              "src": "4862:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 208,
                            "name": "ManifestedAngelToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 54,
                            "src": "4712:20:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                              "typeString": "function (address,string memory,string memory,string memory,uint256)"
                            }
                          },
                          "id": 216,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4712:416:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 217,
                        "nodeType": "EmitStatement",
                        "src": "4707:421:1"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "bd37c35e",
                  "id": 219,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "tokenGenesis",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 105,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 90,
                        "mutability": "mutable",
                        "name": "_ename",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 219,
                        "src": "2843:20:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 89,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "2843:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 92,
                        "mutability": "mutable",
                        "name": "_esym",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 219,
                        "src": "2870:19:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 91,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "2870:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 94,
                        "mutability": "mutable",
                        "name": "_num_to_issue",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 219,
                        "src": "2897:21:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 93,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2897:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 96,
                        "mutability": "mutable",
                        "name": "_mint_date",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 219,
                        "src": "2928:18:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 95,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2928:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 98,
                        "mutability": "mutable",
                        "name": "_cost",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 219,
                        "src": "2957:13:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 97,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2957:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 100,
                        "mutability": "mutable",
                        "name": "_angel_coefficient",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 219,
                        "src": "2982:26:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 99,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2982:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 102,
                        "mutability": "mutable",
                        "name": "_status",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 219,
                        "src": "3021:15:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 101,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3021:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 104,
                        "mutability": "mutable",
                        "name": "_product",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 219,
                        "src": "3050:22:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 103,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "3050:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2837:249:1"
                  },
                  "returnParameters": {
                    "id": 106,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "3100:0:1"
                  },
                  "scope": 259,
                  "src": "2815:2327:1",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 227,
                    "nodeType": "Block",
                    "src": "5198:29:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 224,
                            "name": "alms",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 38,
                            "src": "5211:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Alm_$35_storage_$dyn_storage",
                              "typeString": "struct AngelToken.Alm storage ref[] storage ref"
                            }
                          },
                          "id": 225,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "5211:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 223,
                        "id": 226,
                        "nodeType": "Return",
                        "src": "5204:18:1"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "5d91889a",
                  "id": 228,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "getAlmsLength",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 220,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "5167:2:1"
                  },
                  "returnParameters": {
                    "id": 223,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 222,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 228,
                        "src": "5190:7:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 221,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5190:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "5189:9:1"
                  },
                  "scope": 259,
                  "src": "5145:82:1",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 257,
                    "nodeType": "Block",
                    "src": "5326:131:1",
                    "statements": [
                      {
                        "assignments": [
                          236
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 236,
                            "mutability": "mutable",
                            "name": "idmod",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 257,
                            "src": "5332:13:1",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 235,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "5332:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 240,
                        "initialValue": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_rational_10000000000000000_by_1",
                            "typeString": "int_const 10000000000000000"
                          },
                          "id": 239,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "hexValue": "3130",
                            "id": 237,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5348:2:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3136",
                            "id": 238,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5354:2:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_16_by_1",
                              "typeString": "int_const 16"
                            },
                            "value": "16"
                          },
                          "src": "5348:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10000000000000000_by_1",
                            "typeString": "int_const 10000000000000000"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "5332:24:1"
                      },
                      {
                        "assignments": [
                          242
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 242,
                            "mutability": "mutable",
                            "name": "token_id",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 257,
                            "src": "5362:16:1",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 241,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "5362:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 252,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 248,
                                      "name": "_str",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 230,
                                      "src": "5416:4:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 246,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -1,
                                      "src": "5399:3:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 247,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "5399:16:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 249,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5399:22:1",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 245,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "5389:9:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 250,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5389:33:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 244,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5381:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 243,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "5381:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 251,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5381:42:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "5362:61:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 255,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 253,
                            "name": "token_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 242,
                            "src": "5436:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 254,
                            "name": "idmod",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 236,
                            "src": "5447:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5436:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 234,
                        "id": 256,
                        "nodeType": "Return",
                        "src": "5429:23:1"
                      }
                    ]
                  },
                  "documentation": null,
                  "id": 258,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "_idGenesis",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 231,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 230,
                        "mutability": "mutable",
                        "name": "_str",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 258,
                        "src": "5274:18:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 229,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "5274:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "5273:20:1"
                  },
                  "returnParameters": {
                    "id": 234,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 233,
                        "mutability": "mutable",
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 258,
                        "src": "5317:7:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 232,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5317:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "5316:9:1"
                  },
                  "scope": 259,
                  "src": "5254:203:1",
                  "stateMutability": "pure",
                  "virtual": false,
                  "visibility": "internal"
                }
              ],
              "scope": 260,
              "src": "203:5256:1"
            }
          ],
          "src": "0:5460:1"
        },
        "compiler": {
          "name": "solc",
          "version": "0.6.12+commit.27d51765.Emscripten.clang"
        },
        "networks": {
          "5777": {
            "events": {
              "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "Approval",
                "type": "event"
              },
              "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                  },
                  {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                  }
                ],
                "name": "ApprovalForAll",
                "type": "event"
              },
              "0x6a04168520174b5a6c4c6756da84236dd5310ed0345d6f627a3f85d295762c15": {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_uri",
                    "type": "string"
                  },
                  {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_ename",
                    "type": "string"
                  },
                  {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_esym",
                    "type": "string"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_issue_num",
                    "type": "uint256"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_mint_date",
                    "type": "uint256"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_cost",
                    "type": "uint256"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_angel_coefficient",
                    "type": "uint256"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_status",
                    "type": "uint256"
                  },
                  {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_product",
                    "type": "string"
                  }
                ],
                "name": "ManifestedAngelToken",
                "type": "event"
              },
              "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "Transfer",
                "type": "event"
              },
              "0x12ae7fc64a50ae84cc0201fbe8dbdd65d11d5627f33d37124e44d747d70a1e25": {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "mintData",
                    "type": "bytes"
                  }
                ],
                "name": "MintDataEvent",
                "type": "event"
              },
              "0xfe99a262e3dd0e48e90236b461a772a2f7404b3348fef116ec7441d47d536763": {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_uri",
                    "type": "string"
                  },
                  {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_ename",
                    "type": "string"
                  },
                  {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_esym",
                    "type": "string"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                  }
                ],
                "name": "ManifestedAngelToken",
                "type": "event"
              },
              "0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb": {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256[]",
                    "name": "ids",
                    "type": "uint256[]"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256[]",
                    "name": "values",
                    "type": "uint256[]"
                  }
                ],
                "name": "TransferBatch",
                "type": "event"
              },
              "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62": {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                  }
                ],
                "name": "TransferSingle",
                "type": "event"
              },
              "0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b": {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": false,
                    "internalType": "string",
                    "name": "value",
                    "type": "string"
                  },
                  {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                  }
                ],
                "name": "URI",
                "type": "event"
              },
              "0x9eddef0401d389a49df6a624b2fcc2bc33528e291a3411510efc02fc415935d4": {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": false,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                  },
                  {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_uri",
                    "type": "string"
                  },
                  {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_ename",
                    "type": "string"
                  },
                  {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_esym",
                    "type": "string"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                  }
                ],
                "name": "ManifestedAngelToken",
                "type": "event"
              }
            },
            "links": {},
            "address": "0x8475d9392114759Bb60B373f9c822e5B85ae29A9",
            "transactionHash": "0x2ba0d19cd378f7e1daa296df3459e448d255e0209b6e4a1c920f8e01c95f448d"
          }
        },
        "schemaVersion": "3.3.2",
        "updatedAt": "2020-12-21T19:49:09.762Z",
        "networkType": "ethereum",
        "devdoc": {
          "kind": "dev",
          "methods": {
            "balanceOf(address,uint256)": {
              "details": "See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address."
            },
            "balanceOfBatch(address[],uint256[])": {
              "details": "See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length."
            },
            "isApprovedForAll(address,address)": {
              "details": "See {IERC1155-isApprovedForAll}."
            },
            "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": {
              "details": "See {IERC1155-safeBatchTransferFrom}."
            },
            "safeTransferFrom(address,address,uint256,uint256,bytes)": {
              "details": "See {IERC1155-safeTransferFrom}."
            },
            "setApprovalForAll(address,bool)": {
              "details": "See {IERC1155-setApprovalForAll}."
            },
            "supportsInterface(bytes4)": {
              "details": "See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas."
            },
            "uri(uint256)": {
              "details": "See {IERC1155MetadataURI-uri}. This implementation returns the same URI for *all* token types. It relies on the token type ID substitution mechanism https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP]. Clients calling this function must replace the `\\{id\\}` substring with the actual token type ID."
            }
          },
          "version": 1
        },
        "userdoc": {
          "kind": "user",
          "methods": {},
          "version": 1
        }
      }
        // expect($scope.AngelTokenjson).toEqual(tokenJson);
    });
    // it('loads web3', function () {
    //
    // });
    // it('loads the first account from web3', function () {
    //
    // });
    // it('makes a variable for displaying account in browser', function () {
    //
    // });
    // it('loads the network id', function () {
    //
    // });
    // it('loads the network data', function () {
    //
    // });
    // it('loads the token contract by abi and address', function () {
    //    // get abi from token json
    //    // get Address from network data
    //    // get contract with abi and address
    // });
    // describe('Fetch the total number of "Alms"', function () {
    //   it('loads the total number of all AngelTokens created from the length of the immutable "Alms" array', function () {
    //       // should be a service with the call "getAlmsLength"
    //   });
    // });
    // describe('Fetch the "Alms"')
    //   it('loads the tokens owned or made by the account grabbed from web3', function () {
    //     //fetch tokens should be a service with the call being "alms.length"
    //   });
  });

  // describe('Manifest New Tokens', function () {
  //     it('uses "tokenGenesis" from smart contract to make a new set of tokens for the grabbed web3 account', function () {
  //       return
  //     }).then(function (receipt) {
  //       // grab the receipt to update the gui in a promise chain
  //       // should be a manifest event with token details
  //       // should be a uri for each token
  //       // and a mintdata event with endeavor details: cost, product, angel's coefficient, mint data
  //     });
  // });
  // // describe('getBalance, also for sanity check', function () {
  // //   it('should return the ether balance of the account entered', function () {
  // //     //just to have a around and to make sure everything is connected. can get rid of it later
  // //
  // //   })
  // });


});

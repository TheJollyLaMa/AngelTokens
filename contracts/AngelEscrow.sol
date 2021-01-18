pragma solidity >=0.4.21 <0.7.0;

contract AngelEscrow {

    address agent; //ethereum address - the only person to deposit and withdraw funds - the person with all the permissions assigned when deployed

    mapping(address => uint256) public deposits; //store the deposits in escrow

    modifier onlyAgent() {
        require(msg.sender == agent); //require that only the escrow agent can call the functions
        _;
    }

    constructor () public {
         agent = msg.sender;  // address that deployed the contract
    }

    function deposit(address payee) public onlyAgent payable {
        uint256 amount = msg.value; // the value sent when the function is called because it is "payable"
        deposits[payee] = deposits[payee] + amount; // keep track of the funds sent in
    }

    function withdraw(address payable payee) public onlyAgent {
        uint256 payment = deposits[payee]; // fetch the funds from the escrow account
        deposits[payee] = 0; //zero out funds from escrow
        payee.transfer(payment); // send funds to payee
    }


}

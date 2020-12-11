
Angel Manifester

Angel Manifester will maintain a database of all Angel Tokens in our Angel Council
Angel Manifester will have a function for creating new Angel Tokens
Each Angel Token will have a unique appearance with unique attributes attached to the Endeavor





state variables are permanently stored in contract storage
 as in ----> ... Written to the Blockchain ... <----!


Using msg.sender gives you the security of the Ethereum blockchain — the only way someone can modify someone else's data would be to steal the private key associated with their Ethereum address.


require makes it so that the function will throw an error and stop executing if some condition is not true:
Thus require is quite useful for verifying certain conditions that must be true before running a function.


function sayHiToVitalik(string memory _name) public returns (string memory) {
  // Compares if _name equals "Vitalik". Throws an error and exits if not true.
  // (Side note: Solidity doesn't have native string comparison, so we
  // compare their keccak256 hashes to see if the strings are equal)
  require(keccak256(abi.encodePacked(_name)) == keccak256(abi.encodePacked("Vitalik")));
  // If it's true, proceed with the function:
  return "Hi!";
}

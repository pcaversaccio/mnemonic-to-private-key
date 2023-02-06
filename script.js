const { seedPhrase } = require('./secrets.json');
const { HDNodeWallet } = require('ethers');

// Generates a BIP-039 + BIP-044 wallet from mnemonic deriving path
// (default = "m/44'/60'/0'/0/0") using the wordlist.
const mnemonicWallet = HDNodeWallet.fromPhrase(seedPhrase);
console.log(mnemonicWallet.privateKey);

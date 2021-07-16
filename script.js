// Author: Pascal Marco Caversaccio
// E-Mail: pascal.caversaccio@hotmail.ch

const { seedPhrase } = require('./secrets.json'); // Include the wallet mnemonic
const ethers = require('ethers') // Import the ethers.js library, a complete Ethereum wallet implementation and utilities for JavaScript (and TypeScript)

let mnemonic = seedPhrase; // Set the wallet mnemonic
let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic); // Generates a BIP-039 + BIP-044 wallet from mnemonic deriving path (default = "m/44’/60’/0’/0/0") using the wordlist
console.log(mnemonicWallet.privateKey); // Output the private key

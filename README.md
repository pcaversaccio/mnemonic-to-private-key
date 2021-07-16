# From Mnemonic Phrase to Private Key
The `JS` script [`script.js`](https://github.com/pcaversaccio/mnemonic-to-private-key/blob/main/script.js) converts to the mnemonic phrase into a wallet private key using the [ethers.js](https://docs.ethers.io/v5/) library. First, create a `secrets.json` file that includes the mnemonic phrase. The file should look like the following (make sure to always [`.gitignore`](https://github.com/pcaversaccio/mnemonic-to-private-key/blob/main/.gitignore) it!):
```json
{
    "seedPhrase": "brain theme ..."
}
```
Then run `npm i` first and thereafter `node .\script.js`.

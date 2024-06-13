# Chain-Check

This repository provides a way to check over 100 chains (160+ RPCs, but some chains are no longer up) for ETH balances.

The RPC list is from [DefiLlama](https://github.com/DefiLlama/defillama-sdk/blob/master/src/providers.json) and might need updating depending on the time you are running this file.

I will periodically update it in the repo, perhaps in the future move to automatic downloads

## Running
First, run
```
npm i
```
then switch the address in `index.js` under `myAddress` to be the address whose balances you want to check

Then run
```
node index.js
```
![image](https://github.com/bocalhky/chain-check/assets/2865836/01401f52-a2e6-4ee0-8ef3-f9284d832438)


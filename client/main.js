const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545'); // URL of your Celo node

const contractKit = require('@celo/contractkit');
const kit = contractKit.newKit('http://localhost:8545');

const Market = require('../../build/contracts/Market.json');
const Bet = require('../../build/contracts/Bet.json');

const market = new web3.eth.Contract(
  Market.abi,
  Market.networks[5777].address // Change network id as per your configuration
);

const bet = new web3.eth.Contract(
  Bet.abi,
  Bet.networks[5777].address // Change network id as per your configuration
);

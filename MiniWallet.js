require('dotenv').config();

const Web3 = require('web3');
const apiKey = process.env['apiKey']
//https://eth.getblock.io/805ec66a-2339-4f28-a4a9-020fa01015cb/sepolia/
const network = 'sepolia';
const node = "https://eth.getblock.io/$(apikey)/$(network)/"
const web3 = new Web3(node)

//console.log(web3)
const accountTo = web3.eth.accounts.create();
// console.log(accountTo.address)
// console.log(accountTo)

const privateKey = process.env['privateKey'];
const accountFrom = web3.eth.accounts.privateKeyToAccount(privateKey);
//console.log(accountFrom)

const createsSignedTx = async(rawTx) => {
    rawTx.gas = await web3.eth.estimateGas(rawTx);
    return await accountFrom.signTransaction(rawtx); 
}

const sendSignedTx = async(signedTx)=> {
    web3.eth.sendSignedTransaction(signedTx.rawTransaction).then(console.log)   
}

const amountTo="0.01"
const rawTx = {
    to:accountTo.address,
    value:web3.utils.toWei(amountTo,"ether")    
}
createsSignedTx(rawTx).then(sendSignedTx)


'use strict';
var crypto = require('crypto');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/', function (req, res, response) {
	
	  response = new Transaction (
       req.query.fromAddress,
       req.query.toAddress, 
       req.query.amount)
	
   res.send("<title>"+'BitZaCoin'+"</title>"+'<br>'+
   	"<h2>"+"Balance:"+savjeeCoin.getBalanceOfAddress(publicKey)+'\r'+'BZC'+'<br>'+
   	"<h3>"+publicKey+'<br>'+
   	"<form action='process_post'method='post'>"+'<br>'+
   	"From:"+"<input type='text'name='fromAddress'>"+'<br>'+
   	"To:"+"<input type='text'name='toAddress'>"+'<br>'+
   	"Amount:"+"<input type='text'name='amount'>"+'<br>'+
   	"<button>send</button>"+
   	"</form>"+'<br>'+'<br>'+
   	"<button>"+JSON.stringify(savjeeCoin.getAllTransactionsForWallet(publicKey))+
   	"</button>"+'<br>'+
   	JSON.stringify(publicKey)+'<br>'+
   	"<h2>"+"<footer>@Under owner right</footer>");
   	console.log(JSON.stringify(savjeeCoin));
})

app.post('/process_post', urlencodedParser, function (req, res,response) {

   // Prepare output in JSON format
   response = new Transaction (
       req.body.fromAddress,
       req.body.toAddress, 
       req.body.amount
   );
   response.sign(key)
  
   savjeeCoin.addTransaction(response);
   savjeeCoin.minePendingTransactions(response);
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8666, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

// Generate a new key pair and convert them to hex-strings

const { Blockchain, Transaction } = require('./blockchain');

const EC = require('elliptic').ec;

// You can use any elliptic curve you want
const ecdh = new EC('secp256k1');


const savjeeCoin = new Blockchain('BITZACOIN')


const keys = ecdh.keyFromPrivate('21404147b76e5fc467a739ebcebff85f569df7adcc831ccd9f2c061e216cffe');

const mypublicKey = keys.getPublic('hex');
savjeeCoin.minePendingTransactions(mypublicKey);

const myprivateKey = keys.getPrivate('hex');



// Generate a new key pair and convert them to hex-strings


const key = ecdh.genKeyPair([18]);

         
                   
const publicKey = key.getPublic(`hex`)
                  
 
savjeeCoin.minePendingTransactions(publicKey);

const privateKey = key.getPrivate('hex');

// Calculate percentage of a number 
const usd = 1; 
const bitzacoin = savjeeCoin.getBalanceOfAddress(publicKey);
const result = (100*bitzacoin) /usd;
const results= (bitzacoin/usd)*100;
 
console.log(`${bitzacoin}BZC is ${result}USD`); 

// Print the keys to the console
console.log('BALANCE:', savjeeCoin.getBalanceOfAddress(publicKey),'BZC');
console.log(
  'Your public key (also your wallet address, freely shareable)\n',
  publicKey
);

console.log();
console.log(
  'Your private key (keep this secret! To sign transactions)\n',
  privateKey
);


// Print the keys to the console
console.log('BALANCE:', savjeeCoin.getBalanceOfAddress(mypublicKey),'BZC');
console.log(
  'Your public key (also your wallet address, freely shareable)\n',
  mypublicKey
);

console.log();
console.log(
  'Your private key (keep this secret! To sign transactions)\n',
  myprivateKey
);
console.log(JSON.stringify(savjeeCoin,5));

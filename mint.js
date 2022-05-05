const contractAddress = "0x5eec7E5dF247eCc2438198A8eE60326e08f32155";//real on polygon
const network = "MATIC";
// const contractAddress = "0x1F67D0C188Cdc5e82890642c93Df2d8F659A8374"; //mumbai  
// const network = "0x13881";


const serverUrl = "https://ut8aywokthcr.usemoralis.com:2053/server"; // Mainnet Server
const appId = "hxRNjcTW18pycEUJ9PLsWa8aUehpIRf5zauGQmAG";
Moralis.start({ serverUrl, appId });

// const serverUrl = "https://ptrvru6weuns.usemoralis.com:2053/server"; // Testnet server
// const appId = "8v4wOwM8yMvxulfQGdpV8v32vDjCIoFUUzFXlQSc";
// Moralis.start({ serverUrl, appId });




const ABI= 
  [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxSupply",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "baseUri",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "freeMintAllowance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxMintPerTx",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isSaleActive",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "freeMintIsAllowedUntil",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ApprovalCallerNotOwnerNorApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalToCurrentOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApproveToCaller",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BalanceQueryForZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintToZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintZeroQuantity",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OwnerQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferCallerNotOwnerNorApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferFromIncorrectOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferToNonERC721ReceiverImplementer",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferToZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "URIQueryForNonexistentToken",
      "type": "error"
    },
    {
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
    {
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
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
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
    {
      "inputs": [],
      "name": "FREE_MINT_IS_ALLOWED_UNTIL",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "FREE_MINT_LIMIT_PER_WALLET",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "IS_SALE_ACTIVE",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_MINT_AMOUNT_PER_TX",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_SUPPLY",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "METADATA_FROZEN",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PRICE",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
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
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
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
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
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
          "name": "tokenId",
          "type": "uint256"
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
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
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
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
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
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ID",
          "type": "uint256"
        }
      ],
      "name": "mintSpecificID",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "customPrice",
          "type": "uint256"
        }
      ],
      "name": "setPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newMaxSupply",
          "type": "uint256"
        }
      ],
      "name": "lowerMaxSupply",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "customBaseURI_",
          "type": "string"
        }
      ],
      "name": "setBaseURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "freeMintAllowance",
          "type": "uint256"
        }
      ],
      "name": "setFreeMintAllowance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "maxMintPerTx",
          "type": "uint256"
        }
      ],
      "name": "setMaxMintPerTx",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "saleIsActive",
          "type": "bool"
        }
      ],
      "name": "setSaleActive",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "freeMintIsAllowedUntil",
          "type": "uint256"
        }
      ],
      "name": "setFreeMintAllowedUntil",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "freezeMetadata",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unFreezeMetadata",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_mintAmount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_mintAmount",
          "type": "uint256"
        }
      ],
      "name": "mintOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
;



/* Moralis init code */

document.getElementById("btn-mint").style.visibility="hidden";
document.getElementById("poly").style.visibility="hidden";
logOut();

/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({
      signingMessage: "Log in using Moralis",
    })
      .then(function (user) {
        addPolygonNetwork();
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
        document.getElementById("btn-login").style.visibility="hidden";
        document.getElementById("networkconnect").style.visibility="hidden";
        document.getElementById("btn-mint").style.visibility="visible";
        countItems();
        getTotalSupply();
        getprice();
      })
      .catch(function (error) {
        console.log(error);
      });
  }else{
    document.getElementById("btn-login").style.visibility="hidden";
    document.getElementById("btn-mint").style.visibility="visible";
  }
  //getprice();
}

async function logOut() {
  await Moralis.User.logOut();
  document.getElementById("btn-login").style.visibility="visible";
  document.getElementById("btn-mint").style.visibility="hidden";
  console.log("logged out");
}

// increment decremet
var btnCounter = document.querySelectorAll('.btn-counter');
var totalItem = document.querySelector('.total-item');

mintamount="1";
function countItems() {

  
  for(var i = 0; i < btnCounter.length; i++) {
    
    btnCounter[i].addEventListener('click', function() {
      
      var oldValue = totalItem.value;
      if( this.value === '+' ) {
        // let string convert to integer
        var newValue = parseInt(oldValue, 10) + 1;
        if (newValue > 10){
          alert("Max mint amount is 10");
          newValue= 10;
        }
      } else {
        // Don't allow decrementing below 1
        if(oldValue > 1) {
          var newValue = parseInt(oldValue, 10) - 1;
        } else {
          newValue = 1;
        }
      }
      
      // check if value is a number
      newValue = isNaN(newValue) ? 1 : newValue;
      totalItem.value = newValue;
      count = newValue;
      mintamount=newValue;
      btnCounter=0;
    });  
    
  } 
 
}

// add network to metamask

async function addPolygonNetwork(){
  try {
      await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x89' }], // Hexadecimal version of 80001, prefixed with 0x
      });
  } catch (error) {
      if (error.code === 4902) {
          try {
              await ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [{ 
                      chainId: '0x89', // Hexadecimal version of 80001, prefixed with 0x
                      chainName: "POLYGON",
                      nativeCurrency: {
                          name: "MATIC",
                          symbol: "MATIC",
                          decimals: 18,
                      },
                      rpcUrls: ["https://polygon-rpc.com/"],
                      blockExplorerUrls: ["https://polygonscan.com/"],
                      iconUrls: [""],
              
                  }],
                  
              });
          } catch (addError){
              console.log('Did not add network');
          }
          
      }
  }

}


// mint

//mintamount=5;
async function mint(){
  try{
  const opt = {
    chain: network,contractAddress: contractAddress,
    functionName: "PRICE",
    abi: ABI,
  };
  const conPrice = await Moralis.executeFunction(opt);
  const newprice = conPrice.toString()
  const math = newprice / 10 ** 18
  const mathOne = math * mintamount;
  //const math = "0.1";
  const options = {
    chain: network,
    contractAddress: contractAddress,
    functionName: "mint",
    abi: ABI,
    msgValue: Moralis.Units.ETH(mathOne),
    params: {
        _mintAmount: Moralis.Units.Token(mintamount,"0"),
    }
  };
  console.log(math);
  const value = await Moralis.executeFunction(options);
  
  console.log("this is the hash value ", value.hash);
  //document.getElementById("txhash").innerText = "TX Hash: " + value.hash;
  document.getElementById("poly").style.visibility="visible";
  // document.getElementById("poly").onclick = href="https://kovan.etherscan.io/tx/"+hash;
  let route = "https://polygonscan.com/tx/"+value.hash;
  console.log(route);
  a = document.getElementById("poly");
  a.setAttribute("href", route);
  }catch (error) {
    // <!-- check error here -->
    console.log(error);     
     const errorMessage = (error) =>
          Object.getOwnPropertyNames(error).reduce((key, contents) => { key[contents] = error[contents]; return key; }, {});
          const Error = errorMessage(error);
          let errorString = Error['data']['message'].slice(20).toUpperCase();
          document.getElementById("btn-mint").innerText = "Insufficent Funds!";
      };
    }

async function withdraw(){
  const options = {
    chain: network,
    contractAddress: contractAddress,
    functionName: "withdraw",
    abi: ABI,

  };
  
  const value = await Moralis.executeFunction(options);
  console.log(value);
}

// get Price set on the contract

async function getprice(){
const options = {
  chain: network, contractAddress: contractAddress,
  functionName: "PRICE",
  abi: ABI,
};
const allowance = await Moralis.executeFunction(options);
const newprice = allowance.toString()
const math = newprice / 10 ** 18;
console.log(math);
document.getElementById("totalSupply").innerHTML = "1 cost " + math + " MATIC";
}


// Get totalsupply of nfts on the contract
async function getTotalSupply(){
  const options = { address: contractAddress, chain: network };
  const nftOwners = await Moralis.Web3API.token.getNFTOwners(options);
  document.getElementById("outOf").innerHTML = nftOwners.total + " / 5555";
  console.log("nft owners =   ",nftOwners);
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-mint").onclick = mint;

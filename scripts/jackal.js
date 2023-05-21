"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// based on jackal snippets + jsdoc of v2.0.0
var dotenv = require("dotenv");
var jackal_js_1 = require("jackal.js");
dotenv.config();
// Wrap this in a script to run on chain
// const newRun = async () => {}
var JackalChainInfo = {
    chainId: "jackal-1",
    chainName: "Jackal Mainnet",
    rpc: "https://rpc.jackalprotocol.com/",
    rest: "https://api.jackalprotocol.com/",
    bip44: {
        coinType: 118,
    },
    coinType: 118,
    stakeCurrency: {
        coinDenom: "JKL",
        coinMinimalDenom: "ujkl",
        coinDecimals: 6,
    },
    bech32Config: {
        bech32PrefixAccAddr: "jkl",
        bech32PrefixAccPub: "jklpub",
        bech32PrefixValAddr: "jklvaloper",
        bech32PrefixValPub: "jklvaloperpub",
        bech32PrefixConsAddr: "jklvalcons",
        bech32PrefixConsPub: "jklvalconspub",
    },
    currencies: [
        {
            coinDenom: "JKL",
            coinMinimalDenom: "ujkl",
            coinDecimals: 6,
        },
    ],
    feeCurrencies: [
        {
            coinDenom: "JKL",
            coinMinimalDenom: "ujkl",
            coinDecimals: 6,
            gasPriceStep: {
                low: 0.002,
                average: 0.002,
                high: 0.02,
            },
        },
    ],
    features: [],
};
var walletConfig = {
    selectedWallet: "keplr",
    signerChain: "jackal-1",
    enabledChains: ["jackal-1"],
    queryAddr: "https://grpc.jackalprotocol.com/",
    txAddr: "https://rpc.jackalprotocol.com/",
    chainConfig: JackalChainInfo,
};
var wallet = await jackal_js_1.WalletHandler.trackWallet(walletConfig);
var rns = await jackal_js_1.RnsHandler.trackRns(wallet);
var storage = await jackal_js_1.StorageHandler.trackStorage(wallet);
var fileIo = await jackal_js_1.FileIo.trackIo(wallet);
var f = new File([process.env.PASSWORD], "password.txt");
var handler = await jackal_js_1.FileUploadHandler.trackFile(f, "s/data");
var readyFile = handler.getForUpload();
var sourcesData = {
    data: null,
    exists: true,
    handler: handler,
    key: "credentials/password.txt",
    uploadable: readyFile
};
var sources = {
    UploadListItem: sourcesData
};
var parent = handler;
var tracker = {
    Complete: 0,
    Timer: 0
};
console.log("Uploading file...");
await fileIo.staggeredUploadFiles(sources, parent, tracker);
var downloadDetails = {
    rawPath: "credentials/password.txt",
    owner: process.env.WALLET_ID,
    isFolder: false
};
var completion = {
    track: 0
};
console.log("Downloading file...");
await fileIo.downloadFile(downloadDetails, completion);

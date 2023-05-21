// based on jackal snippets + jsdoc of v2.0.0
import * as dotenv from 'dotenv';
import { WalletHandler, RnsHandler, StorageHandler, FileIo, FileUploadHandler } from 'jackal.js';

dotenv.config()

// Wrap this in a script to run on chain
// const newRun = async () => {}

// Using API to check config: 
// https://api.jackalprotocol.com/jackal-dao/canine-chain/storage/providers/jkl1af9fltf045l5q25338wfp37v73v604za3z8yqz
// Use canine-chain for auth

const JackalChainInfo = {
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

const walletConfig = {
  selectedWallet: "keplr",
  signerChain: "jackal-1",
  enabledChains: ["jackal-1"],
  queryAddr: "https://grpc.jackalprotocol.com/",
  txAddr: "https://rpc.jackalprotocol.com/",
  chainConfig: JackalChainInfo,
};

const wallet = await WalletHandler.trackWallet(walletConfig)

const rns = await RnsHandler.trackRns(wallet)

const storage = await StorageHandler.trackStorage(wallet)

const fileIo = await FileIo.trackIo(wallet)

const f = new File([process.env.PASSWORD], "password.txt")

const handler = await FileUploadHandler.trackFile (f, "s/data")
const readyFile = handler.getForUpload()

const sourcesData = {
  data: null,
  exists: true,
  handler: handler,
  key: "credentials/password.txt",
  uploadable: readyFile
}

const sources = {
  UploadListItem: sourcesData
}

const parent = handler;

const tracker = {
  Complete: 0,
  Timer: 0
}

console.log("Uploading file...")

await fileIo.staggeredUploadFiles(sources, parent, tracker);

const downloadDetails = {
  rawPath: "credentials/password.txt",
  owner: process.env.WALLET_ID,
  isFolder: false
}

const completion = {
  track: 0
}

console.log("Downloading file...")

await fileIo.downloadFile (downloadDetails, completion)
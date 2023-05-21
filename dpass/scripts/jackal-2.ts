// based on jackal snippets + jsdoc of v2.0.0
import * as dotenv from 'dotenv';
import { WalletHandler, RnsHandler, StorageHandler, FileIo, FileUploadHandler } from 'jackal.js';

dotenv.config()

const walletConfig = {
  signerChain: 'jackal-1', 
  enabledChains: ['jackal-1'],
  queryAddr: 'https://testnet-grpc.jackalprotocol.com',
  txAddr: 'https://testnet-rpc.jackalprotocol.com'
}

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

await fileIo.staggeredUploadFiles(sources, parent, tracker);

const downloadDetails = {
  rawPath: "credentials/password.txt",
  owner: process.env.WALLET_ID,
  isFolder: false
}

const completion = {
  track: 0
}

await fileIo.downloadFile (downloadDetails, completion)
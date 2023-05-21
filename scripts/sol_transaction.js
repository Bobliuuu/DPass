// Using web3.js to send Solana tokens
// This can be used in the Axelar GNP use case

const web3 = require("@solana/web3.js");
const connection = new web3.Connection(
    "<YOUR_QUICKNODE_URL_HERE>", // Quicknode URL for web3 conn
    'confirmed',
  );

const secret=[00, ... 00]; // Secret key here
const from = web3.Keypair.fromSecretKey(new Uint8Array(secret));

const to = web3.Keypair.generate();

(async () => {
    const transaction = new web3.Transaction().add(
        web3.SystemProgram.transfer({
          fromPubkey: from.publicKey,
          toPubkey: to.publicKey,
          lamports: web3.LAMPORTS_PER_SOL / 100,
        }),
      );
      // Sign transaction, broadcast, and confirm, return resp
      const signature = await web3.sendAndConfirmTransaction(
        connection,
        transaction,
        [from],
      );
      console.log('SIGNATURE', signature);
})()
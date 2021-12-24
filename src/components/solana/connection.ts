import {
  Cluster,
  clusterApiUrl,
  Commitment,
  Connection
} from "@solana/web3.js";
// import { ref } from "vue";

// type Localnet = "localnet";

export const COMMITMENT: Commitment = "confirmed";

// export const CLUSTERS = {
//   MAINNET: "mainnet-beta" as Cluster,
//   TESTNET: "testnet" as Cluster,
//   DEVNET: "devnet" as Cluster,
//   LOCALNET: "localnet" as Localnet
// };

// export const chosenCluster = ref<Cluster | Localnet>(CLUSTERS.MAINNET);
export const chosenCluster="https://api.testnet.solana.com"
let connection: Connection;

// export const changeCluster = (clusterName: Cluster | Localnet) => {

  connection = new Connection(
 "https://api.testnet.solana.com" ,
    COMMITMENT
  );
  // chosenCluster.value = clusterName;


export const getConnection = () => connection;

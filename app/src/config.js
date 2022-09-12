import { PublicKey, clusterApiUrl } from "@solana/web3.js";
//Using specific wallet package
//import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";


import idl from "./idl.json";

export const preflightCommitment = "processed";
export const programID = new PublicKey(idl.metadata.address);
export const wallets = [new PhantomWalletAdapter()];

// const devnet = clusterApiUrl("devnet");
// const mainnet = clusterApiUrl("mainnet-beta");
const localnet = "http://127.0.0.1:8899";
export const network = localnet;

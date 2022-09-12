import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { createMint, createTokenAccount } from "@project-serum/common";
import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";


describe("sample", async () => {
  const provider = anchor.AnchorProvider.env();

  anchor.setProvider(provider);
  const sample = anchor.workspace.Sample as Program<Sample>;





  it("Starts a program", async () => {
  });
});

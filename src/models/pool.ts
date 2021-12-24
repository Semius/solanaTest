// import { AccountInfo, PublicKey } from "@solana/web3.js";
import { TokenAccount } from "./account";
import {
  
  Connection,
  PublicKey,
 
  AccountInfo,
  
} from '@solana/web3.js';
import { Token} from '@solana/spl-token';

export const DEFAULT_DENOMINATOR = 10_000;





// let Account:Token;
// async function getConnection(): Promise<Token> {
//   let acc:Token;
// let connection: Connection;


// let payer:Keypair;
// payer=new Keypair();
// let authority: PublicKey;
// let nonce: number;
// authority= payer.publicKey;

// console.log('creating token A');
// const connect =   new Connection('http://localhost:5000/', 'recent');


// acc=  await  Token.createMint(
//   connect,
// payer,
//  authority,
// null,
// 0,
// authority

// )

// Account=acc;
// return acc;
// }


  
  



export interface PoolInfo {
  pubkeys: {
    program: PublicKey;
    account: PublicKey;
    holdingAccounts: PublicKey[];
    holdingMints: PublicKey[];
    mint: PublicKey;
    feeAccount?: PublicKey;
  };
  legacy: boolean;
  raw: {
    pubkey: PublicKey;
    data: any;
    account: AccountInfo<Buffer>;
  };
}

export interface LiquidityComponent {
  amount: number;
  account?: TokenAccount;
  mintAddress: string;
}

export enum CurveType {
  ConstantProduct = 0,
  ConstantPrice = 1,
  Stable = 2,
  ConstantProductWithOffset = 3,
}

export interface PoolConfig {
  curveType: CurveType;
  fees: {
    tradeFeeNumerator: number;
    tradeFeeDenominator: number;
    ownerTradeFeeNumerator: number;
    ownerTradeFeeDenominator: number;
    ownerWithdrawFeeNumerator: number;
    ownerWithdrawFeeDenominator: number;
    hostFeeNumerator: number;
    hostFeeDenominator: number;
  };

  token_b_offset?: number;
  token_b_price?: number;
}

import React from "react";
import { Button, Menu, } from "antd";
import { useWallet } from "../context/wallet";
import { AccountInfo } from "./accountInfo";
import { WalletConnect } from "./walletConnect";
import { Link, Route, useHistory, useLocation } from "react-router-dom";
import * as BufferLayout from "buffer-layout";
import {
  
  Connection,
  PublicKey,
  Account
  
  
} from '@solana/web3.js';
import { Token} from '@solana/spl-token';
import { notify } from "../utils/notifications";
// import {createToken} from "./createtoken"
// import {Exchange } from "./createtoken"
import {BrowserRouter as Router} from "react-router-dom"

// import  {createNewToken} from "./token/index";
// import * as SolanaErrorHandler from "@/solana/SolanaErrorHandler";
// import { useRef } from 'react';

// eslint-disable-next-line react-hooks/rules-of-hooks
// const createdToenAddress = useRef("");

let createdToenAddress="";
let link ="";
let error="";
const testHandler = () => {
 

//  createToken();



 
}



export const AppBar = (props: { left?: JSX.Element; right?: JSX.Element }) => {
  const { connected } = useWallet();
  const location = useLocation();
  const history = useHistory();

 
  const TopBar = (
    <div className="App-Bar">
      <div className="App-Bar-left">
        <div className="App-logo" />
        <Menu mode="horizontal" selectedKeys={[location.pathname]}>
          <Menu.Item key="/">
            <Link
              to={{
                pathname: "/",
              }}
            >
              Swap
            </Link>
          </Menu.Item>

      

          <Menu.Item key="/add">
            <Link
              to={{
                pathname: "/add",
              }}
            >
              Pool
            </Link>
          </Menu.Item>
          <Menu.Item key="/info">
            <Link
              to={{
                pathname: "/info",
              }}
            >
              Charts
            </Link>
          </Menu.Item>
          <Menu.Item key="trade">
            <a
              href={"https://dex.projectserum.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Trade
              <sup>↗</sup>
            </a>
          </Menu.Item>
          <Menu.Item key="/token">
            <Link
              to={{
                pathname: "/token",
              }}
            >
              create token 
            </Link>
          </Menu.Item>
        </Menu>
        <Button
          type="text"
          size="large"
          onClick={testHandler}
        >
          Test Button
        </Button>
        {props.left}
      </div>
      <div className="App-Bar-right">
        <WalletConnect>
          <AccountInfo />
        </WalletConnect>
        {connected && (
          <Button
            type="text"
            size="large"
            onClick={() => history.push({ pathname: "/pool" })}
          >
            My Pools
          </Button>
        )}
        {props.right}
      </div>
    </div>
  );

  return TopBar;
};

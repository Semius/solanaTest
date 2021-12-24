/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Button, Card, Popover } from "antd";
import { TradeEntry } from "./trade";
import { AddToLiquidity } from "./pool/add";
import { Settings } from "./settings";
import { SettingOutlined } from "@ant-design/icons";
import { AppBar } from "./appBar";
import { useHistory, useLocation } from "react-router-dom";
// import { Exchange } from "./createtoken";
import { TextField}  from "@material-ui/core"
import { notify } from "../utils/notifications";
import { createNewToken } from "./solana/token";
import { useWallet } from "../context/wallet";
import * as SecretFormField from "./solana/SolanaErrorHandler"


export const Exchange = ({ children = null as any }) => {
  const tabStyle: React.CSSProperties = { width: 120 };
  const tabList = [
    {
      key: "trade",
      tab: <div style={tabStyle}>Trade</div>,
      render: () => {
        return <TradeEntry />;
      },
    },
    {
      key: "pool",
      tab: <div style={tabStyle}>Pool</div>,
      render: () => {
        return <AddToLiquidity />;
      },
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const activeTab = location.pathname.indexOf("add") < 0 ? "trade" : "pool";

  const handleTabChange = (key: any) => {
    if (activeTab !== key) {
      if (key === "trade") {
        history.push("/");
      } else {
        history.push("/add");
      }
    }
  };

  function getdata(val:any){

  
    createToken(val.target.value)
         

  }

  function testHandler(){
    
    notify({
      description:"button",
      message: "Adding liquidity cancelled.",
      type: "error",
    });

  }
  let payerSecret :"";
  let mintAuthorityAddress = ("");
  let freezeAuthorityAddress = ("");
  let tokenDecimals = (0);
  let createdTokenAddress = ("");
  let creatingToken = (false);
  let tokenLink = ("");
  let errorMessage = ("");
  let signExternally = (true);
  let wal= useWallet()

  let createToken = async (val:any) => {   
    tokenLink = "";
    createdTokenAddress = "";
    creatingToken = true;
    errorMessage = "";
    try {
      payerSecret=val;
      mintAuthorityAddress=val;
      freezeAuthorityAddress=val ;
      createdTokenAddress = await createNewToken(
       payerSecret,
       mintAuthorityAddress,

        freezeAuthorityAddress,
        tokenDecimals,
        signExternally
      );
          
      notify({
        message: "Tokens created.",
        type: "success",
        description: createdTokenAddress,
      });
      tokenLink = `https://explorer.solana.com/address/${createdTokenAddress}`;
    } catch (err) {

      errorMessage = SecretFormField.getErrorMessage(err);
      notify({
        description: errorMessage,
        message: "creatiing tokendcancelled.",
        type: "error "
      });
    }

    creatingToken = false;
  };



  return (
    <>
      <AppBar
        right={
          <Popover
            placement="topRight"
            title="Settings"
            content={<Settings />}
            trigger="click"
          >
            <Button
              shape="circle"
              size="large"
              type="text"
              icon={<SettingOutlined />}
            />
             
          </Popover>
        }
      />
      <Card
        className="exchange-card"
        headStyle={{ padding: 0 }}
        bodyStyle={{ position: "relative" }}
        tabList={tabList}
        tabProps={{
          tabBarGutter: 0,
        }}
        activeTabKey={activeTab}
        onTabChange={(key) => {
          handleTabChange(key);
        }}
      >
        {tabList.find((t) => t.key === activeTab)?.render()}
      </Card>


        <TextField
        label="hash"
        variant="outlined"
        style={{width:190}}
        type="text"
        onChange={getdata}
        
        />

<Button value="contained" color="primary"   style={{width:80}}>
  Primary
</Button>


<TextField
        label="hash"
        variant="outlined"
        style={{width:190}}
        type="text"
        
        
        />
      
    </>
  );
};

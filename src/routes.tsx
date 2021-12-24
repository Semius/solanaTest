import { HashRouter, Route,BrowserRouter } from "react-router-dom";
import React from "react";
import { ChartsView } from "./components/charts";

import { WalletProvider } from "./context/wallet";
import { ConnectionProvider } from "./utils/connection";
import { AccountsProvider } from "./utils/accounts";
import { CurrencyPairProvider } from "./utils/currencyPair";
import { MarketProvider } from "./context/market";
import { PoolOverview } from "./components/pool/view";
import { ExchangeView } from "./components/exchange";
import { Exchange } from "./components/createtoken";
import CreateMusicToken from "./components/CreateMusicToken";

export function Routes() {
  return (
    <>

      <HashRouter basename={"/"}>
        <ConnectionProvider>
          <WalletProvider>
            <AccountsProvider>
              <MarketProvider>
                <CurrencyPairProvider>
                  <Route exact path="/" component={ExchangeView} />
                  <Route exact path="/add" component={ExchangeView} />
                  <Route exact path="/info" component={() => <ChartsView />} />
                  <Route
                    exact
                    path="/pool"
                    component={() => <PoolOverview />}
                  />
                <Route exact path="/token" component={CreateMusicToken}/> 
                </CurrencyPairProvider>
              </MarketProvider>
            </AccountsProvider>
          </WalletProvider>
        </ConnectionProvider>
      </HashRouter>
    </>
  );
}

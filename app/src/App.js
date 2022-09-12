import React, {useCallback, useState, useEffect} from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './layouts/theme.js'
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { web3 } from "@project-serum/anchor";
import { programID, network, wallets, programKeys } from "./config";

const history = createBrowserHistory({
  //basename: '/'
});



const App = () => {
  const onWalletError = useCallback(
    (error) => {
      console.error(error);
    },
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ConnectionProvider endpoint={network}>
          <WalletProvider wallets={wallets} onError={onWalletError} autoConnect>
            <WalletDialogProvider>
              <Router history={history} basename={'/app'}>
                {renderRoutes(routes)}
              </Router>
            </WalletDialogProvider>
          </WalletProvider>
        </ConnectionProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

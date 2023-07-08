import React, {useContext, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client';
import './index.css';
import WarKade from './App';
import reportWebVitals from './reportWebVitals';
import './assets/styles/index.scss';

// wallets
import {PetraWallet} from 'petra-plugin-wallet-adapter';
import {FewchaWallet} from 'fewcha-plugin-wallet-adapter';
import {BloctoWallet} from '@blocto/aptos-wallet-adapter-plugin';
import {MartianWallet} from '@martianwallet/aptos-wallet-adapter';
import {WalletCore, NetworkName} from '@aptos-labs/wallet-adapter-core';
// import { PontemWalletAdapter } from '@pontem/aptos-wallet-adapter';
import {SpikaWallet} from '@spika/aptos-plugin';

import {AptosWalletAdapterProvider} from '@aptos-labs/wallet-adapter-react';
// import ErrorBoundary from './components/Errorboundary';
import {ErrorBoundary} from 'react-error-boundary';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {PropsProvider} from './context/propsContext';
import {Context as AuthContext} from './context';

let network = NetworkName.Testnet;
// let network = NetworkName.Mainnet;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const wallets: any = [
  new FewchaWallet(),
  new PetraWallet(),
  new BloctoWallet({
    network: network,
    bloctoAppId: '84503da4-7d0f-4ced-b004-ecd81bfc333b',
  }),
  new MartianWallet(),
  new SpikaWallet(),
];

export const aptosWallet = new WalletCore(wallets);

function ErrorFallback({error, resetErrorBoundary}: any) {
  return (
    <div>
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
}

interface IAptosWarkade {
  setConnectModalOpen: (walletName: string) => any;
  accountAddress?: any | null;
}

const setConnectModalOpen = (walletName: string) => {
  //open connect wallet here
  // after wallet connect set wallet address
  console.log('walletName', walletName);
};

const AptosWarkade = (props: IAptosWarkade) => {
  const {accountAddress, setConnectModalOpen} = props;

  return (
    <React.StrictMode>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
          <PropsProvider
            setConnectModalOpen={setConnectModalOpen}
            accountAddress={accountAddress}
          >
            <WarKade accountAddress={accountAddress} />
          </PropsProvider>
          <ToastContainer />
        </AptosWalletAdapterProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

// root.render(<AptosWarkade setConnectModalOpen={setConnectModalOpen} />);

export default AptosWarkade;
// "aptoswarkade": "file:../../packages/aptoswarkade",

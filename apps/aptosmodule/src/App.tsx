import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Module from 'aptoswarcade/src';

import {useWallet} from '@aptos-labs/wallet-adapter-react';

function App() {
  const [accountAddress, setAccountAddress] = useState<any>(null);
  const {connect, account} = useWallet();

  useEffect(() => {
    console.log('address', accountAddress);
    setAccountAddress(account);
  }, [account || accountAddress]);

  const setConnectModalOpen = (walletName: any) => {
    console.log('walletName', walletName);
    connect(walletName);
    // setAccountAddress('0xsjhdjfsdfd');
  };
  return (
    <>
      <Module
        setConnectModalOpen={setConnectModalOpen}
        accountAddress={accountAddress}
      />
    </>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Module from 'aptos-warkade/src';

function App() {
  const setConnectModalOpen = (walletName: string) => {
    console.log('walletName', walletName);
  };
  return (
    <>
      <Module setConnectModalOpen={setConnectModalOpen} />
    </>
  );
}

export default App;

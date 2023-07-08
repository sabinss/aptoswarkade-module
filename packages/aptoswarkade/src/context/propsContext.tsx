import React, {createContext, useEffect, useState} from 'react';

interface PropStateType {
  accountAddress?: string | null;
  signAndSubmitTransaction?: any;
  setConnectModalOpen?: any;
  transaction?: any;
}
const PropsContext = createContext<PropStateType | undefined>(undefined);

function PropsProvider({
  children,
  accountAddress,
  signAndSubmitTransaction,
  setConnectModalOpen,
  transaction,
}: any) {
  console.log('props provider');
  return (
    <PropsContext.Provider
      value={{
        accountAddress,
        signAndSubmitTransaction,
        setConnectModalOpen,
        transaction,
      }}
    >
      {children}
    </PropsContext.Provider>
  );
}

export {PropsContext, PropsProvider};

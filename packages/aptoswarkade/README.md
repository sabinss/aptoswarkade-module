## Installation

```bash yarn add aptoswarcade

```

## Usage

```bash
import AptosWarkade from 'aptoswarcade/src';
import {useWallet} from '@aptos-labs/wallet-adapter-react';

function App() {
  const [accountAddress, setAccountAddress] = useState<any>(null);
  const {connect, account} = useWallet();

  useEffect(() => {
     setAccountAddress(account);
  }, [account]);

  const setConnectModalOpen = (walletName: any) => {
    connect(walletName);
  };
  return (
    <>
      <AptosWarkade
        setConnectModalOpen={setConnectModalOpen}
        accountAddress={accountAddress}
      />
    </>
  );
}
```

import React, {useState} from "react";
import {loadStdlib} from '@reach-sh/stdlib';
// import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib'; //Uncomment to run on testNet #4/4


const reach = loadStdlib('ALGO');
// reach.setWalletFallback(reach.walletFallback({ //Uncomment to run on testNet #1/4
//   providerEnv: 'TestNet', MyAlgoConnect })); //Uncomment to run on testNet #2/4 Use('TestNet'/'MainNet')
const startingBalance = reach.parseCurrency(100); //Uncomment to run on devnet #1/2

export const MainAppContext = React.createContext();

export const MainAppProvider = ({children}) => {


  const [appView, setAppView] = useState("ConnectWallet");
  const [participant, setParticipant] = useState();
  const [accountBal, setAccountBal] = useState(0);
  const [account, setAccount] = useState();
  const [nftInfo, setNftInfo] = useState({});
  const [latestOutcome, setLatestOutcome] = useState({});
  const [latestBid, setLatestBid] = useState({});

  async function connectWallet() {
    setAppView("ConnectingWallet");
    // const acc = await reach.getDefaultAccount(); //Uncomment to run on testNet #3/4
    const acc = await reach.newTestAccount(startingBalance); //Uncomment to run on devnet #2/2
    const accAdd = reach.formatAddress(acc.getAddress());
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    if(acc){
      setAccount(acc);
      setAccountBal(bal)
      setAppView("ChooseRole");
    }else{
      setAccount(0);
      setAccountBal(0);
    }
    if (await reach.canFundFromFaucet()) {
      //Fund from faucet
    } else {
      //Skip faucet funding
    }
  }

  function deployCreator() {
    setParticipant("Creator");
  }

  function deployBidder() {
    setParticipant("Bidder")
  }

  return(
    <MainAppContext.Provider value={{connectWallet, appView, participant, deployBidder, deployCreator, accountBal, setAccountBal, account, nftInfo, setNftInfo, latestOutcome, setLatestOutcome, latestBid, setLatestBid}}>
      {children}
    </MainAppContext.Provider>
  )
}
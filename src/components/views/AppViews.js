import { useContext } from "react";
import { MainAppContext } from "../../context/MainAppContext";

const exports = {};

exports.ConnectWallet = ({ connectWallet }) => {

  return (
    <div>
      <button onClick={connectWallet}>
        Connect Wallet
      </button>
    </div>
  );
};

exports.ConnectingWallet = () => {
  return (
    <div> 
      Connecting Wallet. Please wait...
    </div>
  )
}

exports.ChooseRole = ({deployBidder, deployCreator}) => {
  return(
    <div>
      <div>Deploy as creator : <button onClick={deployCreator}>Creator</button></div>
      <div>Deploy as bidder : <button onClick={deployBidder}>Bidder</button></div>
    </div>
  )
}

const AppViews = ({view}) => {
  const { deployBidder, deployCreator, connectWallet } = useContext(MainAppContext);
  return exports[view]({ deployBidder, deployCreator, connectWallet });
}

export default AppViews;
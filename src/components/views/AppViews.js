import { useContext } from "react";
import { MainAppContext } from "../../context/MainAppContext";
import Home from './home/Home'
import heroimage from './home/img/collection6.png';

const exports = {};

exports.ConnectWallet = ({ connectWallet }) => {

  return (
    <div>
      {/* <button onClick={connectWallet}>
        Connect Wallet
      </button> */}
      <Home />
    </div>
  );
};

exports.ConnectingWallet = () => {
  return (
    <div>
      {/* Connecting Wallet. Please wait... */}
      <section id="home" class="spacetop15 spacebottom10">
        <div>
          <div className="container">
            <div className="grid md:grid-cols-2 mx-w-[1240px] m-auto">
              <div className="ta-center">
                `<p className="size3 bold">Connecting Wallet. Please wait...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

exports.ChooseRole = ({ deployBidder, deployCreator }) => {
  return (
    <div>
      {/* <div>Deploy as creator : <button onClick={deployCreator}>Creator</button></div> */}
      {/* <div>Deploy as bidder : <button onClick={deployBidder}>Bidder</button></div> */}
      <section id="home" class="spacetop15 spacebottom10">
        <div class="container">
          <div class="row jc-between ai-center col-reverse-s">
            <div class="col5 col6-md col12-s ta-center-s">
              <h1 class="size5 bold spacebottom1">
                Please Select User
              </h1>
              <p class="size2 spacebottom3 halfwhite">
                Select Below
              </p>

              <div class="row col8 col9-md jc-between spacebottom4 jc-evenly-s col12-s">
                <button class="btn bg-purple size2 white " onClick={deployCreator}>Creator</button>
                <button class="btn bg-white10 size2 white " onClick={deployBidder}>Bidder</button>
              </div>

              <div class="row jc-between">
                <div class="ta-center">
                  <p class="size3 bold">37k+</p>
                  <p class="size2 halfwhite">Artworks</p>
                </div>
                <div class="ta-center">
                  <p class="size3 bold">20k+</p>
                  <p class="size2 halfwhite">Artist</p>
                </div>
                <div class="ta-center">
                  <p class="size3 bold">99k+</p>
                  <p class="size2 halfwhite">Aucations</p>
                </div>
              </div>
            </div>
            <div class="col6 col12-s spacebottom3-s">
              <img src={heroimage} alt="heroimage" class="img-responsive float" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const AppViews = ({ view }) => {
  const { deployBidder, deployCreator, connectWallet } = useContext(MainAppContext);
  return exports[view]({ deployBidder, deployCreator, connectWallet });
}

export default AppViews;
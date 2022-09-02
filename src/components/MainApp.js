import React, {useContext} from "react";
import { BidderClass } from "./participants/Bidder";
import { CreatorClass } from "./participants/Creator";

import AppViews from './views/AppViews';
import { MainAppContext } from "../context/MainAppContext";

const MainApp = () => {
  const {participant, appView} = useContext(MainAppContext);

  const checkParticipant = () => {
    if (participant === 'Bidder'){
      return <BidderClass/>;
    } else if (participant === 'Creator'){
      return <CreatorClass/>;
    } else return false;
  }

  return(
    checkParticipant() === false ? <AppViews view={appView}></AppViews>: checkParticipant()
  );
}

export default MainApp;
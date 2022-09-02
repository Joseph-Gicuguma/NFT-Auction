import { useRef } from "react";
import { DeployingContract, FallBackView, IsAuctionOnSubViews, SeeOutCome } from "./ParticipantViews";

const AttachContract = ({attachContract}) => {

  const ctcInfoRef = useRef();

  const handleOnClickAttach = () => {
    attachContract(ctcInfoRef.current.value);
  }

  return (
    <div>
      <textarea name="contractInfo" ref={ctcInfoRef} id="contractInfo" cols="30" rows="10"></textarea>
      <button onClick={handleOnClickAttach}>Attach</button>
    </div>
  )
}

const BidderViews = ({
  appState,
  args,
  isAuctionOn,
  isOwner,
  attachContract,
  placeBid,
  setIsAuctionOn
}) => {
  switch (appState) {
    case "attachToContract" :
      return <AttachContract attachContract={attachContract}/>
    case "nftAuction" :
      return <IsAuctionOnSubViews isAuctionOn={isAuctionOn} isOwner={isOwner} placeBid={placeBid} setIsAuctionOn={setIsAuctionOn} nftUri={args[0]}/>
    case "seeOutcome" :
      return <SeeOutCome nftUri={args[0]} navigateToAuction={args[2]}/>
    case "deployingContract" :
      return <DeployingContract/>
    default : 
      return <FallBackView/>
  }
}

export default BidderViews;
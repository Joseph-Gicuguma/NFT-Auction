import { useContext, useRef } from "react"
import { MainAppContext } from "../../context/MainAppContext"
import { baseImageUrl } from "./ParticipantUtil"

export const IsAuctionOn = ({setIsAuctionOn, nftUri}) => {

  return (
    <div>
      <img src={`${baseImageUrl}${nftUri}`} alt="NFT" style={{height: 100}}/>
      Click here to begin auction
      <button onClick={setIsAuctionOn}>Start</button>
    </div>
  )  
}

export const ShowBid = ({nftUri}) => {
  const {latestBid} = useContext(MainAppContext);

  const content = (!latestBid.who || !latestBid.bid) ? "Waiting for first bidder" : `A bid of ${latestBid.bid} Algo has been placed by ${latestBid.who}`

  return (
    <div>
      <img src={`${baseImageUrl}${nftUri}`} alt="NFT" style={{height: 100}}/>
      {content}
    </div>
  )
}

export const GetBid = ({placeBid, nftUri}) => {
  const bidInputRef = useRef();

  const handleOnClickBid = () => {
    placeBid(bidInputRef.current.value);
  }

  return (
    <div>
      <ShowBid nftUri={nftUri}/>
      <label htmlFor="bid">Enter Bidding Amount</label>
      <input type="number" name="bid amount" placeholder="Bid" id="bid" ref={bidInputRef}/>
      <button onClick={handleOnClickBid}>Bid</button>
    </div>
  )
}

export const SeeOutCome = ({navigateToAuction, nftUri}) => {
  const {latestOutcome} = useContext(MainAppContext);
  return (
    <div>
      <img src={`${baseImageUrl}${nftUri}`} alt="NFT" style={{height: 100}}/>
      Address {latestOutcome.who} won the auction paying {latestOutcome.bid} ALGO
      <br />
      <button onClick={navigateToAuction}>Go to Auction</button>
    </div>
  )
}

export const DeployingContract = () => {
  return (
     <div>
      Deploying Contract
     </div>
  )
}

export const FallBackView = () => {
  return (
    <div>
      Oops. Looks like something went wrong.
    </div>
  )
}

export const AwaitingAuction = ({nftUri}) => {
  return (
    <div>
      <img src={`${baseImageUrl}${nftUri}`} alt="NFT" style={{height: 100}}/>
      Waiting for auction to be started
    </div>
  )
}

export const IsAuctionOnSubViews = ({isAuctionOn, isOwner, placeBid, setIsAuctionOn, nftUri}) => {
  if(isAuctionOn && isOwner) {
    return <ShowBid nftUri={nftUri}/>
  }else if (isAuctionOn && !isOwner) {
    return (
      <GetBid placeBid={placeBid} nftUri={nftUri}/>
    )
  }else if(!isAuctionOn && isOwner){
    return <IsAuctionOn setIsAuctionOn={setIsAuctionOn} nftUri={nftUri}/>
  }else if(!isAuctionOn && !isOwner) {
    return <AwaitingAuction nftUri={nftUri}/>
  }
  return <FallBackView/> 
}

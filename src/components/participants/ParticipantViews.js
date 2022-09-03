import { useContext, useRef } from "react"
import { MainAppContext } from "../../context/MainAppContext"
import { baseImageUrl } from "./ParticipantUtil"

export const IsAuctionOn = ({ setIsAuctionOn, nftUri }) => {

  return (
    <div>
      <section className="spacetop15 spacebottom10">
        <img src={`${baseImageUrl}${nftUri}`} alt="NFT" style={{ height: 100 }} />
        <br />
        Click here to begin auction
        <button className="spacetop2 btn bg-halfwhite size2 started" onClick={setIsAuctionOn}>Start</button>
      </section>
    </div>
  )
}

export const ShowBid = ({ nftUri }) => {
  const { latestBid } = useContext(MainAppContext);

  const content = (!latestBid.who || !latestBid.bid) ? "Waiting for first bidder" : `A bid of ${latestBid.bid} Algo has been placed by ${latestBid.who}`

  return (
    <div>
      <section className="spacetop15 spacebottom10">
        <img src={`${baseImageUrl}${nftUri}`} alt="NFT" style={{ height: 100 }} />
        <br />
        <div className="size2 ">
          {content}
        </div>
      </section>
    </div>
  )
}

export const GetBid = ({ placeBid, nftUri }) => {
  const bidInputRef = useRef();

  const handleOnClickBid = () => {
    placeBid(bidInputRef.current.value);
  }

  return (
    <div>
      <section className="spacetop15 spacebottom10">
        <ShowBid nftUri={nftUri} />
        <label className="size2" htmlFor="bid">Enter Bidding Amount</label>
        <br />
        <input className="size2 spacetop1" type="number" name="bid amount" placeholder="Bid" id="bid" ref={bidInputRef} />
        <br />
        <button className="spacetop2 btn bg-halfwhite size2 started" onClick={handleOnClickBid}>Bid</button>
      </section>
    </div>
  )
}

export const SeeOutCome = ({ navigateToAuction, nftUri }) => {
  const { latestOutcome } = useContext(MainAppContext);
  return (
    <div>
      <section className="spacetop15 spacebottom10">
        <img src={`${baseImageUrl}${nftUri}`} alt="NFT" style={{ height: 100 }} />
        <br />
        <div className="spacetop2 size2">
          <b>ADDRESS:</b> {latestOutcome.who} won the auction paying {latestOutcome.bid} <b>ALGO</b>
        </div>
        <br />
        <button className="spacetop2 btn bg-halfwhite size2 started" onClick={navigateToAuction}>Go to Auction</button>
      </section>
    </div>
  )
}

export const DeployingContract = () => {
  return (
    <div>
      <section className="spacetop15 spacebottom10">
        Deploying Contract
      </section>
    </div>
  )
}

export const FallBackView = () => {
  return (
    <div>
      <section className="spacetop15 spacebottom10">
        Oops. Looks like something went wrong.
      </section>
    </div>
  )
}

export const AwaitingAuction = ({ nftUri }) => {
  return (
    <div>
      <section className="spacetop15 spacebottom10">
        <img src={`${baseImageUrl}${nftUri}`} alt="NFT" style={{ height: 100 }} />
        Waiting for auction to be started
      </section>
    </div>
  )
}

export const IsAuctionOnSubViews = ({ isAuctionOn, isOwner, placeBid, setIsAuctionOn, nftUri }) => {
  if (isAuctionOn && isOwner) {
    return <ShowBid nftUri={nftUri} />
  } else if (isAuctionOn && !isOwner) {
    return (
      <GetBid placeBid={placeBid} nftUri={nftUri} />
    )
  } else if (!isAuctionOn && isOwner) {
    return <IsAuctionOn setIsAuctionOn={setIsAuctionOn} nftUri={nftUri} />
  } else if (!isAuctionOn && !isOwner) {
    return <AwaitingAuction nftUri={nftUri} />
  }
  return <FallBackView />
}

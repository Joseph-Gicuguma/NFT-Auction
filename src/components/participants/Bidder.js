import { loadStdlib } from "@reach-sh/stdlib";
import * as Backend from '../../build/index.main.mjs';
import { Component } from "react";
import BidderViews from "./BidderViews";
import { MainAppContext } from "../../context/MainAppContext.js";
import { setUpObservables } from "./ParticipantUtil";
import { ParticipantClass } from "./Participant.js";

const Reach = loadStdlib('ALGO');

export class BidderClass extends ParticipantClass {
  static contextType = MainAppContext;

  constructor(props){
    super(props)

    this.state = {
      appState: "attachToContract",
      isOwner: false,
    }

    this.attachContract = this.attachContract.bind(this);
  }

  async attachContract (contractInfo) {
    this.setState({
      appState: "deployingContract",
    })
    const {account, nftUri} = this.context;
    const contract = account.contract(Backend, JSON.parse(contractInfo));
    this.contract = contract;
    account.contract(Backend, this);
    const owner = await contract.unsafeViews.Info.owner();
    this.nftInfo =  await contract.unsafeViews.Info.details();

    this.setUpObservables();
    
    this.setState({
      appState: "nftAuction",
      args: [],
      isOwner : owner == account
    })
  }

  render() {
    return(
      <BidderViews
        appState={this.state.appState}
        args={this.state.args}
        isAuctionOn={this.state.isAuctionOn}
        isOwner={this.state.isOwner}
        attachContract={this.attachContract}
        placeBid={this.placeBid}
        setIsAuctionOn={this.setIsAuctionOn}
        navigateToAuction={this.navigateToAuction}
      />
    )
  }
  
}
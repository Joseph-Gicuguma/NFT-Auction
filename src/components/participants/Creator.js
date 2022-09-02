import { loadStdlib } from "@reach-sh/stdlib";
import * as Backend from "../../build/index.main.mjs";

import { Component } from "react";
import { MainAppContext } from "../../context/MainAppContext";
import CreatorViews from "./CreatorViews";
import { setUpObservables, setIsAuctionOn } from "./ParticipantUtil.js";
import { ParticipantClass } from "./Participant.js";

export class CreatorClass extends ParticipantClass {
  
  constructor(props) {
    super(props);
    this.getId = 0
    this.state = {
      appState: "createNFT",
      isOwner: true,
      outCome : null,
      bid : null
    }

    this.deployContract = this.deployContract.bind(this);
  }
  
  async createNFT () {
    return this.nftInfo
  }

  async deployContract (nftInfo , nftId) {
    this.nftInfo = nftInfo
    this.getId = nftId
    this.deadline = 4

    this.setState({
      appState: "deployingContract",
    })

    const {account, setNftInfo} = this.context
    setNftInfo(nftInfo);
    const contract = account.contract(Backend);
    contract.participants.Creator(this)
    const contractInfo = JSON.stringify(await contract.getInfo(), null, 2);
    this.contract = contract;
    this.contractInfo = contractInfo
    this.setState({
      appState: "showContractInfo",
      args: [ , this.contractInfo, this.navigateToAuction, this.nftInfo.uri]
    })
    this.setUpObservables();
  }

  render() {
    return (
      <CreatorViews
        appState={this.state.appState}
        args={this.state.args}
        deployContract={this.deployContract}
        isAuctionOn = {this.state.isAuctionOn}
        isOwner={this.state.isOwner}
        placeBid={this.placeBid}
        setIsAuctionOn={this.setIsAuctionOn}
      />
    )
  }

}
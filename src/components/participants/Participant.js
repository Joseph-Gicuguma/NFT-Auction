import { loadStdlib } from "@reach-sh/stdlib";
import { Component } from "react";
import { MainAppContext } from "../../context/MainAppContext";
import { fmt } from "./ParticipantUtil";

const Reach = loadStdlib('ALGO');

export class ParticipantClass extends Component {
  static contextType = MainAppContext;

  constructor(props) {
    super(props)
    this.contract = null
    this.nftInfo = {}
    this.contractInfo = ""

    this.state = {
      appState: "",
      args: [],
      isAuctionOn : false,
      isOwner: null,
    }

    this.placeBid = this.placeBid.bind(this);
    this.setIsAuctionOn = this.setIsAuctionOn.bind(this);
    this.navigateToAuction = this.navigateToAuction.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(async () => await this.updateBalance(), 5000);        
  }

  async updateBalance() {        
    const {account, setAccountBal} = this.context;
    const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
    setAccountBal(balance);
  }

  navigateToAuction() {
    this.setState({
      appState: 'nftAuction',
      args: [this.nftInfo.uri]
    })
  }


  setUpObservables () {
    const {account, setLatestOutcome, setLatestBid} = this.context;
    this.contract.e.isAuctionOn.monitor((event) => {
      const {when, what : [auctionOn]} = event
      console.log(`Auction on is ${auctionOn}`)
      this.setState({
        isAuctionOn : auctionOn,
        args : [this.nftInfo.uri, this.contractInfo, this.navigateToAuction, this.nftInfo.uri]
      })
    });
  
    this.contract.e.showBid.monitor((event) => {
      const {when, what : [_who, _bid]} = event
      const who = Reach.formatAddress(_who);
      const bid = fmt(_bid);
      console.log(`You see ${who} places a bid of ${bid}`)
      setLatestBid({
        who,
        bid
      })
    })
  
    this.contract.e.seeOutcome.monitor((event) => {
      const {when, what : [_who, _bid]} = event
      const who = Reach.formatAddress(_who);
      const bid = fmt(_bid);
      console.log(`You see ${who} bought the nft at a price of ${bid}`)
      setLatestOutcome({
        who,
        bid
      })
      setLatestBid({});
      this.setState({
        appState: "seeOutcome",
        isOwner : account.networkAccount.addr == who,
        // isOwner : account.getAddress() == _who,
        args : [this.nftInfo.uri, , this.navigateToAuction]
      })
    })
  }

  async setIsAuctionOn () {
    await this.contract.a.Owner.isAuctionOn(true);
  }

  async placeBid (bid) {
    await this.contract.a.Bidder.getBid(Reach.parseCurrency(bid));
  }
}
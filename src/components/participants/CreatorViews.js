import { loadStdlib } from "@reach-sh/stdlib";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";
import { useRef } from "react";
import { DeployingContract, FallBackView, IsAuctionOn, IsAuctionOnSubViews, SeeOutCome } from "./ParticipantViews";
import { baseImageUrl } from "./ParticipantUtil";
import { useState } from "react";


const Reach = loadStdlib("ALGO");

const CreateNFT = ({ deployContract }) => {
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const nftRef = useRef();
  const [isLoading, setIsLoading] = useState();

  const handleOnClickCreate = async () => {

    setIsLoading(true);
    const file = nftRef.current.files[0];
    const nftName = nameRef.current.value;
    const data = new FormData();
    data.append('file', file);
    data.append('pinataOptions', '{"cidVersion": 1}');
    data.append('pinataMetadata', '{"name": "' + nftName + '", "keyvalues": {"company": "Pinata"}}');

    const config = {
      method: 'post',
      url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_JWT}`,
        // ...data.getHeaders()
      },
      data: data
    };

    // const res = await axios(config);
    // const uri = res.data.IpfsHash;

    deployContract(
      {
        basePrice: Reach.parseCurrency(priceRef.current.value && 10),
        uri: "QmPnf6ph5Ft1UandaX9axeE76tkzihHcHRM8XMVa9LDHKo",
        // uri,
      },
      idRef.current.value && 100
    );
  };

  return (
    <div>
      <section class="spacetop15 spacebottom10">
        <h1 className="size3 halfwhite">Welcome to the creator side</h1>
        <div className="spacetop2">
          <form >
            <div >
              <div className="">
                <div className="">
                  <label className="size2" htmlFor="id">Nft Id</label>
                  <br/>
                  <input className="size2" type="number" name="id" id="id" placeholder="Nft Id" ref={idRef} />
                </div>

                <div className="spacetop1">
                  <label className="size2" htmlFor="name">Nft Name</label>
                  <br/>
                  <input
                    className="size2"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nft Name"
                    ref={nameRef}
                  />
                </div>
              </div>

              <div className="spacetop1">
                <label className="size2" htmlFor="price">Nft Price</label>
                <br/>
                <input
                  className="size2 "
                  type="number"
                  name="price"
                  id="price"
                  placeholder="0 ALGO"
                  ref={priceRef}
                />
              </div>

              <div className="spacetop1">
                <label className="size2" htmlFor="nft">Upload Nft</label>
                <br/>
                <input className="size2" type="file" name="nft" id="nft" ref={nftRef} />
              </div>

              <div className="spacetop1">
                <button class="btn bg-halfwhite size2 started" onClick={handleOnClickCreate} disabled={isLoading}>
                  {!isLoading ? 'Create' : 'Uploading...'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

const ShowContractInfo = ({ contractInfo, navigateToAuction, nftUri }) => {
  const [copied, setCopied] = useState();
  const handleCopy = () => {
    setCopied(true);
  };
  return (
    <div>
     <section class="spacetop15 spacebottom10">
     <img src={`${baseImageUrl}${nftUri}`} alt="NFT" style={{ height: 100 }} />
      <pre className="size2">{contractInfo}</pre>
      <CopyToClipboard onCopy={handleCopy} text={contractInfo}>
        <button className="spacetop2 btn bg-halfwhite size2 started">
          {copied ? "Copied" : "Copy to clipboard"}
        </button>
      </CopyToClipboard><br />
      <button className="spacetop2 btn bg-halfwhite size2 started" onClick={navigateToAuction}>Go to Auction</button>
     </section>
    </div>
  );
};

const CreatorViews = ({
  appState,
  args,
  deployContract,
  isAuctionOn,
  isOwner,
  placeBid,
  setIsAuctionOn,
}) => {
  switch (appState) {
    case "createNFT":
      return <CreateNFT deployContract={deployContract} />;
    case "deployingContract":
      return <DeployingContract />;
    case "showContractInfo":
      return <ShowContractInfo contractInfo={args[1]} navigateToAuction={args[2]} nftUri={args[3]} />;
    case "nftAuction":
      return <IsAuctionOnSubViews isAuctionOn={isAuctionOn} isOwner={isOwner} setIsAuctionOn={setIsAuctionOn} placeBid={placeBid} nftUri={args[0]} />
    case "seeOutcome":
      return <SeeOutCome nftUri={args[0]} navigateToAuction={args[2]} />
    default:
      return <FallBackView />
  }
};

export default CreatorViews;

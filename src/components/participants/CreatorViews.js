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
    data.append('pinataMetadata', '{"name": "'+nftName+'", "keyvalues": {"company": "Pinata"}}');

    const config = {
      method: 'post',
      url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
      headers: { 
        'Authorization': `Bearer ${process.env.REACT_APP_JWT}`, 
        // ...data.getHeaders()
      },
      data : data
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
      <label htmlFor="id">Nft Id</label>
      <input type="number" name="id" id="id" placeholder="Nft Id" ref={idRef} />
      <br />
      <label htmlFor="name">Nft Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Nft Name"
        ref={nameRef}
      />
      <br />
      <label htmlFor="price">Nft Price</label>
      <input
        type="number"
        name="price"
        id="price"
        placeholder="0 ALGO"
        ref={priceRef}
      />
      <br />
      <label htmlFor="nft">Upload Nft</label>
      <input type="file" name="nft" id="nft" ref={nftRef}/>
      <br />
      <button onClick={handleOnClickCreate} disabled={isLoading}>
        {!isLoading ? 'Create' : 'Uploading...'}
      </button>
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
      <img src={`${baseImageUrl}${nftUri}`} alt="NFT" style={{height: 100}}/>
      <pre>{contractInfo}</pre>
      <CopyToClipboard onCopy={handleCopy} text={contractInfo}>
        <button>
          {copied ? "Copied" : "Copy to clipboard"}
        </button>
      </CopyToClipboard><br />
      <button onClick={navigateToAuction}>Go to Auction</button>
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
      return <ShowContractInfo contractInfo={args[1]} navigateToAuction={args[2]} nftUri={args[3]}/>;
    case "nftAuction" :
      return <IsAuctionOnSubViews isAuctionOn={isAuctionOn} isOwner={isOwner} setIsAuctionOn={setIsAuctionOn} placeBid={placeBid} nftUri={args[0]}/>
    case "seeOutcome" :
      return <SeeOutCome nftUri={args[0]} navigateToAuction={args[2]}/>
    default:
      return <FallBackView/>
  }
};

export default CreatorViews;

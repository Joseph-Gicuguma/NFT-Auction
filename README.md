# NFT Auction

## Getting Started

## Tutorial

**Below are the steps to help the reader re-create the same application application. We assume that you already know the basics of reach. If not checkout the [Rock Paper Scissors Tutorial](https://docs.reach.sh/tut/rps/#tut)**

> By the end of this tutorial you will be able to create a D-App where one user can create an nft, and have other users bid for it. The highest bidder will gain ownership of the NFT and be able to resell it again; in a buy sell cycle.

### Test First But Verify
Rather than jumping into the Reach program, we're first going to write a test scenario corresponding to the bidding process. We'll demonstrate how to use Reach's testing tools to write a convenient testing framework customized for your application. We'll show the tests, then the framework, then the Reach code, and show how the Reach code connects to the framework.

After setting up  your project with `./reach init`. Clear **index.mjs** and **index.rsh**

**In index.mjs,**

https://github.com/RyanKoech/NFT-Auction/blob/d77732ef39ff30498ba42e7e43dc6a9fa5ab2da5/src/index.mjs#L103-L112

In this sample, we use `test.one` to define a single test scenario. We use the function makeNft, which we will define later, to create a JavaScript object for the NFT abstraction. When it is created, it has the details of the event in it.

https://github.com/RyanKoech/NFT-Auction/blob/d77732ef39ff30498ba42e7e43dc6a9fa5ab2da5/src/index.mjs#L114-L118

Next, we define objects for each of the people involved in the scenario. This code uses NFT.makeBidders, a function which we will define later, to turn a list of labels into Bidder abstractions.

https://github.com/RyanKoech/NFT-Auction/blob/9f74443a9ea71fb01dc54712b1cf6b0f3e675779/src/index.mjs#L120-L146

From then on we perform the bidding cycle. `test.chkErr` Is to confirm various checks that might through error as will be seen in the reach code. `await NFT.waitUntilDeadline();` will be used to make sure the bidding sesssion terminates.


# NFT Auction

## Getting Started

## Tutorial

**Below are the steps to help the reader re-create the same application application. We assume that you already know the basics of reach. If not checkout the [Rock Paper Scissors Tutorial](https://docs.reach.sh/tut/rps/#tut)**

> By the end of this tutorial you will be able to create a D-App where one user can create an nft, and have other users bid for it. The highest bidder will gain ownership of the NFT and be able to resell it again; in a buy sell cycle.

### Test First But Verify
Rather than jumping into the Reach program, we're first going to write a test scenario corresponding to the bidding process. We'll demonstrate how to use Reach's testing tools to write a convenient testing framework customized for your application. We'll show the tests, then the framework, then the Reach code, and show how the Reach code connects to the framework.

After setting up  your project with `./reach init`. Clear **index.mjs** and **index.rsh**

**In index.mjs,**

https://github.com/Joseph-Gicuguma / NFT-Auction/blob/d77732ef39ff30498ba42e7e43dc6a9fa5ab2da5/src/index.mjs#L103-L112

In this sample, we use `test.one` to define a single test scenario. We use the function makeNft, which we will define later, to create a JavaScript object for the NFT abstraction. When it is created, it has the details of the event in it.

https://github.com/Joseph-Gicuguma / NFT-Auction/blob/d77732ef39ff30498ba42e7e43dc6a9fa5ab2da5/src/index.mjs#L114-L118

Next, we define objects for each of the people involved in the scenario. This code uses NFT.makeBidders, a function which we will define later, to turn a list of labels into Bidder abstractions.

https://github.com/Joseph-Gicuguma / NFT-Auction/blob/9f74443a9ea71fb01dc54712b1cf6b0f3e675779/src/index.mjs#L120-L146

From then on we perform the bidding cycle. `test.chkErr` Is to confirm various checks that might through error as will be seen in the reach code. `await NFT.waitUntilDeadline();` will be used to make sure the bidding sesssion terminates.

https://github.com/Joseph-Gicuguma / NFT-Auction/blob/9f74443a9ea71fb01dc54712b1cf6b0f3e675779/src/index.mjs#L148-L154

Finally, we print out the balances of everyone and see that they match our expectations. The function `test.run` instructs Reach to run all of the tests and not print out extra debugging information.

### Framework Implementation

The framework is needed to facilitate the testing. It needs to provide:

- `makeNft` => A function which accepts the details of an nft and returns an NFT abstraction.
- `NFT.Creator` =>  An abstraction of the Host.
- `NFT.makeBidders` => A function that produces an array of Bidder abstractions, which are subclasses of Person abstractions.
- `NFT.waitUntilDeadline()` => A function that waits until the deadline has passed.
- `Person.startAuction()` => A function for a person to start an auction
- `Bidder.placeBid()` => A function for one bidder to place a bid
- `Person.getBalance` => A function to read one person's balance.

https://github.com/Joseph-Gicuguma / NFT-Auction/blob/9f74443a9ea71fb01dc54712b1cf6b0f3e675779/src/index.mjs#L1-L5

First, we have the basic header that imports and initializes the Reach standard library.

https://github.com/Joseph-Gicuguma / NFT-Auction/blob/9f74443a9ea71fb01dc54712b1cf6b0f3e675779/src/index.mjs#L7-L11

We define the makeRSVP function and create an initial test account for the host and set its label for debugging.

https://github.com/Joseph-Gicuguma / NFT-Auction/blob/9f74443a9ea71fb01dc54712b1cf6b0f3e675779/src/index.mjs#L13-L29

Next, we define the function `stdPerson` which takes an obj with an acc field and adds a Person.getBalance function that returns the account's current balance as a nice formatted string. We use this function to define the `NFT.Creator` value

https://github.com/Joseph-Gicuguma / NFT-Auction/blob/9f74443a9ea71fb01dc54712b1cf6b0f3e675779/src/index.mjs#L29-L35

Next, we define the deadline, based on the current time, and the `NFT.waitUntilDeadline` function for waiting until that time has passed.

https://github.com/Joseph-Gicuguma / NFT-Auction/blob/9f74443a9ea71fb01dc54712b1cf6b0f3e675779/src/index.mjs#L37-L66

Now, we can define the details object that will be consumed by Reach then pass the object interact object for the creator contract. There after we have the creator observe event so that we can be notified on various actions.

https://github.com/Joseph-Gicuguma / NFT-Auction/blob/9f74443a9ea71fb01dc54712b1cf6b0f3e675779/src/index.mjs#L68-L83

Next, we define the `NFT.makeBidder` function, which starts by creating a new test account and setting its label. There after we define the bidder functions. 

https://github.com/Joseph-Gicuguma / NFT-Auction/blob/9f74443a9ea71fb01dc54712b1cf6b0f3e675779/src/index.mjs#L84-L99

We close the definition of the Bidder abstraction by calling `stdPerson` to add the `Person.getBalance` function. Then, we define `NFT.makeBidders`, which produces a single promise out of the array of promises of Bidder abstractions. Also we define `Creator.startAuction`. These values are all wrapped together into a final object, which is the result of `makeNFT`.


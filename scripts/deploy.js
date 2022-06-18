// open main asynchronous function will handle deployment
const main = async () => {
  try {

// use hre object that allows us to pass the name of our contract to getContractFactory
    const nftContractFactory = await hre.ethers.getContractFactory(
      "MusicAlbumCoverNFT"
    );

// create variable to allow us to use the deploy function of getContractFactory
    const nftContract = await nftContractFactory.deploy();

// await deployment of contract
    await nftContract.deployed();

// log the address of the Contract in our console
    console.log("Contract deployed to:", nftContract.address);
    process.exit(0);

// catch error, if any, and log in console
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

main();

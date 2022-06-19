# MusicAlbumCoverNFT NFT Project

Building an NFT project that allows artists to mint their album covers as every new album release has a unique Album cover that might be plain photo or could bear the title, songs on the album, names of artists features, producers and mix engineers who worked on the project among other details. ❤️

## Built With

- Solidity
- Open Zeppelin's ERC721, and ERC721URI classes
- Polygon Mumbai
- IPFS & [Web3.Storage](https://web3.storage/account/)(uploading image & JSON file)

## Live Demo

### Deployed & Verified Contract

- [Polygon Scan](https://mumbai.polygonscan.com/address/0x0dBD8725f6Ccd620B68FC7Ff48dE10e9D14CEA03)
![screenshot](./Screenshot%20(43).png)

### To interact with Contract via SafeMint

- Enter your Address like:
  `0x34d9297629323795CE29190159206cDD81e6B2d2`
- Enter media like: `https://ipfs.io/ipfs/bafybeie7durvevhi2endcfuy4osmhwfnuv23wsd6yk53sjg6vlkz2a5eay/metadata.json`
![screenshot](./Screenshot%20(44).png)

### NFT on OpenSea Testnet

[OpenSea Testnet](https://testnets.opensea.io/account?tab=collected)

![screenshot](./Screenshot%20(42).png)

## Getting Started

To get a local copy up and running follow these simple example steps.

```
$ Fork the repository
$ Git clone https://github.com/your-username/MusicAlbumCoverNFT
$ git checkout -b branch name
$ git remote add upstream https://github.com/jebitok-dev/MusicAlbumCoverNFT
$ git pull upstream master
$ git commit -m "commit message"
$ git push -u origin HEAD
```

To write, compile, deploy and verify contract locally

```
$ npx hardhat compile
$ npx hardhat run scripts/deploy.js --network mumbai
$ npx hardhat verify --network mumbai YOUR_SMARTCONTRACT_ADDRESS

```

Configuring Web3.Storage

- upload media/json file to the web3.storage dashboard
- create the ``metadata.json`` file configure according to [OpenSea Metadata](https://docs.opensea.io/docs/metadata-standards)
- copy CID of image and add to JSON file ``https://dweb.link/ipfs/YOUR_CID``

<!-- https://ipfs.io/ipfs/CID/file_name -->

## Author

👤 **Author**

- GitHub: [@Jebitok-dev](https://github.com/Jebitok-dev)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgment

I hereby acknowledge the [Encode Club](https://medium.com/encode-club) and [Polygon](https://polygon.technology/) in collaboration with [Covalent API](https://www.covalenthq.com/) for organizing this hackathon.

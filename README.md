# FundMe Dapp

The FundMe Solidity project is a decentralized fundraising platform built using the Solidity programming language and Chainlink, an oracle network that provides real-world data to smart contracts. This project enables users to create fundraising campaigns and contribute to them using cryptocurrencies.

## Contracts

### [FundMe.sol](https://github.com/sauravchamoli17/FundMe-Dapp/blob/main/contracts/FundMe.sol)

This contract is the main contract for creating and managing fundraising campaigns. It includes functions for funding campaigns and retrieving campaign details.

#### Functions

- `fund()`: Allows users to fund a campaign by sending ETH. The function checks if the amount of ETH sent meets the minimum required USD value based on the current ETH to USD conversion rate retrieved from the Chainlink Price Feed.

- `getVersion()`: Retrieves the version of the Chainlink Price Feed used for ETH to USD conversion.

- `withdraw()`: Allows the contract owner to withdraw the funds contributed to the campaigns. It resets the contribution amounts and the list of funders.

#### Modifiers

- `onlyOwner`: A modifier that restricts access to the function to the contract owner.

### [PriceConverter.sol](https://github.com/sauravchamoli17/FundMe-Dapp/blob/main/contracts/PriceConverter.sol)

This library provides functions for converting ETH amounts to USD based on the current ETH to USD conversion rate retrieved from the Chainlink Price Feed.

#### Functions

- `getPrice()`: Retrieves the latest ETH to USD conversion rate from the Chainlink Price Feed.

- `getConversionRate(uint256 ethAmount)`: Converts an ETH amount to its equivalent value in USD based on the current ETH to USD conversion rate.

## Usage

To use the FundMe Solidity project, follow these steps:

1. Deploy the `FundMe` contract using a Solidity development framework such as Hardhat.

2. Interact with the deployed contract by calling the available functions:
   - Call the `fund()` function to contribute ETH to a campaign.
   - Call the `getVersion()` function to retrieve the Chainlink Price Feed version.
   - Call the `withdraw()` function (only accessible by the contract owner) to withdraw the contributed funds.

## Deployment

The FundMe contract has been deployed at the following Ethereum address:
[0xfad7a0CFa5652Bc4167DA1f50fEbed4fbBfbf85D](https://sepolia.etherscan.io/address/0xfad7a0CFa5652Bc4167DA1f50fEbed4fbBfbf85D#readContract)

## Contributing

If you want to contribute to the FundMe Solidity project, you can follow these steps:

1. Fork the project repository on GitHub.

2. Clone your forked repository to your local machine.

3. Create a new branch to work on your changes.

4. Make the necessary changes and additions.

5. Test your changes using a Solidity development framework like Hardhat and ensure all tests pass.

6. Commit and push your changes to your fork.

7. Submit a pull request to the original project repository.

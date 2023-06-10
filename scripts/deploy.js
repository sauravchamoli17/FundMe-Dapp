const hre = require("hardhat");

async function main() {
   const FundMe = await hre.ethers.getContractFactory("FundMe");
   const fundMe = await FundMe.deploy();
   console.log("Fund ME deployed at:", fundMe.address);
}

main().catch((error) => {
   console.error(error);
   process.exitCode = 1;
});

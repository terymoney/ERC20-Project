// scripts/deploy.js

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    // Get the contract factory for BlackGirlCoin
    const BlackGirlCoin = await ethers.getContractFactory("BlackGirlCoin");
  
    // Deploy the contract
    const blackGirlCoin = await BlackGirlCoin.deploy();
  
    console.log("BlackGirlCoin deployed to:", blackGirlCoin.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

    //0x0c59528e946f7e0dBa130d08bA75Ab5f6dE5b7D4
  
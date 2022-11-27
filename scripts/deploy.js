const main = async () => {
	const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
	const gameContract = await gameContractFactory.deploy(
	  	["Tanjiro", "Zinetsu", "Inosuke"],       // Names
	  	["https://wallpaperaccess.com/full/5112370.jpg", // Images
	  	"https://wallpaperaccess.com/full/5010952.jpg", 
	  	"https://www.cheatsheet.com/wp-content/uploads/2022/01/Inosuke-Hashibara.jpg?w=1200&h=675"],
	  	[600, 300, 500],                    // HP values
	  	[1000, 500, 650]                       // Attack damage values
	);
	await gameContract.deployed();
	console.log("Contract deployed to:", gameContract.address);

	let txn;
	txn = await gameContract.mintCharacterNFT(0);
	await txn.wait();
	console.log("Minted NFT #1");

	txn = await gameContract.mintCharacterNFT(1);
	await txn.wait();
	console.log("Minted NFT #2");

	txn = await gameContract.mintCharacterNFT(2);
	await txn.wait();
	console.log("Minted NFT #3");

	txn = await gameContract.mintCharacterNFT(1);
	await txn.wait();
	console.log("Minted NFT #4");

	console.log("Done deploying and minting!");
};
      
const runMain = async () => {
	try {
	  	await main();
	  	process.exit(0);
	} catch (error) {
	  	console.log(error);
	  	process.exit(1);
	}
};
      
runMain();
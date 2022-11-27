const main = async () => {
	const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
	const gameContract = await gameContractFactory.deploy(
	  	["Tanjiro", "Zinetsu", "Inosuke"],       		// Names
	  	["https://wallpaperaccess.com/full/5112370.jpg", 	// Images
	  	"https://c4.wallpaperflare.com/wallpaper/142/568/55/anime-demon-slayer-kimetsu-no-yaiba-zenitsu-agatsuma-hd-wallpaper-preview.jpg", 
	  	"https://www.cheatsheet.com/wp-content/uploads/2022/01/Inosuke-Hashibara.jpg?w=1200&h=675"],
	  	[600, 300, 500],                    			// HP values
	  	[1000, 500, 650],					// Attack damage values
		"Muzan", 	// Demon King Name
		"https://c4.wallpaperflare.com/wallpaper/516/360/56/anime-demon-slayer-kimetsu-no-yaiba-muzan-kibutsuji-hd-wallpaper-thumb.jpg", // Demon King Image
		10000, 		// Demon King Hp
		50              // Demon King attack values         
	);
	await gameContract.deployed();
	console.log("Contract deployed to:", gameContract.address);
	
	// Below code is for testing purposes only.

	// let txn;
	// // We only have three characters.
	// // an NFT w/ the character at index 2 of our array.
	// txn = await gameContract.mintCharacterNFT(2);
	// await txn.wait();
	// txn = await gameContract.attackDemonKing();
	// await txn.wait();
	// txn = await gameContract.attackDemonKing();
	// await txn.wait();

	// // Get the value of the NFT's URI.
	// let returnedTokenUri = await gameContract.tokenURI(1);
	// console.log("Token URI:", returnedTokenUri);
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
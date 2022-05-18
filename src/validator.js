import * as Web3 from './Web3';
import { OpenSeaPort, Network } from 'opensea-js'

export function validate(accountAddress, tokenAddress){

    const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')
    const seaport = new OpenSeaPort(provider, {
    networkName: Network.Main,
    apiKey: "133127151cad4ec9bca5fafad27e50b3"
    })
/*
    const balanceOfWETH = await seaport.getTokenBalance({
        accountAddress, // string
        tokenAddress: tokenAddress
    })
*/
    return null;

    //OpenSeaPort.getTokenBalance(accountAddress, tokenAddress, schemaName);

}


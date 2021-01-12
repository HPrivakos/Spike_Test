import { getProvider } from "@decentraland/web3-provider";
import * as eth from "eth-connect";
import abi from "./abi";
import { ERC1151 } from "./erc1151";


/**
 * Return Contract, Provider and RequestManager
 *
 * @param contractAddress Smartcontract ETH address
 */
export async function getContract(contractAddress: eth.Address) {
  const provider = await getProvider()
  const requestManager = new eth.RequestManager(provider)
  const factory = new eth.ContractFactory(requestManager, abi)
  const contract = (await factory.at(contractAddress)) as ERC1151
  return { contract, provider, requestManager }
}


/**
 * Check the balance of an user
 *
 * @param contractAddress Address of the token smartcontract
 * @param address Address you are checking
 */
export async function hasToken(contractAddress: eth.Address, address: eth.Address, token: string) {
  const { contract } = await getContract(contractAddress)

  const res = await contract.balanceOf(address, token)
  log(res)
  return +res > 0;
}

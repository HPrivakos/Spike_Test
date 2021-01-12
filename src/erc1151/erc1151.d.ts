import { TransactionObject, BlockType } from "./types";
import * as eth from "eth-connect";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export class ERC1151 extends eth.Contract {
  constructor(jsonInterface: any[], address?: string, options?: any);
  clone(): ERC1151;
  addSigner(account: string): TransactionObject<void>;

  balanceOf(_owner: string, _id: number | string): TransactionObject<string>;

  balanceOfBatch(
    _owners: string[],
    _ids: (number | string)[]
  ): TransactionObject<string[]>;

  burn(
    _owner: string,
    _id: number | string,
    _value: number | string
  ): TransactionObject<void>;

  contractURI(): TransactionObject<string>;

  creators(arg0: number | string): TransactionObject<string>;

  fees(
    arg0: number | string,
    arg1: number | string
  ): TransactionObject<{
    recipient: string;
    value: string;
    0: string;
    1: string;
  }>;

  getFeeBps(id: number | string): TransactionObject<string[]>;

  getFeeRecipients(id: number | string): TransactionObject<string[]>;

  isApprovedForAll(
    _owner: string,
    _operator: string
  ): TransactionObject<boolean>;

  isOwner(): TransactionObject<boolean>;

  isSigner(account: string): TransactionObject<boolean>;

  mint(
    id: number | string,
    v: number | string,
    r: string | number[],
    s: string | number[],
    fees: { recipient: string; value: number | string }[],
    supply: number | string,
    uri: string
  ): TransactionObject<void>;

  name(): TransactionObject<string>;

  owner(): TransactionObject<string>;

  removeSigner(account: string): TransactionObject<void>;

  renounceOwnership(): TransactionObject<void>;

  renounceSigner(): TransactionObject<void>;

  safeBatchTransferFrom(
    _from: string,
    _to: string,
    _ids: (number | string)[],
    _values: (number | string)[],
    _data: string | number[]
  ): TransactionObject<void>;

  safeTransferFrom(
    _from: string,
    _to: string,
    _id: number | string,
    _value: number | string,
    _data: string | number[]
  ): TransactionObject<void>;

  setApprovalForAll(
    _operator: string,
    _approved: boolean
  ): TransactionObject<void>;

  setContractURI(contractURI: string): TransactionObject<void>;

  setTokenURIPrefix(tokenURIPrefix: string): TransactionObject<void>;

  supportsInterface(interfaceId: string | number[]): TransactionObject<boolean>;

  symbol(): TransactionObject<string>;

  tokenURIPrefix(): TransactionObject<string>;

  transferOwnership(newOwner: string): TransactionObject<void>;

  uri(_id: number | string): TransactionObject<string>;
}

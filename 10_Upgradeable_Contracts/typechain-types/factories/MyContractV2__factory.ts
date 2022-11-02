/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MyContractV2, MyContractV2Interface } from "../MyContractV2";

const _abi = [
  {
    inputs: [],
    name: "getName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "setName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610392806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806317d7de7c14610051578063209652551461006f5780635524107714610080578063c47f002714610095575b600080fd5b6100596100a8565b60405161006691906102bd565b60405180910390f35b600054604051908152602001610066565b61009361008e3660046102a5565b61013a565b005b6100936100a33660046101fb565b61014b565b6060600180546100b790610334565b80601f01602080910402602001604051908101604052809291908181526020018280546100e390610334565b80156101305780601f1061010557610100808354040283529160200191610130565b820191906000526020600020905b81548152906001019060200180831161011357829003601f168201915b5050505050905090565b61014581600a610310565b60005550565b805161015e906001906020840190610162565b5050565b82805461016e90610334565b90600052602060002090601f01602090048101928261019057600085556101d6565b82601f106101a957805160ff19168380011785556101d6565b828001600101855582156101d6579182015b828111156101d65782518255916020019190600101906101bb565b506101e29291506101e6565b5090565b5b808211156101e257600081556001016101e7565b60006020828403121561020c578081fd5b813567ffffffffffffffff80821115610223578283fd5b818401915084601f830112610236578283fd5b8135818111156102485761024861036f565b604051601f8201601f19908116603f011681019083821181831017156102705761027061036f565b81604052828152876020848701011115610288578586fd5b826020860160208301379182016020019490945295945050505050565b6000602082840312156102b6578081fd5b5035919050565b6000602080835283518082850152825b818110156102e9578581018301518582016040015282016102cd565b818111156102fa5783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561032f57634e487b7160e01b81526011600452602481fd5b500190565b600181811c9082168061034857607f821691505b6020821081141561036957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea164736f6c6343000804000a";

export class MyContractV2__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MyContractV2> {
    return super.deploy(overrides || {}) as Promise<MyContractV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MyContractV2 {
    return super.attach(address) as MyContractV2;
  }
  connect(signer: Signer): MyContractV2__factory {
    return super.connect(signer) as MyContractV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyContractV2Interface {
    return new utils.Interface(_abi) as MyContractV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyContractV2 {
    return new Contract(address, _abi, signerOrProvider) as MyContractV2;
  }
}

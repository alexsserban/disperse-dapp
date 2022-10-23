/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DisperseGasless,
  DisperseGaslessInterface,
} from "../../../contracts/DisperseGasless.sol/DisperseGasless";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_trustedForwarder",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "disperseTokenSimple",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTrustedForwarder",
    outputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_trustedForwarder",
        type: "address",
      },
    ],
    name: "setTrustedForwarder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e1638038062000e16833981810160405281019062000037919062000206565b620000576200004b6200006f60201b60201c565b6200008b60201b60201c565b62000068816200015160201b60201c565b5062000238565b6000620000866200019460201b6200038c1760201c565b905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001ce82620001a1565b9050919050565b620001e081620001c1565b8114620001ec57600080fd5b50565b6000815190506200020081620001d5565b92915050565b6000602082840312156200021f576200021e6200019c565b5b60006200022f84828501620001ef565b91505092915050565b610bce80620002486000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100d8578063ce1b815f146100f6578063da74222814610114578063f2fde38b146101305761007d565b806351ba162c14610082578063572b6c051461009e578063715018a6146100ce575b600080fd5b61009c6004803603810190610097919061082c565b61014c565b005b6100b860048036038101906100b391906108b7565b610235565b6040516100c591906108ff565b60405180910390f35b6100d661028e565b005b6100e06102a2565b6040516100ed9190610929565b60405180910390f35b6100fe6102cc565b60405161010b9190610929565b60405180910390f35b61012e600480360381019061012991906108b7565b6102f5565b005b61014a600480360381019061014591906108b7565b610309565b005b60005b825181101561022f578373ffffffffffffffffffffffffffffffffffffffff166323b872dd61017c610394565b85848151811061018f5761018e610944565b5b60200260200101518585815181106101aa576101a9610944565b5b60200260200101516040518463ffffffff1660e01b81526004016101d093929190610982565b6020604051808303816000875af11580156101ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021391906109e5565b61021c57600080fd5b808061022790610a41565b91505061014f565b50505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b6102966103a3565b6102a06000610421565b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6102fd6103a3565b610306816104e7565b50565b6103116103a3565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610380576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037790610b0c565b60405180910390fd5b61038981610421565b50565b600033905090565b600061039e61038c565b905090565b6103ab610394565b73ffffffffffffffffffffffffffffffffffffffff166103c96102a2565b73ffffffffffffffffffffffffffffffffffffffff161461041f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041690610b78565b60405180910390fd5b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105698261053e565b9050919050565b600061057b8261055e565b9050919050565b61058b81610570565b811461059657600080fd5b50565b6000813590506105a881610582565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6105fc826105b3565b810181811067ffffffffffffffff8211171561061b5761061a6105c4565b5b80604052505050565b600061062e61052a565b905061063a82826105f3565b919050565b600067ffffffffffffffff82111561065a576106596105c4565b5b602082029050602081019050919050565b600080fd5b6106798161055e565b811461068457600080fd5b50565b60008135905061069681610670565b92915050565b60006106af6106aa8461063f565b610624565b905080838252602082019050602084028301858111156106d2576106d161066b565b5b835b818110156106fb57806106e78882610687565b8452602084019350506020810190506106d4565b5050509392505050565b600082601f83011261071a576107196105ae565b5b813561072a84826020860161069c565b91505092915050565b600067ffffffffffffffff82111561074e5761074d6105c4565b5b602082029050602081019050919050565b6000819050919050565b6107728161075f565b811461077d57600080fd5b50565b60008135905061078f81610769565b92915050565b60006107a86107a384610733565b610624565b905080838252602082019050602084028301858111156107cb576107ca61066b565b5b835b818110156107f457806107e08882610780565b8452602084019350506020810190506107cd565b5050509392505050565b600082601f830112610813576108126105ae565b5b8135610823848260208601610795565b91505092915050565b60008060006060848603121561084557610844610534565b5b600061085386828701610599565b935050602084013567ffffffffffffffff81111561087457610873610539565b5b61088086828701610705565b925050604084013567ffffffffffffffff8111156108a1576108a0610539565b5b6108ad868287016107fe565b9150509250925092565b6000602082840312156108cd576108cc610534565b5b60006108db84828501610687565b91505092915050565b60008115159050919050565b6108f9816108e4565b82525050565b600060208201905061091460008301846108f0565b92915050565b6109238161055e565b82525050565b600060208201905061093e600083018461091a565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b61097c8161075f565b82525050565b6000606082019050610997600083018661091a565b6109a4602083018561091a565b6109b16040830184610973565b949350505050565b6109c2816108e4565b81146109cd57600080fd5b50565b6000815190506109df816109b9565b92915050565b6000602082840312156109fb576109fa610534565b5b6000610a09848285016109d0565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610a4c8261075f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610a7e57610a7d610a12565b5b600182019050919050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610af6602683610a89565b9150610b0182610a9a565b604082019050919050565b60006020820190508181036000830152610b2581610ae9565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610b62602083610a89565b9150610b6d82610b2c565b602082019050919050565b60006020820190508181036000830152610b9181610b55565b905091905056fea264697066735822122059ded77e76ee8a8760c2e900393462d06841117de4fd317dc3917f08e6c89fb964736f6c63430008110033";

type DisperseGaslessConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DisperseGaslessConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DisperseGasless__factory extends ContractFactory {
  constructor(...args: DisperseGaslessConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _trustedForwarder: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DisperseGasless> {
    return super.deploy(
      _trustedForwarder,
      overrides || {}
    ) as Promise<DisperseGasless>;
  }
  override getDeployTransaction(
    _trustedForwarder: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_trustedForwarder, overrides || {});
  }
  override attach(address: string): DisperseGasless {
    return super.attach(address) as DisperseGasless;
  }
  override connect(signer: Signer): DisperseGasless__factory {
    return super.connect(signer) as DisperseGasless__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DisperseGaslessInterface {
    return new utils.Interface(_abi) as DisperseGaslessInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DisperseGasless {
    return new Contract(address, _abi, signerOrProvider) as DisperseGasless;
  }
}

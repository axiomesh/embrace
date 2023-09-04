#!/bin/bash

# 获取以太坊地址，如果没有提供，则使用默认地址
ETH_ADDRESS=${1:-"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"}
ETH_ADDRESS_PK=${2:-"ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"}

# 部署的合约
CONTRACT_ADDRESS=${3:-"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"}

# 设置 RPC URL
AXIOM_RPC_OPTION_URL="--rpc-url http://127.0.0.1:8881"

# 配置 raw Transaction
TX="0xf86f8086048c273950008405f5e10094264e23168e80f15e9311f2b88b4d7abeaba47e54880de0b6b3a7640000801ba0c1179d7bdda94ecebe488bd3ad5d5b9c44df15b1ff0b85ee1099c8e5ffa7b98ba037107b6f084dedb5e8ef268a58e34b4cf599a73e355a4448168b528e1541aff2"
TX_HASH="0x78f9a5aec710eb19c08937f9a9c7cc34c66f1a4d0e3d3dc8d68db212a0326b0b"

# 1 General
echo "1.1. 显示 cast 的通用帮助信息："
#cast help

 2 Chain
echo "2.1. 获取链 id："
cast chain-id ${AXIOM_RPC_OPTION_URL}

echo "2.2. 获取链名称："
cast chain ${AXIOM_RPC_OPTION_URL}

echo "2.3. 获取 provider 名称："
cast client ${AXIOM_RPC_OPTION_URL}

# 3 Transaction
echo "3.1. 向网络发布一个原始交易："
cast publish $AXIOM_RPC_OPTION_URL --async $TX

echo "3.2. 获取一个交易的交易收据："
cast receipt $AXIOM_RPC_OPTION_URL `cast publish $AXIOM_RPC_OPTION_URL --async $TX`

echo "3.3. 签署并发布一项交易："
cast send 0x264e23168e80f15e9311F2B88b4D7abeAba47E54 --value 0.1ether $AXIOM_RPC_OPTION_URL --private-key $ETH_ADDRESS_PK

echo "3.4. 在不发布交易的情况下对一个账户进行调用："
cast call $AXIOM_RPC_OPTION_URL 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 "balanceOf(address)(uint256)" $ETH_ADDRESS

echo "3.5. 执行一个原始的 JSON-RPC 请求"
cast rpc eth_getBlockByNumber "latest" "false" $AXIOM_RPC_OPTION_URL

echo "3.6. 获得有关交易的信息："
cast tx $AXIOM_RPC_OPTION_URL `cast publish $AXIOM_RPC_OPTION_URL --async $TX`

echo "3.7. 估算交易的 Gas 成本"
cast estimate $CONTRACT_ADDRESS --value 0.1ether "deposit()" $AXIOM_RPC_OPTION_URL

#4 Block 命令
echo "4.1. 获取最新的区块号："
cast block-number ${AXIOM_RPC_OPTION_URL}

#5 Account 命令
echo "5.1. 查询以太坊地址 $ETH_ADDRESS 的余额："
cast balance $ETH_ADDRESS ${AXIOM_RPC_OPTION_URL}

echo "5.2. 获取账户 $ETH_ADDRESS 的 nonce："
cast nonce $ETH_ADDRESS ${AXIOM_RPC_OPTION_URL}

echo "5.3. 获取一个合约的字节码："
cast code $AXIOM_RPC_OPTION_URL $CONTRACT_ADDRESS

#6 Utility Commands

echo "6.1. 使用 keccak-256 对 12345 进行哈希："
cast keccak 12345

echo "6.2. 从给定的 nonce 和部署者地址计算合约地址："
cast compute-address --nonce 0 $AXIOM_RPC_OPTION_URL $ETH_ADDRESS

7 Wallet Commands
echo "7.1. 创建一个新的随机密钥对："
cast wallet new

echo "7.2. 将一个私钥转换为一个地址："
cast wallet address $ETH_ADDRESS_PK

echo "7.3. 签署消息："
cast wallet sign --private-key $ETH_ADDRESS_PK "hello"

#echo "7.4. 验证一个信息的签名："
#cast wallet verify


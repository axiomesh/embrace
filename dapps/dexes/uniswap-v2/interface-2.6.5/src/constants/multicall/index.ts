import { ChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

// todo 需要修改适配
const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.TESTNET]: '0xc3739eBDBCFe484F67a7c038E6E0583BeD5513D5'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }

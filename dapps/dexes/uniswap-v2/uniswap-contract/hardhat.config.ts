import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  // defaultNetwork: "axiom",
  networks: {
    axiom_local: {
      url: "http://127.0.0.1:8881",
      accounts: [
        `0x${process.env.PRIVATE_KEY}`,
        '0x05c3708d30c2c72c4b36314a41f30073ab18ea226cf8c6b9f566720bfe2e8631',// axiom-2
        '0x72efcf4bb0e8a300d3e47e6a10f630bcd540de933f01ed5380897fc5e10dc95d',// axiom-4
        '0xb6477143e17f889263044f6cf463dc37177ac4526c4c39a7a344198457024a2f',
        '0x85a94dd51403590d4f149f9230b6f5de3a08e58899dcaf0f77768efb1825e854',
        '0x25a12dd41cc079fb8a9c3cead09a164621207351239260b6e82412c73367d428',
        '0x93045b57a513ade05061e30605fd99c2a37fcd095c9a0313fa1aa2571f21f7a0',
        '0x0b2624302ce7688a770512b1c494050d2275f7996258c470687c9d8a0ee4c041',
      ],
    },
    axiom_cloud: {
      url: "http://172.16.13.130:8881",
      accounts: [
        `0x${process.env.PRIVATE_KEY}`,
        '0x05c3708d30c2c72c4b36314a41f30073ab18ea226cf8c6b9f566720bfe2e8631',// axiom-2
        '0x72efcf4bb0e8a300d3e47e6a10f630bcd540de933f01ed5380897fc5e10dc95d',// axiom-4
        '0xb6477143e17f889263044f6cf463dc37177ac4526c4c39a7a344198457024a2f',
        '0x85a94dd51403590d4f149f9230b6f5de3a08e58899dcaf0f77768efb1825e854',
        '0x25a12dd41cc079fb8a9c3cead09a164621207351239260b6e82412c73367d428',
        '0x93045b57a513ade05061e30605fd99c2a37fcd095c9a0313fa1aa2571f21f7a0',
        '0x0b2624302ce7688a770512b1c494050d2275f7996258c470687c9d8a0ee4c041',
      ]
    },
    aries: {
      url: "https://rpc4.aries.axiomesh.io",
      accounts: [
        `0x${process.env.PRIVATE_KEY}`,
      ]
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.SEPOLIA_API_KEY}`,
      accounts: [
          `0x${process.env.PRIVATE_KEY}`,
      ]
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 400
          }
        }
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 400
          }
        }
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 400
          }
        }
      },
      {
        version: "0.4.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 400
          }
        }
      }
    ]
  },
};

export default config;

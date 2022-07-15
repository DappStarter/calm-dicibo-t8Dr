require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food educate random pitch evil coral light army ghost'; 
let testAccounts = [
"0xb578ca2cbfcef7ee702b5f2037727bc56ff130953d869efadea15cb312734f56",
"0xa91a635c586e07719764a38d3c6ed0ff559ab905fc4afc76be004cb140af6466",
"0x27e4c8d044376618c840977b7dd07d56492488f5d1d103aaf8d68749f0e7d963",
"0x873fb78ff7cf2570b701a5c23fab52ce2a8d7f2703a18119d30d6a8a3948aa0d",
"0x99f7bb1112091f07a82f70fe270ec1dd562fcba2d07012b327135d9178694def",
"0x8cee0bd48107983c0717d0318b47870f64c4eea989d19464584e16d6eba6ecba",
"0xeda1e889b9391429355bfb6237308b77345aa1650ba236370451c8cdf5b5677d",
"0x9cb646998686cd7af4e36f48431e5b6c438fcde45fce8bad7d63763bb3852dc1",
"0x94877cca354b2413a42696dc7c8d61038461bc88d7d2ca75004534a9ae9389c8",
"0x044724612508998985430813695be7ca8d4195dfea01b3d3e487eb406997b67e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



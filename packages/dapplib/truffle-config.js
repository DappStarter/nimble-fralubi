require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan rebel sister collect install battle equal gaze'; 
let testAccounts = [
"0xe0b83b970a9ada7f912f3d9a72921619501dc5e73023e0fbb802580ee72dcd50",
"0x4a420a596b08e8be6029fbd7b32cd27879efb7d4b7c2472dd7e736a724e4bb5b",
"0x4f78b4b8cc62a859946991e9f8ee28ad44ed110a925a891a318cb6fa03a9506f",
"0x5788af1d4e1b4c6102a6c664e8d256a113e72792b6d6f481dab20f67aebd338e",
"0x8135c98d8b948429ec7405fcc2f983aa542a4abb438fe40eec6a1b0b037561db",
"0x349c2dbbd4c2c080a869c509fc297264ece57b2adfb25496ca7fc2d7856fe0c4",
"0xf5e0077b8e4e18d4d9413259e6783923fdaf1045bef51b76c1b00881c4c27d8e",
"0x356d48e2d986d6d1aecc30b96aa0bf2b4546f420ae9449626d0c03719c401d1b",
"0xbac18c91d97d49105dce8b5234095475c4d59516569766efcfdaf745e0ea4dcb",
"0x5e3951995a76eb2027e35c47a2630c3b0ed5486e5daf044c1788d6b68e4b3352"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

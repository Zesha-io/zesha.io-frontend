const clientId =
    "BJgW2unbHXVCrRwtNtmws_f4i8Z32d1mcm4jw3rxa3ieerlQOXsAPhGL97yNWjB_iOheWuxQtZQS-Vo3EQJHhFw";

const Login = async function (redirectUrl) {
    try {
        const web3auth = new Web3AuthNoModal({
            clientId,
            chainConfig: {
                chainNamespace: "eip155",
                chainId: "0x13881",
                rpcTarget: "https://rpc.ankr.com/polygon_mumbai",
                // chainId: "0x16d",
                // rpcTarget:
                //     "https://eth-rpc-api-testnet.thetatoken.org/rpc",
                // tickerName: "TFUEL",
            },
            // web3AuthNetwork: "testnet",
            web3AuthNetwork: "cyan",
        });

        const openloginAdapter = new OpenloginAdapter({
            adapterSettings: {
                clientId, //Optional - Provide only if you haven't provided it in the Web3Auth Instantiation Code
                uxMode: "redirect",
                loginProvider: ["google", "facebook"],
                redirectUrl: "http://localhost:3000/welcome",
                whiteLabel: {
                    name: "Zesha",
                    logoLight:
                        "https://user-images.githubusercontent.com/7295729/236681515-e3e1cbab-fdbf-4fad-92b9-b35a3e661b28.png",
                    logoDark:
                        "https://user-images.githubusercontent.com/7295729/236681515-e3e1cbab-fdbf-4fad-92b9-b35a3e661b28.png",
                    defaultLanguage: "en",
                },
            },
        });

        web3auth.configureAdapter(openloginAdapter);
        setWeb3auth(web3auth);
        await web3auth.init();

        console.log("WEB3AUTH: ", web3auth);
        if (web3auth.provider) {
            setProvider(web3auth.provider);
        }
    } catch (error) {
        console.log("WEBEAUTH_ERROR: ", error);
    }
};

export default {
    Login,
};

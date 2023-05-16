import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { Web3AuthNoModal } from "@web3auth/no-modal";
import { WALLET_ADAPTERS } from "@web3auth/base";
import { useEffect, useState } from "react";

const clientId =
    "BJgW2unbHXVCrRwtNtmws_f4i8Z32d1mcm4jw3rxa3ieerlQOXsAPhGL97yNWjB_iOheWuxQtZQS-Vo3EQJHhFw";

export default function useWeb3Auth({ redirectUrl }) {
    const [web3auth, setWeb3auth] = useState(null);
    const [provider, setProvider] = useState(null);

    useEffect(() => {
        const init = async () => {
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
                        redirectUrl: redirectUrl,
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

        init();
    }, []);

    const getAccount = async () => {
        const user = await web3auth.getUserInfo();

        console.log(user);
    };

    const login = async (providerName) => {
        if (!web3auth) {
            msg = "web3auth not initialized yet";
            throw new Error(msg);

            return;
        }
        const web3authProvider = await web3auth.connectTo(
            WALLET_ADAPTERS.OPENLOGIN,
            {
                loginProvider: providerName,
            }
        );

        setProvider(web3authProvider);
    };

    return { web3auth, provider, getAccount, login };
}

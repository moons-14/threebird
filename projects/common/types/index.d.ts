declare const AuthTokenRequest: {
    name: string;
    type: string;
}[];
declare const AuthTypes: {
    EIP712Domain: {
        name: string;
        type: string;
    }[];
    AuthTokenRequest: {
        name: string;
        type: string;
    }[];
};
declare const AuthDomain: {
    name: string;
    version: string;
};

declare type ChainParameter = Readonly<{
    chainId: number;
    blockExplorerUrls: string[];
    chainName: string;
    iconUrls: string[];
    nativeCurrency: {
        decimals: 18;
        name: string;
        symbol: string;
    };
    rpcUrls: string[];
}>;
declare type chains = 592;
declare type ChainParameters = Record<chains, ChainParameter>;

declare const chainParameters: ChainParameters;

declare type AuthTokenMessage = {
    address: string;
    signedAt: string;
};

export { AuthDomain, AuthTokenMessage, AuthTokenRequest, AuthTypes, ChainParameter, ChainParameters, chainParameters, chains };

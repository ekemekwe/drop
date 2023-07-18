import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { ZksyncEraTestnet } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
const activeChain = ZksyncEraTestnet;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Head>
        <title>Azacoin Token Drop Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Azacoin token drop contract, including claim and transfer features."
        />
        <meta
          name="keywords"
          content="Azacoin token drop, Azacoin token transfer, Azacoin token claim, Azacoin token claim phases"
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
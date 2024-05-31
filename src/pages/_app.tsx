import type { AppProps } from "next/app";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { ChakraProvider } from "@chakra-ui/react";

import { RecoilRoot } from "recoil";

import { AuthProvider } from "@/shared/contexts";

import { ConfigService } from "@/shared/services";

import Layout from "./layout";

function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: ConfigService.apiUrl,
    cache: new InMemoryCache({ addTypename: false }),
  });

  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <RecoilRoot>
          <AuthProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </RecoilRoot>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;

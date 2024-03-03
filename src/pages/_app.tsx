import type { AppProps } from "next/app";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import AuthProvider from "@/shared/contexts/auth.provider";

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache({ addTypename: false }),
  });

  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <RecoilRoot>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </RecoilRoot>
      </ApolloProvider>
    </ChakraProvider>
  );
}

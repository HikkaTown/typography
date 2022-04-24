import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { URLAPI } from "./const";

export const client = new ApolloClient({
  uri: URLAPI,
  cache: new InMemoryCache(),
});
export const StrapiApolloProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default StrapiApolloProvider;

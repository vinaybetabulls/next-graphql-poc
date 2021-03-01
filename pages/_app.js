import LayoutComponent from "../components/Layout";
import "../styles/globals.css";
import "antd/dist/antd.css";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </ApolloProvider>
  );
}

export default MyApp;

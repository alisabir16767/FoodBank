import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, ColorModeScript, CSSReset } from "@chakra-ui/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import theme from "./theme";
import Dashboard from "./components/admin/Dashboard";
import BoM from "./pages/DistributionRequest";
import DistributionReport from "./pages/DistributionReportPage";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode="light" />
        <CSSReset />
        <Router>
          <div className="flex-column justify-center align-center min-100-vh bg-primary">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {<Route path="/dashboard" element={<Dashboard />} />}
              {/* {<Route path="/distribution" element={<DistributionManagement />} />} */}
              <Route path="/BoM" element={<BoM />} />
              <Route
                path="/distributionreport"
                element={<DistributionReport />}
              />

              <Route path="*" element={<h1>Not found</h1>}></Route>
            </Routes>
          </div>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;

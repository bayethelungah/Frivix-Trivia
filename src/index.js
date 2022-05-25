import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Login from "./login";
import SignUp from "./signUp";
import About from "./about";
import Settings from "./settings";

import Play from "./play";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import { AuthProvider } from "./context/authContext";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} exact="true" />
              <Route path="/about" element={<About />} exact="true" />
              <Route path="/play" element={<Play />} exact="true" />
              <Route path="/login" element={<Login />} exact="true" />
              <Route path="/signup" element={<SignUp />} exact="true" />
              <Route path="settings" element={<Settings />} exact="true" />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

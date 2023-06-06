import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { Header } from "./Frontend";
import reportWebVitals from "./reportWebVitals";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {NoPage} from "./components/NoPage"
import {DataView} from "./components/DataView"

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

const WrappedHeader = () =>{
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
    </QueryClientProvider>
  )
}
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<WrappedHeader/>}/>
          <Route path="/id/:id" element={<DataView/>}/>
          <Route path="*" element={<NoPage/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

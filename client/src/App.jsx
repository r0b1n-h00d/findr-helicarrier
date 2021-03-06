import React from "react";
import Filter from "./components/Filter";

//Graphql and apollo client imports
import { ApolloProvider } from "@apollo/client";
import { client } from "./GraphQL/Config";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="w-screen h-full  bg-zinc-200 fixed drop-shadow-lg">
        <div className="px-2 flex justify-center w-full h-[80px]">
          {/* Site Title */}
          <div className="flex flex-col mt-5">
            <h1 className="text-4xl text-center text-slate-600 font-bold mr-4 sm:text-5xl">
              Findr.
            </h1>
            <p className="mt-1 text-4md text-center text-slate-400">
              Global Phone Directory{" "}
            </p>
          </div>
        </div>
        <Filter />
        <p className="text-xs text-slate-500 text-center mt-20">
          Made with ❤ by{" "}
          <a className="text-slate-600" href="https://kiforodavid.netlify.app">
            Kiforo
          </a>
        </p>
      </div>
    </ApolloProvider>
  );
}

export default App;

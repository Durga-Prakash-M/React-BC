import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import JokeGetter from "./components/JokeGetter";
import JokePoster from "./components/JokePoster";
import "../App.css";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="get-joke">Get a Joke</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path="/get-joke" element={<JokeGetter />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;

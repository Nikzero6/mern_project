import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import Mynotes from "./screens/MyNotes/Mynotes";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" component={LandingPage} exact />
      <Route path="/mynotes" component={Mynotes} exact />
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;

import React from "react";
import { Header } from "./components/Header";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <section className="full_section container">
        <h1>Hello World</h1>
      </section>
    </div>
  );
}

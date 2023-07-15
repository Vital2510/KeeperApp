import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((comp) => (
        <Note key={comp.key} title={comp.title} content={comp.content} />
      ))}f
      <Footer />
    </div>
  );
}

export default App;

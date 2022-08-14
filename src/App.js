import { useState, useEffect, useRef } from "react";

import {
  Prompt,
  Default,
  Help,
  About,
  Header,
  Invalid,
  Contact,
  Utilities,
  Links
} from "./components/Components";

import "./styles.css";

const components = {
  viewA: Prompt,
  viewB: Header,
  viewC: Invalid,
  viewD: Utilities,
  view1: Default,
  view2: Help,
  view3: About,
  view5: Contact,
  view6: Links
};

export default function App() {
  const [content, setContent] = useState(["viewB", "view1"]);
  const [input, setInput] = useState("");

  const contentEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // always scroll to "contentEndRef" - an empty element at the bottom
    contentEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [content]);

  // always set focus on input field "inputRef"
  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handlechange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    const setPromtAndClean = () => {
      //add input text to "view name" so that history shows in prompts (`viewA|${input}`)
      setContent((content) => [...content, `viewA|${input}`]);
      setInput("");
    };
    e.preventDefault();
    switch (input) {
      case "help":
        setPromtAndClean();
        setContent((content) => [...content, "view2"]);
        break;
      case "whois":
        setPromtAndClean();
        setContent((content) => [...content, "view3"]);
        break;
      case "whoami":
        const getLocation = async () => {
          try {
            const res = await fetch("https://ipapi.co/json/");
            const data = await res.json();
            setPromtAndClean();
            setContent((content) => [
              ...content,
              `viewD|I don't recognise you, but ask someone in ${data.city}. (this is just a guess based on your ISP location 🤖)`
            ]);
          } catch (err) {
            console.log(err);
          }
        };

        getLocation();
        break;

      case "contact":
        setPromtAndClean();
        setContent((content) => [...content, "view5"]);
        break;
      case "links":
        setPromtAndClean();
        setContent((content) => [...content, "view6"]);
        break;
      case "send":
        setPromtAndClean();
        window.open("mailto:janne@fatarrow.io");
        break;
      // Links commands
      case "gist":
        setPromtAndClean();
        window.open(
          "https://gist.github.com/janne-nylund/7f09ca55fe012c86c7d35fe36ca9bd2c"
        );
        break;

      case "clear":
        setPromtAndClean();
        setContent(() => ["viewB", "view1"]);
        break;
      case "time":
        setPromtAndClean();
        setContent((content) => [
          ...content,
          `viewD|${new Date().toLocaleString()}`
        ]);
        break;
      case "":
        setPromtAndClean();
        setContent(() => [...content, "viewA"]);
        break;
      default:
        setPromtAndClean();
        setContent((content) => [...content, "viewC"]);
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <small>
          FAT ARROW&#8482; WEB TERMINAL v0.0.1. <br />
          LEAVE YOUR MOUSE & MOBILE PHONE AT THE DOOR.
        </small>
        {content.map((item) => {
          // map all items in content and return <Components /> with the name of "item"

          // check if item is the prompt
          if (item.toString().includes("A")) {
            //split the item string a character "|" (e.g. "viewA|help") and assign the first half as Component name
            const Component = components[item.split("|")[0]];

            //This is so that the previouss commands show in the "history prompts"
            //split the view string at character "|" and assign the second half (the previous command) as the text prop for the Component (Prompt)
            return <Component key={Math.random()} text={item.split("|")[1]} />;
          } else if (item.toString().includes("D")) {
            //split the item string a character "|"
            const Component = components[item.split("|")[0]];

            //split the view string at character "|" and assign the second half as props
            return <Component key={Math.random()} props={item.split("|")[1]} />;
          } else {
            const Component = components[item];
            return <Component key={Math.random()} />;
          }
        })}
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="box">
              <label htmlFor="input" className="prompt">
                visitor@fatarrow:~${" "}
              </label>
              <input
                autoComplete="off"
                className="blinking-cursor"
                type="text"
                name="input"
                value={input}
                onChange={handlechange}
                autoFocus
                ref={inputRef}
                onBlur={handleFocus}
              />
            </div>
          </div>
        </form>
        <div ref={contentEndRef} />
      </div>
    </div>
  );
}

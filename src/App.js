import { useContext } from "react";
import Home from "./components/home/Home";
import About from "./components/about/About.js";
import Skill from "./components/skill/Skill";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Home />
      <About />
      <Skill />
      <Blog />
      <Contact />
    </div>
  );
};

export default App;
import "./App.css";
import "./component_Css/Nav.css";
import Header from "./component/Header";
import Article from "./component/Article";
import ArticleOne from "./component/ArticleOne";
import ArticleTwo from "./component/ArticleTwo";
import { useState } from "react";

import jaeDong from "./img/JaeDong.jpg";

function Nav(props) {
  const lis = [
    { id: 1, title: "About me" },
    { id: 2, title: "Project" },
    { id: 3, title: "Education" },
  ];
  return (
    <nav className="nav">
      <img className="jaedong_Pic" src={jaeDong} alt="jaedong"></img>
      <ul>
        {lis.map(li => {
          return (
            <li
              key={li.id}
              id={li.id}
              onClick={event => {
                event.preventDefault();
                props.onChangeMode(Number(event.target.id));
              }}
            >
              {li.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function App() {
  const [mode, setMode] = useState();

  let content = null;

  if (mode === 1) {
    content = <ArticleOne />;
  } else if (mode === 2) {
    content = <ArticleTwo />;
  } else if (mode === 3) {
    content = "세번째";
  }

  return (
    <div className="container">
      <Nav
        title="WELCOME"
        onChangeMode={id => {
          console.log(id);
          setMode(id);
        }}
      ></Nav>
      <div className="container_body">
        <Header></Header>
        {content}
      </div>
    </div>
  );
}

export default App;

import "../component_Css/Nav.css";
import jaeDong from "../img/JaeDong.jpg";
import Article from "../component/ArticleOne";
import { useState } from "react";

function Nav() {
  const lis = [
    { id: 1, title: "About me" },
    { id: 2, title: "Project" },
    { id: 3, title: "Education" },
  ];

  let mode = lis.id;

  let content = null;

  if (lis.id === 1) {
    content = <Article title="WELCOME"></Article>;
  } else if (lis.id === 2) {
    content = <Article title="read"></Article>;
  }

  return (
    <nav className="nav">
      <img className="jaedong_Pic" src={jaeDong} alt="jaedong"></img>
      <ul>
        {lis.map(li => {
          return (
            <li className="dropDownItem" key={li.id}>
              {li.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;

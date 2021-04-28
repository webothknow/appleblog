/* eslint-disable */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [title, settite] = useState([
    "리액트 포스트",
    "즐겨찾기순위",
    "강의사이트추천",
  ]);

  let [Text, settext] = useState(0);

  let [modal, setmodal] = useState(false);

  let [pushtitle, setpushtitle] = useState(0);

  let [inptext, setinptext] = useState("");

  function titlechange() {
    let newArray = [...title];
    newArray = newArray.sort();
    settite(newArray);
  }

  let posts = "강남 고기 맛집";

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={titlechange}>버튼</button>
      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                setpushtitle(i);
              }}
            >
              {a}
              <span
                onClick={() => {
                  settext(Text + 1);
                }}
              >
                👍
              </span>
              {Text}
            </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}

      {/* {inptext}
      <input
        onChange={(e) => {
          setinptext(e.target.value);
        }}
      ></input> */}

      {modal == true ? <Modal title={title} pushtitle={pushtitle} /> : null}
      <button
        onClick={() => {
          setmodal(!modal);
        }}
      >
        버튼
      </button>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[props.pushtitle]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;

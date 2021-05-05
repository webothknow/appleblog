/* eslint-disable */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [title, settitle] = useState([
    "리액트 포스트",
    "즐겨찾기순위",
    "강의사이트추천",
  ]);

  let [Text, settext] = useState(0);

  let [modal, setmodal] = useState(false);

  let [pushtitle, setpushtitle] = useState(0);

  let [inptext, setinptext] = useState("");

  let [save, setsave] = useState("");

  function titlechange() {
    let newArray = [...title];
    newArray = newArray.sort();
    settitle(newArray);
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
      <div className="publish">
        <input
          onChange={(e) => {
            setsave(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let arrayCopy = [...title];
            arrayCopy.unshift(save);
            settitle(arrayCopy);
          }}
        >
          저장
        </button>
        <button
          onClick={() => {
            let arrayCopy = [...title];
            arrayCopy.shift(save);
            settitle(arrayCopy);
          }}
        >
          삭제
        </button>
      </div>
      {modal == true ? <Modal title={title} pushtitle={pushtitle} /> : null}
      <button
        onClick={() => {
          setmodal(!modal);
        }}
      >
        버튼
      </button>
      <Profile />
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

// class Profile extends React.Component {
//   constructor() {
//     super();
//     this.state = { name: "kim", age: 30 };
//   }

//   changeName = () => {
//     this.setState({ name: "Park" });
//   };

//   render() {
//     return (
//       <div>
//         <div>프로필입니다</div>
//         <p>저는{this.state.name} 입니다.</p>
//         {/* <button
//           onClick={() => {
//             this.setState({ name: "Park" });
//           }}
//         >
//           프로필버튼
//         </button> */}
//         <button
//           onClick={() => {
//             this.changeName;
//           }}
//         >
//           프로필버튼
//         </button>
//       </div>
//     );
//   }
// }

export default App;

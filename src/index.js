import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
// import { addTodo } from "./redux/actions";
// import { completeTodo, showAll } from "./redux/actions";
// import ReduxContext from "./contexts/ReduxContext";

import { Provider } from "react-redux";

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });
//구독을 해두면 dispatch가 일어낫을 때 subscribe안에 있는 함수가 계속 실행되게 된다.

// store.dispatch(액션)
// store.dispatch(액션생성자())
// subscribe 리턴이 unsubscribe 이라는점
// store.replaceReducer(다른리듀서) 다른리듀서로 교체하는 로직.

// store.dispatch(addTodo("coding"));
// store.dispatch(addTodo("read book"));
// store.dispatch(addTodo("eat"));
// unsubscribe(); //실제 store에 변경이 됫지만 unsubscribe 이후의 dispatch는 콘솔에 찍히지 않는다.
// store.dispatch(addTodo("coding"));

// store.dispatch(addTodo("read book"));
// store.dispatch(addTodo("eat"));
// console.log(store.getState());

// store.dispatch(addTodo("공부하기"));
// store.dispatch(addTodo("밥먹기"));
// store.dispatch(completeTodo(0));
// store.dispatch(showAll());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

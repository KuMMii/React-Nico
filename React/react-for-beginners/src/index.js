import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// StrickMode는 create-react-app으로 설치를 하시면 기본적으로 생성이 되어있는 태그인데
	// 해당 태그로 감싸져 있는 경우에는 코드의 문제를 감지하고 경고하기 위해서
	// 구성 요소를 두 번 렌더링 한다고 합니다.(개발용이 아닌 프로덕션용)
	// <React.StrictMode>
	<App />,
	// </React.StrictMode>,
);

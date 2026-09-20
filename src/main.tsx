import React from "react";
import ReactDOM from "react-dom/client";
// 只引入 latin subset：站点正文是英文/数字，cyrillic、vietnamese 等子集
// 会额外打包 16 个字体文件并进入 PWA 预缓存，收益为零。
import "@fontsource/ibm-plex-mono/latin-500.css";
import "@fontsource/ibm-plex-mono/latin-700.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

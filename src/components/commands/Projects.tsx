import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't miss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "mujiu.net · Terminal Portfolio",
    desc: "本站：仿终端交互式个人主页，React + Vite + PWA，支持命令补全、多主题切换与离线访问。",
    url: "https://mujiu.net",
  },
  {
    id: 2,
    title: "mujiu Games · 网页小游戏合集",
    desc: "8 个轻量网页小游戏，无需安装、打开即玩，适合摸鱼或和朋友对战。",
    url: "https://game.mujiu.net",
  },
  {
    id: 3,
    title: "Anonymous Inbox · 匿名信箱",
    desc: "带频率限制和 XSS 转义的匿名留言服务，欢迎来提问、吐槽或反馈。",
    url: "https://ask.mujiu.net",
  },
  {
    id: 4,
    title: "GUI Homepage · 图形版主页",
    desc: "同一份个人主页的图形界面版本，与终端版共享配色与身份信息。",
    url: "https://gui.mujiu.net",
  },
];

export default Projects;

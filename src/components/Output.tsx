import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Projects from "./commands/Projects";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext, useEffect } from "react";

type Props = {
  index: number;
  cmd: string;
};

// 原有Game组件
const Game: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://game.mujiu.net";
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return <GeneralOutput>redirecting to game.mujiu.net ...</GeneralOutput>;
};

// 新增 Ask 组件，和Game写法保持一致
const Ask: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open("https://ask.mujiu.net", "_blank");
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return <GeneralOutput>redirecting to ask.mujiu.net ...</GeneralOutput>;
};

// Gui组件，和Ask完全一致
const Gui: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open("https://gui.mujiu.net", "_blank");
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return <GeneralOutput>redirecting to gui.mujiu.net ...</GeneralOutput>;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["projects", "socials", "themes", "echo"];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          about: <About />,
          clear: <Clear />,
          echo: <Echo />,
          education: <Education />,
          email: <Email />,
          game: <Game />,
          ask: <Ask />,
          gui: <Gui />,
          help: <Help />,
          history: <History />,
          projects: <Projects />,
          pwd: <GeneralOutput>/home/mujiu</GeneralOutput>,
          socials: <Socials />,
          themes: <Themes />,
          welcome: <Welcome />,
          whoami: <GeneralOutput>visitor</GeneralOutput>,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;

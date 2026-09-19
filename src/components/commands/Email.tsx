import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Email: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "email" && currentCommand.length <= 1) {
    const mailUrl = "mailto:inbox@mujiu.net";
    const newWin = window.open(mailUrl, "_blank");
    // 如果弹窗被拦截或者协议打开失败
    setTimeout(() => {
      if (!newWin || newWin.closed || newWin.location.href === "about:blank") {
        navigator.clipboard.writeText("inbox@mujiu.net");
        alert("未检测到系统邮件客户端，邮箱已复制到剪贴板：inbox@mujiu.net");
      }
    }, 300);
  }

  return (
    <Wrapper>
      <span>inbox@mujiu.net</span>
    </Wrapper>
  );
};

export default Email;

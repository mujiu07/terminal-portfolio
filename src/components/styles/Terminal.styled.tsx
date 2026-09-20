import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.25rem;
  padding-top: 0.75rem;

  display: flex;
  flex-direction: column-reverse;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
`;

export const CmdNotFound = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 1rem;
`;

export const Empty = styled.div`
  margin-bottom: 0.25rem;
`;

export const MobileSpan = styled.span`
  line-height: 1.5rem;
  margin-right: 0.75rem;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const MobileBr = styled.br`
  @media (min-width: 550px) {
    display: none;
  }
`;

export const Form = styled.form`
  @media (min-width: 550px) {
    display: flex;
  }
`;

export const Input = styled.input`
  flex-grow: 1;

  @media (max-width: 550px) {
    min-width: 85%;
  }
`;

/* ===== 输入区：快捷命令 + 输入行 作为一个整体 ===== */
export const InputArea = styled.div``;

export const Hints = styled.span`
  margin-right: 0.875rem;
`;

/* ===== 移动端/触屏可点击的快捷命令 ===== */
export const QuickCmds = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const QuickCmd = styled.button`
  font-family: inherit;
  font-size: 0.8125rem;
  line-height: 1.4;
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors?.text[300]};
  background: transparent;
  color: ${({ theme }) => theme.colors?.text[200]};
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors?.primary};
    border-color: ${({ theme }) => theme.colors?.primary};
  }
`;

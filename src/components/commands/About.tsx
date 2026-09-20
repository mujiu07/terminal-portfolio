import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, you can call me <HighlightSpan>Mujiu</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a computer science student</HighlightAlt>.
      </p>
      <p>
        I am passionate about CTF, AI and <br />
        building interesting web services.
      </p>
      <p>
        Currently studying at <HighlightSpan>Tianjin University</HighlightSpan>{" "}
        &amp; <HighlightSpan>PolyU Shenzhen</HighlightSpan>.
      </p>
      <p>
        This site is my terminal-style playground. <br />
        Try <HighlightAlt>projects</HighlightAlt>,{" "}
        <HighlightAlt>education</HighlightAlt>, or leave me a note via{" "}
        <HighlightAlt>ask</HighlightAlt>.
      </p>
    </AboutWrapper>
  );
};

export default About;

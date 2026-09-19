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
    </AboutWrapper>
  );
};

export default About;

import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
    __  ___        _ _      
   /  |/  /_  __  (_|_)_  __
  / /|_/ / / / / / / / / / /
 / /  / / /_/ / / / / /_/ / 
/_/  /_/\\__,_/_/ /_/\\__,_/  
            /___/            
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    __  ___        _ _      
   /  |/  /_  __  (_|_)_  __
  / /|_/ / / / / / / / / / /
 / /  / / /_/ / / / / /_/ / 
/_/  /_/\\__,_/_/ /_/\\__,_/  
            /___/           

          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.0.0)</div>
        <Seperator>----</Seperator>
        <div>
          This portfolio is built upon{" "}
          <Link href="https://github.com/satnaing/terminal-portfolio">
            satnaing/terminal-portfolio
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
        <div>
          <Cmd>提示</Cmd>：也可以直接点击输入框上方的命令按钮快速浏览。
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;

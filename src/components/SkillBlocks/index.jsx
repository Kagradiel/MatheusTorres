import styled from "styled-components";
import Title from "../Title";
import SkillBlock from "../Blocks/SkillBlock";


const SkillBlocksStyle = styled.section`
    padding: 10px 20px;
    width: 90%;
    min-height: 22vh;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .skillContent{
        padding-top: 4px;
        display:flex;
        align-items: center;
        gap: 2vw;
    }
    .figmaGit{
        display: flex;
        justify-content: space-between;
    }
    .jsGit{
        display: flex;
        flex-direction: column;
        gap: 2vw;
    }
    .htmlCss{
        display: flex;
        flex-direction: column;
        gap: 2vw;
    }

    @media screen and (min-width: 768px){
        width: 90vw;
        padding: 10px;

    }
    @media screen and (min-width: 768px) and (orientation: Landscape){
        width: 50vw;
        padding: 10px;
        .skillContent{
            gap: 10px;
        }
        .figmaGit{
            display: flex;
            justify-content: space-between;
        }
        .jsGit{
            gap: 10px;
        }
        .htmlCss{
            gap: 10px;
        }
    }
    @media screen and (min-width: 2560px) and (orientation: Landscape){
        width: 25.5vw;
        
    }
`
//por motivos desconhecidos o grid nao funcionou entao orientei a gambiarra, lamento rsrsrsrs
const SkillBlocks = () => {
    
    
    return(
        <SkillBlocksStyle>
            <Title>My Skills</Title>
            <div className="skillContent">
                <SkillBlock size={"gg"} align="right">
                    <h3>React</h3>
                    <p>Context API</p>
                    <p>Styled Components</p>
                    <p>React Router</p>
                </SkillBlock>
                <div className="htmlCss">
                    <SkillBlock size={"p"} align="center">
                        <h3>HTML</h3>
                    </SkillBlock>
                    <SkillBlock size={"m"} align="center">
                        <h3>CSS</h3>
                        <p>SCSS</p>
                    </SkillBlock>
                </div>
                <div className="jsGit">
                    <SkillBlock size={"g"} align="left">
                        <h3>Javascript</h3>
                        <p>API</p>
                    </SkillBlock>
                    <div className="figmaGit">
                        <SkillBlock size={"p"} align="center">
                            <h3>Figma</h3>
                        </SkillBlock>
                        <SkillBlock size={"p"} align="center">
                            <h3>GIT</h3>
                        </SkillBlock>
                    </div>
                </div>
            </div>
        </SkillBlocksStyle>
    )

}

export default SkillBlocks;
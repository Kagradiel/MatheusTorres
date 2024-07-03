import styled from "styled-components";
import Title from "../Title";
import SkillBlock from "../Blocks/SkillBlock";


const SkillBlocksStyle = styled.section`
    padding: 10px 20px;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .skillContent{
        display:flex;
        align-items: center;
        gap: 7px;
    }
    .figmaGit{
        display: flex;
        gap: 5px;
    }
    .jsGit{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .htmlCss{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
`
//por motivos desconhecidos o grid nao funcionou entao orientei a gambiarra, lamento rsrsrsrs
const SkillBlocks = () => {

    return(
        <SkillBlocksStyle>
            <Title>My Skills</Title>
            <div className="skillContent">
                <SkillBlock sizeH={3.5} sizeW={3} align="right">
                    <h3>React</h3>
                    <p>Context API</p>
                    <p>Styled Components</p>
                    <p>React Router</p>
                </SkillBlock>
                <div className="htmlCss">
                    <SkillBlock sizeH={1} sizeW={0.8} align="center">
                        <h3>HTML</h3>
                    </SkillBlock>
                    <SkillBlock sizeH={2} sizeW={0.8} align="center">
                        <h3>CSS</h3>
                        <p>SCSS</p>
                    </SkillBlock>
                </div>
                <div className="jsGit">
                    <SkillBlock sizeH={2} sizeW={2} align="left">
                        <h3>Javascript</h3>
                        <p>API</p>
                    </SkillBlock>
                    <div className="figmaGit">
                        <SkillBlock sizeH={1} sizeW={0.8} align="left">
                            <h3>Figma</h3>
                        </SkillBlock>
                        <SkillBlock sizeH={1} sizeW={0.8} align="center">
                            <h3>GIT</h3>
                        </SkillBlock>
                    </div>
                </div>
            </div>
        </SkillBlocksStyle>
    )

}

export default SkillBlocks;
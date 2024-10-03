import styled from "styled-components";
import Title from "../Title";
import ImageWorkBlock from "../Blocks/WorkBlock";
import { useSettingsContext } from "../../hooks/useSettingsContext";

const WorkBlockStyle = styled.section`
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .workBlockContainer {
    height: 25vh;
    width: 100%;
    display: flex;
    gap: 10px;
    .column {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 13px;
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: 15px;
    .workBlockContainer {
      width: 90vw;
      height: 33.3vh;
    }
  }
  @media screen and (min-width: 768px) and (orientation: Landscape) {
    margin-top: 0;
    .workBlockContainer {
      width: 50vw;
      height: 25vh;
      .column {
        width: 25vw;
        flex-direction: row;
      }
    }
  }
  @media screen and (min-width: 1024px) and (orientation: Landscape) {
    .workBlockContainer {
      height: 33.3vh;
    }
  }
  @media screen and (min-width: 2560px) and (orientation: Landscape) {
    .workBlockContainer {
      width: 20vw;
      height: 50.3vh;
      .column {
        flex-direction: column;
      }
    }
  }
`;

const WorkBlocks = () => {
  const { globalSettings } = useSettingsContext();

  return (
    <WorkBlockStyle>
      <div className="workTitle">
        <Title>{globalSettings.workblocks}</Title>
      </div>

      <div className="workBlockContainer">
        <div className="column">
          <ImageWorkBlock id="portfolio">React & Typescript</ImageWorkBlock>
          <ImageWorkBlock id="doce"> Figma Design </ImageWorkBlock>
        </div>
        <div className="column">
          <ImageWorkBlock id="trainer"> API .NET C# </ImageWorkBlock>
          <ImageWorkBlock id="ildo"> Landing Page </ImageWorkBlock>
        </div>
      </div>
    </WorkBlockStyle>
  );
};

export default WorkBlocks;

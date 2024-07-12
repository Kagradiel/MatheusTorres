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
    height: 40vh;
    width: 100%;
    display: flex;
    gap: 10px;
    .secondColumn {
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
        <ImageWorkBlock id="doce" />
        <div className="secondColumn">
          <ImageWorkBlock id="trainer" />
          <ImageWorkBlock id="ildo" />
        </div>
      </div>
    </WorkBlockStyle>
  );
};

export default WorkBlocks;

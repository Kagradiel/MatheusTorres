import styled from "styled-components";
import Card from "../../components/Card";
import SkillBlocks from "../../components/SkillBlocks";
import WorkBlocks from "../../components/WorkBlocks";
import { CommonDataProvider } from "../../context/CommonDataContext";

const HomeStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    min-height: 70vh;
    padding: 20px 0 0 0;
    .blocks {
      height: 80vh;
      //width: 92vw;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
  @media screen and (min-width: 768px) and (orientation: landscape) {
    padding: 0;
    min-height: 50vh;
    justify-content: space-evenly;
    .blocks {
      height: 80vh;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
  @media screen and (min-width: 2560px) and (orientation: landscape) {
    padding: 0;
    min-height: 50vh;
    .blocks {
      gap: 5vw;
      flex-direction: row;
    }
  }
`;

const Home = () => {
  return (
    <HomeStyle>
      <Card />
      <div className="blocks">
        <CommonDataProvider>
          <WorkBlocks />
        </CommonDataProvider>
        <SkillBlocks />
      </div>
    </HomeStyle>
  );
};

export default Home;

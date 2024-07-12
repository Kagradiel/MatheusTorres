import styled from "styled-components";
import Text from "../Text";
import ProfileImage from "../ProfileImage";
import SocialMedia from "../SocialMedia";
import { useSettingsContext } from "../../hooks/useSettingsContext";
import CardImage from "../../assets/images/ProfilePicture.webp";

const CardConfig = styled.section`
  background: ${(props) => props.$settings.linearGradient};
  box-shadow: ${(props) =>
    props.$settings.isDark === false ? "0px 1px 4px #929090" : ""};
  border-radius: 16px;
  min-height: 35vh;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 2vh 0;
  transition: 0.8s;

  @media screen and (min-width: 768px) {
    width: 90vw;
    height: 30vh;
    gap: 15px;
    padding: 6vh 0;
    margin: 10px 10px;
  }
  @media screen and (min-width: 768px) and (orientation: landscape) {
    width: 38vw;
    height: 66vh;
    padding: 0;
    margin: 10px 0 20px 1px;
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    height: 74vh;
    width: 30vw;
  }
  @media screen and (min-width: 2560px) and (orientation: landscape) {
    height: 60vh;
    width: 18vw;
    margin: 0;
  }
`;

const Card = () => {
  const { globalSettings } = useSettingsContext();

  return (
    <CardConfig $settings={globalSettings}>
      <ProfileImage imgPath={CardImage} alt="Picture" />
      <div>
        <Text keys="cardName">{globalSettings.cardName}</Text>
        <Text keys="cardType">{globalSettings.cardType}</Text>
      </div>
      <SocialMedia />
    </CardConfig>
  );
};

export default Card;

import styled from "styled-components";

const UserPhoto = styled.img`
  width: 5rem;
  height: 7rem;
  object-fit: cover;
  border-radius: 120px;
  @media screen and (min-width: 768px) {
    width: 10%;
    height: 8rem;
  }
  @media screen and (min-width: 768px) and (orientation: Landscape) {
    width: 20%;
    height: 7rem;
  }
`;

interface imageProps {
  imgPath: string;
  alt: string;
}

const ProfileImage = ({ imgPath, alt }: imageProps) => {
  return <UserPhoto src={imgPath} alt={alt} loading="lazy" />;
};

export default ProfileImage;

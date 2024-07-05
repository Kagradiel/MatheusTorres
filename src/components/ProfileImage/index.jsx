import styled from "styled-components";

const UserPhoto = styled.img`
    width: 23%;
    height: 28vw;
    object-fit: cover;
    border-radius: 120px;
    @media screen and (min-width: 768px) {
        width: 15%;
        height: 18vw;
    }
    @media screen and (min-width: 768px) and (orientation: Landscape) {
        width: 20%;
        height: 7rem;
    }

`

const ProfileImage = ({imgPath, alt}) => {
    return(
        <UserPhoto src={imgPath} alt={alt}/>
    )
}

export default ProfileImage;
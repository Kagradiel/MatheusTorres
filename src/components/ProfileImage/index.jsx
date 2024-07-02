import styled from "styled-components";

const UserPhoto = styled.img`
    width: 25%;
    height: 40%;
    object-fit: cover;
    border-radius: 120px;
`

const ProfileImage = ({imgPath}) => {
    return(
        <UserPhoto src={imgPath}/>
    )
}

export default ProfileImage;
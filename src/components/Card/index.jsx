import styled from "styled-components";
import Text from "../Text";
import ProfileImage from "../ProfileImage";
import SocialMedia from "../SocialMedia";


const CardConfig = styled.section`
    background: rgb(246,238,238);
    background: linear-gradient(52deg, rgba(246,238,238,1) 0%,
                                    rgba(243,236,236,1) 17%, 
                                    rgba(224,222,222,1) 40%, 
                                    rgba(239,237,237,1) 100%);
    border-radius: 16px;
    min-height: 35vh;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow:  0px  2px 4px #929090;
    padding-top: 20px;
`


const Card = () => {

    return(
        <CardConfig>
            <ProfileImage imgPath="src\assets\images\ProfilePicture.jpg" />
            <div>
                <Text>Hi, i'm <strong className="highlight">Matheus Torres</strong></Text>
                <Text>A <strong className="highlight">Front-End</strong> Developer</Text>
            </div>
            <SocialMedia/>
        </CardConfig>
    )

}

export default Card;
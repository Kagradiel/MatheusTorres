import styled from "styled-components";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Social = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30vw;
`

const SocialMedia = () => {

    return(
        <Social>
            <a href="">
                <FaLinkedin size={25} color="#000"/>
            </a>
            <a href="">
                <FaGithub  size={25} color="#000"/>
            </a>
            <a href="">
                <FaWhatsapp  size={25} color="#000"/>
            </a>
        </Social>
    )

}

export default SocialMedia;
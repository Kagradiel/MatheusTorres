import styled from "styled-components";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useSettingsContext } from "../../hooks/useSettingsContext";

const Social = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30vw;
    a > svg{
            width: 25px;
            height: 25px;
            color: ${props => props.$settings.blackOrWhite};     
    }
    @media screen and (min-width: 768px) {
        padding-top: 20px;
        width: 25vw;
        a > svg{
            width: 35px;
            height: 35px;
            color: ${props => props.$settings.blackOrWhite};     
        }
    }
    @media screen and (min-width: 768px) and (orientation: Landscape) {
        padding-top: 10px;
        justify-content: center;
        gap: 2.5vw;
        width: 20px;
        a > svg{
            width: 25px;
            height: 25px;
            color: ${props => props.$settings.blackOrWhite};     
        }
    }
    @media screen and (min-width: 1024px) and (orientation: Landscape) {
        
        a > svg{
            width: 35px;
            height: 35px;
            color: ${props => props.$settings.blackOrWhite};     
        }
    }
`

const SocialMedia = () => {
    const { globalSettings } = useSettingsContext();

    return (
        <Social $settings={globalSettings}>
            <a href="https://www.linkedin.com/in/omatheustorres" alt="Linkedin">
                <FaLinkedin />
            </a>
            <a href="https://github.com/Kagradiel" alt="Github">
                <FaGithub />
            </a>
            <a href="https://wa.me/5511971175223" alt="WhatsApp">
                <FaWhatsapp />
            </a>
        </Social>
    )

}

export default SocialMedia;
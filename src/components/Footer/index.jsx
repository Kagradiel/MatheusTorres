import styled from "styled-components";
import Text from "../Text"
import { useSettingsContext } from "../../hooks/useSettingsContext";

const FooterStyle = styled.section`
    padding-bottom: 10px;
    margin: 3vh 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 768px) and (orientation: landscape) {
        min-height: 5vh;
    }
`

const Footer = () => {
    
    const { globalSettings } = useSettingsContext();

    return(
        <FooterStyle>
            <Text>
                {globalSettings.footer}
            </Text>
        </FooterStyle>
    )

}

export default Footer;
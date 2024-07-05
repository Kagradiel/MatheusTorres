import styled from "styled-components";
import Text from "../Text"

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
    
    return(
        <FooterStyle>
            <Text>
                Created By <strong className="highlight">Matheus Torres</strong>
            </Text>
        </FooterStyle>
    )

}

export default Footer;
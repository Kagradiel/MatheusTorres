import styled from "styled-components";
import Text from "../Text"

const FooterStyle = styled.section`
    padding-bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
`

const Footer = () => {
    
    return(
        <FooterStyle>
            <Text>
                <p>Created By <strong className="highlight">Matheus Torres</strong></p>
            </Text>
        </FooterStyle>
    )

}

export default Footer;
import styled from "styled-components";
import LanguageSettings from "../LanguageSettings";
import ToggleButton from "../ToggleButton"


const HeadStyle = styled.div`
    padding: 15px 20px 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
        padding: 4vh 8vw 0 7vw; 
    }
    @media screen and (min-width: 768px) and (orientation: Landscape) {
        padding: 1vh 8vw 0 7vw; 
    }
`

const Header = () => {
    
    return(
        <HeadStyle>
            <ToggleButton />
            <LanguageSettings/>
        </HeadStyle>
    )

}

export default Header;
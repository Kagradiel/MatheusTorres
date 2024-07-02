import styled from "styled-components";
import LanguageSettings from "../LanguageSettings";
import ToggleButton from "../ToggleButton"


const HeadStyle = styled.div`
    padding: 15px 20px 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Header = () => {

    return(
        <HeadStyle>
            <ToggleButton/>
            <LanguageSettings/>
        </HeadStyle>
    )

}

export default Header;
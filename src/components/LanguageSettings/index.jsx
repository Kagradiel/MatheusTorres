import styled from "styled-components";
import { useSettingsContext } from "../../hooks/useSettingsContext";


const ToggleLanguage = styled.button`
    background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    display: flex;
    align-items: center;
    .langText{
        font-weight: 600;
        font-size: 0.9em;
        color: ${props => props.$settings.blackOrWhite};
    }
    .bar{
        margin: 0 2px;
        color: ${props => props.$settings.blackOrWhite};
    }
`

const LanguageSettings = () => {

    const { globalSettings } = useSettingsContext();

    return (
        <ToggleLanguage $settings={ globalSettings }>
            <p className="langText">PT</p>
            <p className="bar">-</p>
            <p className="langText">EN</p>
        </ToggleLanguage>
    )
}

export default LanguageSettings;
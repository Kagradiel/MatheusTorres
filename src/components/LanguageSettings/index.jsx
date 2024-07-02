import styled from "styled-components";


const ToggleLanguage = styled.button`
    background: none;
	color: inherit;
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
    }
    .bar{
        margin: 0 2px;
    }
`

const LanguageSettings = () => {
    return (
        <ToggleLanguage>
            <p className="langText">PT</p>
            <p className="bar">-</p>
            <p className="langText">EN</p>
        </ToggleLanguage>
    )
}

export default LanguageSettings;
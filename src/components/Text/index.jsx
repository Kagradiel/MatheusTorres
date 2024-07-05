import styled from "styled-components";
import { useSettingsContext } from "../../hooks/useSettingsContext";

const TextReceived = styled.p`
    font-size: 0.88em;
    font-weight: 400;
    margin: 6px;
    text-align: center;
    color: ${props => props.$settings.blackOrWhite};
    .highlight{
        font-weight: 600;
    }
    @media screen and (min-width: 768px) {
        font-size: 1.1em ;
    }
    @media screen and (min-width: 768px) and (orientation: Landscape) {
        font-size: .8em ;
    }
    @media screen and (min-width: 1024px) and (orientation: Landscape) {
        font-size: 1em ;
    }
    `

const Text = ({children}) => {
    
    const { globalSettings } = useSettingsContext();

    return(
        <TextReceived $settings={ globalSettings }>
            {children}
        </TextReceived>
    )
}

export default Text;
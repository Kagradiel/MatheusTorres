import styled from "styled-components";
import { useSettingsContext } from "../../../hooks/useSettingsContext";


const ImageWorkBlockStyle = styled.a`
    background-image: url(${props => props.$imageMobile});
    height: 100% ;
    width: 100%;
    background-size: contain;
    background-position: center center;
    border-radius: 5px;
    box-shadow: ${props => props.$settings.isDark === false ? "0px 1px 4px #929090": ""};
    @media screen and (min-width: 768px) and (orientation: landscape){
        background-image: url(${props => props.$imageDesktop});
    }

`

const ImageWorkBlock = ({size = "" , imageMobile, imageDesktop, altText, link}) => {
   
    const {globalSettings} = useSettingsContext();

    return(
        <ImageWorkBlockStyle 
            $settings={globalSettings}
            $imageMobile={imageMobile} 
            $imageDesktop={imageDesktop}
            $size={size}
            href={link}
            alt={altText}
        />
    )
}


export default ImageWorkBlock;
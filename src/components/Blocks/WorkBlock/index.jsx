import styled from "styled-components";


const ImageWorkBlockStyle = styled.div`
    background-image: url(${props => props.$imageMobile});
    height: ${props => props.$size === "large" ? "100%" : "48%"};
    width: 100%;
    background-size: contain;
    background-position: center center;
    border-radius: 5px;
    box-shadow: 0px 1px 4px #929090;
    @media screen and (min-width: 1024px){
        background-image: ${props => props.$imageDesktop};
    }
`

const ImageWorkBlock = ({size = "" , imageMobile, imageDesktop}) => {
   
    return(
        <ImageWorkBlockStyle 
            $imageMobile={imageMobile} 
            $imageDesktop={imageDesktop}
            $size={size}
        />
    )
}


export default ImageWorkBlock;
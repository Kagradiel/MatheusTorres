import styled from "styled-components";


const TitleStyle = styled.h2`
    font-weight: 400;
    font-family:"Darker Grotesque";
    font-size: 2rem;
`

const Title = ({children}) => {
    return(
        <TitleStyle>
            {children}
        </TitleStyle>
    )
}

export default Title;
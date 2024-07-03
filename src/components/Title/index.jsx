import styled from "styled-components";


const TitleStyle = styled.div`
    height: 7vh;
    width: auto;
    background: #e8e8e8;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 4px #929090;
    h2{
        font-weight: 400;
        font-family:"Darker Grotesque";
        font-size: 2rem;
    }
`

const Title = ({children}) => {
    return(
        
        <TitleStyle>
            <h2>
                {children}
            </h2>
        </TitleStyle>
    )
}

export default Title;
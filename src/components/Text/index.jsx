import styled from "styled-components";

const TextReceived = styled.p`
    font-size: 0.88em;
    font-weight: 400;
    margin: 6px;
    text-align: center;
    .highlight{
        font-weight: 600;
    }
`

const Text = ({children}) => {
    return(
        <TextReceived>
            {children}
        </TextReceived>
    )
}

export default Text;
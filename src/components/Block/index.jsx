import styled from "styled-components";


const BlockStyle = styled.div`
    height: 7vh;
    width: auto;
    background: ${props => props.$blockBg};
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Block = ({ blockBg = "#e8e8e8", children}) => {
    
    return(
        <BlockStyle $blockBg={blockBg}>
            {children}
        </BlockStyle>
    )
    
}

export default Block;
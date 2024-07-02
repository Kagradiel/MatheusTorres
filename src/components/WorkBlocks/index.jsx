import styled from "styled-components";
import Block from "../Block"
import Title from "../Title";


const WorkBlockStyle = styled.section`
    margin: 10px 20px;
    
`

const WorkBlocks = () => {
    return(
        <WorkBlockStyle>
            <Block>
                <Title>
                    What I've Done
                </Title>
            </Block>
        </WorkBlockStyle>
    )
}

export default WorkBlocks;
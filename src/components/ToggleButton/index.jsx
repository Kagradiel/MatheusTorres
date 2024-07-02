import styled from "styled-components";


const ToggleConfig = styled.div`
    background-color: #d9d9d9;
    width: 11vw;
    height: 2.8vh;
    border-radius: 12px;
    box-shadow: inset 0px 4px 4px #6d6b6b;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .circle{
        background-color: #f5f5f5;
        height: 73%;
        width:4.3vw;
        border-radius: 12px;
        margin: 1.8px;

    }
`

const ToggleButton = () => {

    return(
        <ToggleConfig>
            <div className="circle" />
        </ToggleConfig>
    )

}

export default ToggleButton;
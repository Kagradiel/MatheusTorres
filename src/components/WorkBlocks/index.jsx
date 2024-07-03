import styled from "styled-components";
import Title from "../Title";
import ImageWorkBlock from "../Blocks/WorkBlock";
import doceSaborMobile from "../../assets/images/DoceSaborMobile.svg"
import doceSaborDesktop from "../../assets/images/DoceSaborDesktop.svg"
import trainerCardMobile from "../../assets/images/TrainerCardMobile.svg"
import trainerCardDesktop from "../../assets/images/TrainerCardDesktop.svg"
import ildoMobile from "../../assets/images/IldoMobile.svg"
import ildoDesktop from "../../assets/images/IldoDesktop.png"


const WorkBlockStyle = styled.section`
    margin: 10px 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    
    .workBlockContainer{  
        height: 40vh;
        width: 100%;
        display: flex;
        gap: 10px;
        .secondColumn{
            height: 40vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 13px;
        }
    }
`

const WorkBlocks = () => {
    return (
        <WorkBlockStyle>
            <div>
                <Title>
                    What I've Done
                </Title>
            </div>
            <div className="workBlockContainer">
                <ImageWorkBlock id="doce" size="large" imageMobile={doceSaborMobile} imageDesktop={doceSaborDesktop} />
                <div className="secondColumn">
                    <ImageWorkBlock id="trainer" imageMobile={trainerCardMobile} imageDesktop={trainerCardDesktop}/>
                    <ImageWorkBlock id="ildo" imageMobile={ildoMobile} imageDesktop={ildoDesktop}/>
                </div>
            </div>
        </WorkBlockStyle>
    )
}

export default WorkBlocks;
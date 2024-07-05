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
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 13px;
        }
    }
    @media screen and (min-width: 768px) {
        
        margin-top: 15px;
        .workBlockContainer{
            width: 90vw;
            height: 33.3vh;
        }

    }
    @media screen and (min-width:768px) and (orientation: Landscape){
        margin-top: 0;
        .workBlockContainer{
            width: 50vw;
            height: 25vh;
        }

    }
    @media screen and (min-width:1024px) and (orientation: Landscape){
        margin-top: 0;
        .workBlockContainer{
            height: 33.3vh;

        }

    }
    @media screen and (min-width:2560px) and (orientation: Landscape){
        margin-top: 0;
        .workBlockContainer{
            width: 20vw;
            height: 50.3vh;
        }

    }
`

const WorkBlocks = () => {
    return (
        <WorkBlockStyle>
            <div className="workTitle">
                <Title>
                    What I've Done
                </Title>
            </div>
            <div className="workBlockContainer">
                <ImageWorkBlock id="doce" size="large" imageMobile={doceSaborMobile} imageDesktop={doceSaborDesktop} altText="Ana Doce Sabor" link="https://www.figma.com/design/sbqNbcD3tpIA8Y7tCeTu4h/Ana-Doce-Sabor?node-id=267-2&t=EoFF274zxt3qY8U3-1" />
                <div className="secondColumn">
                    <ImageWorkBlock id="trainer" imageMobile={trainerCardMobile} imageDesktop={trainerCardDesktop} altText="Trainer Card" link="https://github.com/Kagradiel/TrainerCard-React"/>
                    <ImageWorkBlock id="ildo" imageMobile={ildoMobile} imageDesktop={ildoDesktop} altText="Psicologo Ildo" link="https://neuropsicologoildo.com.br/" />
                </div>
            </div>
        </WorkBlockStyle>
    )
}

export default WorkBlocks;
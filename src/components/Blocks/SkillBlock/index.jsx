import styled from "styled-components";

const SkillBlockStyle = styled.div`
  text-align: ${props => props.$align};
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 20px;
  padding: 4px 10px;
  background-color: #e8e8e8;
  width: ${props => props.$width * 16 + "vw"};
  height: ${props => props.$height * 7.5 + "vw"};
  border-radius: 7px;

  p {
    font-size: 0.67em;
    font-weight: 600;
    margin: 0;
  }

  h3 {
    margin: 0;
    font-size: 1em;
    font-weight: 800;
  }
`;

const SkillBlock = ({ sizeH, sizeW, align, children }) => {
    return (
        <SkillBlockStyle $align={align} $height={sizeH} $width={sizeW}>
            {children}
        </SkillBlockStyle>
    );
};

export default SkillBlock;
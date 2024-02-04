import styled from '@emotion/styled';
import image from '../../images/car.jpg';



export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  padding: 20px;
  max-width: auto;
  min-height: calc(100vh - 168px);

  background-image: url(${image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  @media screen and (min-width: 760px) {
    min-height: calc(100vh - (95px + 84px));
  }
`;

export const TitleContainer = styled.div`
margin-left: auto;

  margin-top: 150px;
  margin-bottom: 250px;

`
export const Span = styled.span`
  font-weight: bold;
  font-size: 70px;
  display: block;
  color: black;
    margin-right: 150px;
`
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  min-width: 260px;
  border-radius: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  color: #333;
  font-family: ManropeSemiBold;
  margin-bottom: 10px;
`;

export const SectionText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #666;
`;

export const SectionWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  padding: 0 40px;
  min-width: 200px;

    display: flex;
    margin-top: 60px;
    margin-bottom: 40px;
    padding: 0 40px;
    gap: 40px;
    width: auto;
  
`;
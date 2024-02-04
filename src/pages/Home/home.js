import SwiperList from '../../components/Swiper/swiper';
import React from 'react';
import { Container, Section, SectionText, SectionTitle, SectionWrapper, Span } from './home.styled';
import { TitleContainer } from './home.styled';

function Home() {


  

  return (
    <>
      <Container>
        <TitleContainer><Span>Cars for rent
        </Span> 
        </TitleContainer>
        <SwiperList />
        <SectionWrapper>
          <Section>
            <SectionTitle>
             Services
            </SectionTitle >
            <SectionText >Regarding our services, we guarantee attractive and competitive prices, as well as various discounts for regular customers. Our company stands out from others due to the high level of service and the desire to meet the needs of each client.</SectionText>
          </Section>
         <Section>
            <SectionTitle >
              About Us
            </SectionTitle>
            <SectionText >The car rental company provides high-quality services to its customers. Our goal is to provide convenience and reliability in renting vehicles. We offer a wide selection of cars of different classes to meet the needs of every customer.</SectionText>
          </Section>
          <Section>
            <SectionTitle >
              Discounts
            </SectionTitle>
            <SectionText>We are proud of our reputation as a reliable partner in the field of car rental. Our team of specialists is always ready to help and answer all questions. Entrust your travels to us and get an excellent experience using our services.</SectionText>
          </Section>
        </SectionWrapper>
        </Container>
    
    </>
  );
}

export default Home;

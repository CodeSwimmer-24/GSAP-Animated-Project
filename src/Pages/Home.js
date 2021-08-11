import React from 'react';
import styled from 'styled-components';
import About from '../Sections/About';
import Contact from '../Sections/Contact';
import Hero from '../Sections/Hero';
import Services from '../Sections/Services';
import Testimonimals from '../Sections/Testimonimals';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

function Home() {
    return (
        <Container>
            <Hero />
            <About />
            <Services />
            <Testimonimals />
            <Contact />
        </Container>
    )
}

export default Home

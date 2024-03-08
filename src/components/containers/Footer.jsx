import React from 'react';
import { Container } from 'react-bootstrap';
import SocialMediaContainer from './SocialMediaContainer';

export default function Footer() {
    return (
        <Container fluid className='d-flex justify-content-center align-items-end'>
            <SocialMediaContainer />
        </Container>
    );
}
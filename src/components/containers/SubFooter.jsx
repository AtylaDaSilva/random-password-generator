import React from 'react';
import { Container } from 'react-bootstrap';
import SubFooterAccordion from '../accordions/SubFooterAccordion/SubFooterAccordion';

export default function SubFooter({ state, callbacks }) {
    return (
        <Container fluid className='p-0 my-3 d-flex justify-content-center'>
            <section id='subfooter-accordion'>
                <SubFooterAccordion state={state} callbacks={callbacks} />
            </section>
        </Container>
    );
}
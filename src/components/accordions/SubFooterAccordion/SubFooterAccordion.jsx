import React from 'react';
import { Accordion } from 'react-bootstrap';
import AccordionItemAbout from './AccordionItemAbout';

export default function SubFooterAccordion() {
    return (
        <Accordion >
            <AccordionItemAbout />
        </Accordion>
    );
}
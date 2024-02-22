import React from 'react';
import { Accordion } from 'react-bootstrap';
import AccordionItemAbout from './AccordionItemAbout';
import AccordionItemHistory from './AccordionItemHistory';

export default function SubFooterAccordion({state}) {
    return (
        <Accordion >
            <AccordionItemHistory history={state.history} />
            <AccordionItemAbout />
        </Accordion>
    );
}
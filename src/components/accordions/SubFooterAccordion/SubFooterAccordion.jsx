import React from 'react';
import { Accordion } from 'react-bootstrap';
import AccordionItemAbout from './AccordionItemAbout';
import AccordionItemHistory from './AccordionItemHistory';
import AccordionItemChangeLog from './AccordionItemChangeLog';

export default function SubFooterAccordion({ state, callbacks }) {
    return (
        <Accordion >
            <AccordionItemHistory history={state.history} callbacks={callbacks} />
            <AccordionItemAbout />
            <AccordionItemChangeLog changes={state.changes} />
        </Accordion>
    );
}
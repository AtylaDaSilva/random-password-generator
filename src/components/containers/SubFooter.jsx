import React from 'react';
import SubFooterAccordion from '../accordions/SubFooterAccordion/SubFooterAccordion';

export default function SubFooter({state}) {
    return (
        <section>
            <section id='accordion-section' className='mt-5 flex-grow-1'>
                <SubFooterAccordion state={state} />
            </section>
        </section>
    );
}
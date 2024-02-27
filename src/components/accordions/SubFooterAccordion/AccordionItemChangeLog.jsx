import React from 'react';
import { Accordion } from 'react-bootstrap';

export default function AccordionItemChangeLog({changes}) {
    const data = Object.entries(changes);
    let listItems;

    if (data.length > 0) {
        listItems = data.map((version, versionIndex) => {
            return (
                <li key={versionIndex}>
                    {version[0]}
                    <ul>
                        {version[1].map((change, changeIndex) => <li key={changeIndex}>{change}</li>)}
                    </ul>
                </li>
            );
        })
    } else {
        listItems = <li>No change log history</li>;
    }
    
    return (
        <Accordion.Item eventKey={2}>
            <Accordion.Header>
                Change Log
            </Accordion.Header>
            <Accordion.Body>
                <ul>
                    {listItems}
                </ul>
            </Accordion.Body>
        </Accordion.Item>
    );
}
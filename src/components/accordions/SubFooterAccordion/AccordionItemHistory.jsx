import React from 'react';
import { Accordion } from 'react-bootstrap';
import CopyToClipboard from '../../buttons/CopyToClipboard';

export default function AccordionItemHistory({ history, callbacks }) {
    // Iterate through history to display the newer passwords in the top of the list.
    // This is faseter than using Array.prototype.map and Array.prototype.reverse.
    let historyElement = [];

    if (history.length > 0) {
        for (let i = history.length - 1; i >= 0; i--) {
            historyElement.push(
                <li key={i}>
                    <CopyToClipboard
                        btnVariant="link"
                        className="fs-6"
                        copyContent={history[i][0]}
                        callbacks={callbacks}
                    />
                    {`${history[i][0]}`}<i>{` @ ${history[i][1]}`}</i>
                </li>
            );
        }
    } else {
        historyElement.push(<li key={0} type='none'>No history</li>);
    }

    return (
        <Accordion.Item eventKey={0}>
            <Accordion.Header>
                History
            </Accordion.Header>
            <Accordion.Body>
                <ul>
                    { historyElement }
                </ul>
            </Accordion.Body>
        </Accordion.Item>
    );
}
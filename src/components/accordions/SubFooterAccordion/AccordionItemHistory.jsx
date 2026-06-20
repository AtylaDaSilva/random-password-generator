import React from 'react';
import { Accordion } from 'react-bootstrap';
import CopyToClipboard from '../../buttons/CopyToClipboard';

export default function AccordionItemHistory({ history, callbacks }) {
    let historyElements = [];

    if (history.length > 0) {
        for (let i = history.length - 1; i >= 0; i--) {
            historyElements.push(
                <li key={i} className="history-item">
                    <span className="history-pass">{history[i][0]}</span>
                    <div className="history-actions">
                        <span className="history-meta">{history[i][1]}</span>
                        <CopyToClipboard
                            btnVariant="link"
                            className="fs-6 p-0 border-0"
                            copyContent={history[i][0]}
                            callbacks={callbacks}
                        />
                    </div>
                </li>
            );
        }
    } else {
        historyElements.push(
            <li key={0} className="history-item justify-content-center text-muted">
                No history yet
            </li>
        );
    }

    return (
        <Accordion.Item eventKey={0}>
            <Accordion.Header>
                History
            </Accordion.Header>
            <Accordion.Body className="p-3">
                <ul className="history-list">
                    { historyElements }
                </ul>
            </Accordion.Body>
        </Accordion.Item>
    );
}
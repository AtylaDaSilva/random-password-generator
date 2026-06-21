import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import CopyToClipboard from '../buttons/CopyToClipboard';

export default function PasswordHistoryModal({ show, onHide, history, callbacks }) {
    let listItems;
    if (history && history.length > 0) {
        listItems = [...history].reverse().map((entry, index) => {
            const password = entry[0];
            const time = entry[1];
            return (
                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center bg-transparent border-secondary-subtle">
                    <div className="text-break me-3">
                        <small className="text-muted d-block">{time}</small>
                        <span className="fw-bold me-2 text-light">{password}</span>
                    </div>
                    <CopyToClipboard
                        btnVariant="outline-secondary"
                        className="btn-sm border-0"
                        tooltip={{ title: "Copy", placement: "top" }}
                        copyContent={password}
                        callbacks={callbacks}
                    />
                </ListGroup.Item>
            );
        });
    } else {
        listItems = <p className="text-muted text-center mt-4">No password history available.</p>;
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            className="changelog-modal"
        >
            <Modal.Header closeButton className="border-0 pb-2">
                <Modal.Title className="fw-bold fs-4">Password History</Modal.Title>
            </Modal.Header>
            <Modal.Body className="py-2" style={{ maxHeight: '55vh', overflowY: 'auto' }}>
                {history && history.length > 0 ? (
                    <ListGroup variant="flush">
                        {listItems}
                    </ListGroup>
                ) : (
                    listItems
                )}
            </Modal.Body>
            <Modal.Footer className="border-0 pt-2">
                {history && history.length > 0 && (
                    <Button variant="outline-danger" onClick={() => callbacks.setHistory([])} className="me-auto btn-sm fw-semibold">
                        Clear History
                    </Button>
                )}
                <Button variant="primary" onClick={onHide} className="px-4 fw-semibold border-0 btn-accent">
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

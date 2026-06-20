import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ChangelogModal({ show, onHide, changes }) {
    const data = Object.entries(changes || {});
    
    let listItems;
    if (data.length > 0) {
        listItems = data.map((version, versionIndex) => {
            return (
                <div key={versionIndex} className="mb-4">
                    <h5 className="fw-bold text-accent mb-2">v{version[0]}</h5>
                    <ul className="ps-3 mb-0">
                        {version[1].filter(change => change.trim() !== "").map((change, changeIndex) => (
                            <li key={changeIndex} className="mb-1 text-secondary" style={{ fontSize: '0.95rem' }}>{change}</li>
                        ))}
                    </ul>
                </div>
            );
        });
    } else {
        listItems = <p className="text-muted">No change log history available.</p>;
    }

    return (
        <Modal 
            show={show} 
            onHide={onHide} 
            centered
            className="changelog-modal"
        >
            <Modal.Header closeButton className="border-0 pb-2">
                <Modal.Title className="fw-bold fs-4">What's New</Modal.Title>
            </Modal.Header>
            <Modal.Body className="py-2" style={{ maxHeight: '55vh', overflowY: 'auto' }}>
                {listItems}
            </Modal.Body>
            <Modal.Footer className="border-0 pt-2">
                <Button variant="primary" onClick={onHide} className="px-4 fw-semibold border-0 btn-accent">
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

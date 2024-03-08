import { React } from 'react';
import { Toast } from 'react-bootstrap';
import { nanoid } from 'nanoid';

export default function BasicToast({ toast, setToastState }) {
    return (
        <Toast
            id={`toast${nanoid()}`}
            show={toast.show}
            autohide
            delay={3000}
            className='border border-primary'
            onClose={() => setToastState(currState => {
                return { ...currState, show: !currState.show }
            })}
        >
            <Toast.Body>
                { toast.body }
            </Toast.Body>
        </Toast>
    );
}
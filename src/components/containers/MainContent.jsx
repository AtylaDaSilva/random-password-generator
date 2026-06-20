import React from 'react';
import PasswordForm from '../forms/PasswordForm';

export default function MainContent({ state, callbacks }) {
    return (
        <main
            id='main-content'
            className="d-flex flex-column justify-content-start"
        >
            <h1 className='mb-4 text-center fs-2'>Random Password Generator</h1>

            <PasswordForm state={state} callbacks={callbacks} />
        </main>
    );
}
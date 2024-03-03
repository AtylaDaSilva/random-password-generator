import React from 'react';
import PasswordForm from '../forms/PasswordForm';

export default function MainContent({modules, formData, callbacks}) {
    return (
        <main
        id='main-content'
            className="p-3 border border-primary rounded-3 d-flex flex-column justify-content-start"
        >
            <h1 className='mb-3 text-center fs-2'>Random Password Generator</h1>

            <PasswordForm modules={modules} formData={formData} callbacks={callbacks} />
        </main>
    );
}
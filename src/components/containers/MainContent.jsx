import React from 'react'
import PasswordForm from '../forms/PasswordForm';

export default function MainContent({modules, formData, callbacks}) {
    return (
        <div
            id='main-container'
            className="container border border-primary rounded-3 d-flex flex-column justify-content-start mt-5"
        >

            <header id='main-container-header'>
                <h1 className='text-center fs-2'>Random Password Generator</h1>
            </header>

            <main id='main-container-body' className='d-flex align-items-center justify-content-center flex-grow-1'>
                <PasswordForm modules={modules} formData={formData} callbacks={callbacks} />
            </main>

        </div>
    );
}
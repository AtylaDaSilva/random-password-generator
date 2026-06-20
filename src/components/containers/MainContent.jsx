import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';
import PasswordForm from '../forms/PasswordForm';
import ChangelogModal from '../overlays/ChangelogModal';
import changesData from '../../changes.json';

export default function MainContent({ state, callbacks }) {
    const [showChangelog, setShowChangelog] = useState(false);

    // Retrieve the latest version dynamically from the changes object keys
    const currentVersion = Object.keys(changesData || {})[0] || "3.2.0";
    console.log("DEBUG: changesData =", changesData, "currentVersion =", currentVersion);

    return (
        <main
            id='main-content'
            className="d-flex flex-column justify-content-start"
        >
            <h1 className='mb-4 text-center fs-2 d-flex align-items-center justify-content-center flex-wrap gap-2'>
                <span>Random Password Generator</span>
                <Badge
                    pill
                    bg=""
                    className="version-badge clickable fs-6 px-3 py-1 fw-semibold"
                    onClick={() => setShowChangelog(true)}
                >
                    v{currentVersion}
                </Badge>
            </h1>

            <PasswordForm state={state} callbacks={callbacks} />

            <ChangelogModal
                show={showChangelog}
                onHide={() => setShowChangelog(false)}
                changes={state.changes}
            />
        </main>
    );
}
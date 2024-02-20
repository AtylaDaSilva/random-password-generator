import React from 'react';

export default function Link({ children, href, className, tooltip }) {
    return (
        <a
            href={href}
            target='_blank'
            className={className}
            data-bs-toggle="tooltip"
            data-bs-title={tooltip?.title}
            data-bs-placement={tooltip?.placement}
        >
            {children}
        </a>
    );
}
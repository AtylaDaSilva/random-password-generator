import React from 'react';
import OverlayTooltip from '../overlays/OverlayTooltip';

export default function Link({ children, href, className, tooltip }) {
    return (
        (tooltip)
            ? (
                <OverlayTooltip
                    options={{ title: tooltip?.title, placement: tooltip?.placement }}
                >
                    <a
                        href={href}
                        target='_blank'
                        className={className}
                    >
                        {children}
                    </a>
                </OverlayTooltip>
            )
            : (
                <a
                    href={href}
                    target='_blank'
                    className={className}
                >
                    {children}
                </a>
            )
    );
}
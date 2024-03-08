import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { nanoid } from 'nanoid';

export default function OverlayTooltip({children, options}) {
    const tooltip = (
        <Tooltip id={nanoid()}>
            { options.title }
        </Tooltip>
    );
    return (
        <OverlayTrigger overlay={tooltip} placement={options?.placement || "bottom"}>
            { children }
        </OverlayTrigger>
    );
}
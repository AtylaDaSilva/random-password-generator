import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { nanoid } from 'nanoid';

export default function OverlayPopover({ children, options }) {
    const overlay = (
        <Popover id={nanoid()}>
            <Popover.Header as="h3">{options?.header}</Popover.Header>
            <Popover.Body>{options?.body}</Popover.Body>
        </Popover>
    );

    return (
        <OverlayTrigger
            trigger={options?.trigger || "click"}
            placement={options?.placement || "top"}
            overlay={overlay}
        >
            {children}
        </OverlayTrigger>
    );
}
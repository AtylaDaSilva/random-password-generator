import React from 'react';
import Link from '../buttons/Link';

export default function SocialMediaContainer() {
    return (
        <div id='social-media-container'>
            <Link
                href="https://github.com/AtylaDaSilva"
                tooltip={{ title: "GitHub", placement: "top" }}
                className="mx-2"
            >
                <i className="bi bi-github fs-3"></i>
            </Link>

            <Link
                href="https://www.linkedin.com/in/atyla-mendes-da-silva-39a21018b/"
                tooltip={{ title: "LinkedIn", placement: "top" }}
                className="mx-2"
            >
                <i className="bi bi-linkedin fs-3"></i>
            </Link>
        </div>
    );
}
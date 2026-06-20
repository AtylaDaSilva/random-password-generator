import React from 'react';
import Link from '../buttons/Link';

export default function SocialMediaContainer() {
    return (
        <div className="social-media-links">
            <Link
                href="https://github.com/AtylaDaSilva"
                tooltip={{ title: "GitHub", placement: "bottom" }}
                className="social-media-link"
            >
                <i className="bi bi-github"></i>
            </Link>

            <Link
                href="https://www.linkedin.com/in/atyla-mendes-da-silva-39a21018b/"
                tooltip={{ title: "LinkedIn", placement: "bottom" }}
                className="social-media-link"
            >
                <i className="bi bi-linkedin"></i>
            </Link>
        </div>
    );
}
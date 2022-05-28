import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

export const Menu = () => {
    return (
        <nav className="Menu">
            <ul className="Menu-ul">
                <li className="Menu-li">
                    <Link to="#">
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="4" height="19" rx="2" fill="white"/>
                            <rect x="7" y="4" width="4" height="15" rx="2" fill="white"/>
                            <rect x="14" y="11" width="4" height="8" rx="2" fill="white"/>
                        </svg>
                    </Link>
                </li>
                <li className="Menu-li">
                    <Link to="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.853 11.2536C11.7169 11.5071 11.5025 11.7213 11.2492 11.8579L6.43893 14.4112C5.85482 14.7234 5.19239 14.0801 5.52318 13.4955L8.07488 8.68103C8.21096 8.4275 8.42492 8.21337 8.67825 8.07676L13.489 5.52347C14.0735 5.192 14.7351 5.85495 14.4043 6.43952L11.853 11.2536ZM0 9.964C0 15.4597 4.46798 19.9275 9.96377 19.9275C15.46 19.9275 19.9275 15.4597 19.9275 9.964C19.9275 4.46788 15.46 0 9.96377 0C4.46798 0 0 4.46788 0 9.964Z" fill="#E7F1FF"/>
                        </svg>
                    </Link>
                </li>
                <li className="Menu-li">
                    <Link to="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M19.1833 20.3891H1.67161C1.24994 20.3891 0.92749 20.0666 0.92749 19.6449C0.92749 14.3865 4.30085 11.4844 10.4275 11.4844C16.5541 11.4844 19.9275 14.3865 19.9275 19.6449C19.9275 20.0666 19.605 20.3891 19.1833 20.3891Z" fill="#E7F1FF"/>
                        <path d="M10.4275 10.3929C7.69902 10.3929 5.49146 7.98693 5.49146 5.03524C5.49146 2.15796 7.62461 0 10.4275 0C13.2303 0 15.3635 2.15796 15.3635 5.03524C15.3635 7.98693 13.1559 10.3929 10.4275 10.3929Z" fill="#E7F1FF"/>
                    </svg>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
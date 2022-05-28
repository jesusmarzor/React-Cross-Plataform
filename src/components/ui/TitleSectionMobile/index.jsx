import React from "react";
import './styles.css';

export const TitleSectionMobile = ({ title, description }) => {
    return(
        <div className="TitleSectionMobile">
            <h1 className="TitleSectionMobile-title">{title}</h1>
            <p className="TitleSectionMobile-description">{description}</p>
        </div>
    )
}
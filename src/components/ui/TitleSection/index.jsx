import React from "react";
import './styles.css';

export const TitleSection = ({ title }) => {
    return(
        <div className="TitleSection">
            <h1 className="TitleSection-title">{title}</h1>
        </div>
    )
}
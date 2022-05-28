import React from "react";
import { useTranslation } from "react-i18next";
import { Pie } from "react-chartjs-2";
import { OPTIONS_PIE, DATA_PIE } from "../../../utils/Constants";
import './styles.css';
import { usePie } from "../../../hooks/usePie";

export const Conversion = () => {
    const { t } = useTranslation();
    const data = usePie({DATA_PIE});

    return(
        <div className="Conversion">
            <header className="Conversion-header">
                <h2 className="Conversion-title">{t('conversion_title')}</h2>
                <button className="Conversion-button">...</button>
            </header>
            <div className="Conversion-pie">
                <Pie 
                    data={data} 
                    options={OPTIONS_PIE}
                />
            </div>
        </div>
    )
}
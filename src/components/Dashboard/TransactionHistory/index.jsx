import React from "react"
import { useTranslation } from "react-i18next";
import { useLine } from "../../../hooks/useLine";
import { Line } from "react-chartjs-2";
import './styles.css';
import { COLOR_LINE, DATA_TRANSACTION_HISTORY, OPTIONS_LINE } from "../../../utils/Constants";

export const TransactionHistory = () => {
    const { t } = useTranslation();
    const data = useLine({COLOR_LINE, DATA_LINE: DATA_TRANSACTION_HISTORY});
    return(
        <div className="TransactionHistory">
            <h2 className="TransactionHistory-title">{t('transactions_last_year')}</h2>
            <nav className="TransactionHistory-menu">
                <ul className="TransactionHistory-ul">
                    <li className="TransactionHistory-li">
                        <button className="TransactionHistory-button isActive">
                            {t('monthly')}
                        </button>
                    </li>
                    <li className="TransactionHistory-li">
                        <button className="TransactionHistory-button">
                            {t('daily')}
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="TransactionHistory-line">
                <Line 
                    data={data} 
                    options={OPTIONS_LINE}
                />
            </div>
        </div>
    )
}
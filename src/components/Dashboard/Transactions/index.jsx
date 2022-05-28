import React from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";

export const Transactions = ({number, description}) => {
    const { t } = useTranslation();
    return(
        <section className="Transactions">
            <h2 className="Transactions-title">{t('transactions_title')}</h2>
            <div className="Transactions-number">
                <p>{number}</p>
            </div>
            <p className="Transactions-description">{description}</p>
        </section>
    )
}
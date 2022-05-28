import React from "react";
import { useTranslation } from "react-i18next";
import { TitleSection } from "../ui/TitleSection";
import { TRANSACTIONS } from '../../utils/Constants';
import { Transactions } from "./Transactions";
import { Conversion } from "./Conversion";
import { WeeklyExpenses } from "./WeeklyExpenses";
import { TransactionHistory } from "./TransactionHistory";
import { TitleSectionMobile } from "../ui/TitleSectionMobile";
import './styles.css';

export const Dashboard = () => {
    const { t } = useTranslation();
    return(
        <div className="Dashboard">
            <TitleSection title={t('dashboard_title')}/>
            <TitleSectionMobile title={t('transactions_history_title')} description={t('transactions_history_description')}/>
            <section className="Dashboard-section">
                <div className="Dashboard-firstSection">
                    <div className="Dashboard-transactions">
                    {
                        TRANSACTIONS.map( ({id, number, description}) => {
                            return(
                                <Transactions 
                                    key={id}
                                    number={number} 
                                    description={description}
                                />
                            )
                        })
                    }
                    </div>
                    <Conversion/>
                    <TransactionHistory/>
                </div>
                <div className="Dashboard-secondSection">
                    <WeeklyExpenses/>
                </div>
            </section>
        </div>
    )
}
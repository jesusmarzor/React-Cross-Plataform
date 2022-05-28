import React from "react";
import { useTranslation } from "react-i18next";
import { Line } from "react-chartjs-2";
import { LANGUAGES, OPTIONS_LINE, COLOR_LINE, DATA_WEEKLY_EXPENSES } from "../../../utils/Constants";
import { useLine } from "../../../hooks/useLine";
import './styles.css';

export const WeeklyExpenses = () => {
    const { t, i18n } = useTranslation();
    const data = useLine({COLOR_LINE, DATA_LINE: DATA_WEEKLY_EXPENSES});
    const calcMoney = (money) => {
        switch(i18n.language){
            case LANGUAGES.EN:
                return `$${money}`;
            default:
                return `$${money}`;
        }
    }
    const changeDate = () => console.log("without implement");
    return (
        <div className="WeeklyExpenses">
            <header className="WeeklyExpenses-header">
                <h2 className="WeeklyExpenses-title">{t('weekly_expenses')}</h2>
                <input className="WeeklyExpenses-date" onChange={changeDate} type="date" data-date-format="MMMM, DD YYYY" value={"2019-08-05"}/>
            </header>
            <div className="WeeklyExpenses-line">
              <Line options={OPTIONS_LINE} data={data} />
            </div>
            <footer className="WeeklyExpenses-footer">
                <h2 className="WeeklyExpenses-revenue">{t('total_revenue')}</h2>
                <p className="WeeklyExpenses-money">{calcMoney(789)}</p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M4 6.66667V1.33334" stroke="#4AAF05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 3.33334L4 1.33334L6 3.33334" stroke="#4AAF05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="WeeklyExpenses-percentage">7.00%</span>
                </p>
            </footer>
        </div>
    )
}
import React from 'react'
import './styles.css'
//import { Bar } from 'react-chartjs-2'
//import Box from '../components/box/Box'
//import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components1/dashboard-wrapper/DashboardWrapper'
import SummaryBox, { SummaryBoxSpecial } from '../components1/summary-box/SummaryBox'
import { colors, data } from '../constants'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
   PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
//import OverallList from '../components1/overall-list/OverallList'
//import RevenueList from '../components/revenue-list/RevenueList'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

console.log(data)
const Dashboard = () => {
    return (
        // <DashboardWrapper>
                <div className="main_wrapper">
                            {
                                data.summary.map((item, index) => (
                                    <div key={`summary-${index}`} className="secondary_wrapper">
                                        <SummaryBox item={item} />
                                    </div>
                                ))
                            }                 
                </div>
        // </DashboardWrapper>
    )
}

export default Dashboard


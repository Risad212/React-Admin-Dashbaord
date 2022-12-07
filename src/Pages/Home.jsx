import React from 'react';
import Chart from '../Components/chart/Chart';
import FeatureInfo from '../Components/featureinfo/FeatureInfo';
import './home.css';
import { UserData } from '../Data/UserAnalyticsData';

const Home = () => {
    return (
        <div className='home'>
           <FeatureInfo />
           <Chart data={UserData} title="User Analytics" grid dataKey='Active User'/>
        </div>
    );
};

export default Home;
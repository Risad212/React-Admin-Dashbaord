import React from 'react';
import Chart from '../../Components/chart/Chart';
import FeatureInfo from '../../Components/featureinfo/FeatureInfo';
import './home.css';
import { UserData } from '../../Data/UserAnalyticsData';
import WidgetLg from '../../Components/widgetLg/WidgetLg';
import WidgetSm from '../../Components/widgetSm/WidgetSm';

const Home = () => {
    return (
        <div className='home'>
           <FeatureInfo />
           <Chart data={UserData} title="User Analytics" grid dataKey='Active User'/>
           <div className="homeWidget">
             <WidgetSm />
             <WidgetLg />
           </div>
        </div>
    );
};

export default Home;
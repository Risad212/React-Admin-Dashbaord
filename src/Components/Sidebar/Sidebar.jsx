import React from 'react';
import './Sidebar.css';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';


const Sidebar = () => {
    return (
        <div className='sidebar'>
           <div className="sidebarWrapper">
              <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Dashboard</h3>
                 <ul className="sidebarList">
                    <li className="sidebarListItem active"><LineStyleIcon className='sidebarIcon'/>Home</li>
                    <li className="sidebarListItem"><TimelineIcon className='sidebarIcon'/>Analytics</li>
                    <li className="sidebarListItem"><TrendingUpIcon className='sidebarIcon'/>Sales</li>
                 </ul>
              </div>
              {/*-- menu --*/}
              <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Quick Menu</h3>
                 <ul className="sidebarList">
                    <li className="sidebarListItem"><LineStyleIcon className='sidebarIcon'/>Home</li>
                    <li className="sidebarListItem"><TimelineIcon className='sidebarIcon'/>Analytics</li>
                    <li className="sidebarListItem"><TrendingUpIcon className='sidebarIcon'/>Sales</li>
                 </ul>
              </div>
              {/*-- menu --*/}
              <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Notification</h3>
                 <ul className="sidebarList">
                    <li className="sidebarListItem"><LineStyleIcon className='sidebarIcon'/>Home</li>
                    <li className="sidebarListItem"><TimelineIcon className='sidebarIcon'/>Analytics</li>
                    <li className="sidebarListItem"><TrendingUpIcon className='sidebarIcon'/>Sales</li>
                 </ul>
              </div>
              {/*-- menu --*/}
              <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Staff</h3>
                 <ul className="sidebarList">
                    <li className="sidebarListItem"><LineStyleIcon className='sidebarIcon'/>Home</li>
                    <li className="sidebarListItem"><TimelineIcon className='sidebarIcon'/>Analytics</li>
                    <li className="sidebarListItem"><TrendingUpIcon className='sidebarIcon'/>Sales</li>
                 </ul>
              </div>
            </div> 
        </div>
    );
};

export default Sidebar;
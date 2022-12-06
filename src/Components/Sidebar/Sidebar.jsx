import React from 'react';
import './Sidebar.css';
import LineStyleIcon from '@material-ui/icons/LineStyle';
// import LineStyleIcon from '@mui/icons-material/LineStyle';
const Sidebar = () => {
    return (
        <div className='sidebar'>
           <div className="sidebarWrapper">
              <div className="sidebarMenu">
                 <h3 className="sidebarTitle">Dashboard</h3>
                 <ul className="sidebarList">
                    <li className="sidebarListItem"><LineStyleIcon /></li>
                 </ul>
              </div>
            </div> 
        </div>
    );
};

export default Sidebar;
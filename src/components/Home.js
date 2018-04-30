import React from "react";

import Menu from "./Menu";
import SearchMenu from "./SearchMenu";
import SideNav from "./SideNav";
import Dashboard from "./Dashboard";

export default class Home extends React.Component {

    

    render() {
        return (
            <div>
                <Menu />
                <SearchMenu />
                <SideNav />
                
                <div className="content-dashboard">
                    <Dashboard />   
                </div>
                
            </div>
        )
    }
}
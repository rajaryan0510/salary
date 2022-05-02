import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import AddEmployeeComponent from './AddEmployeeComponent';
import ListEmployeeComponent from './ListEmployeeComponent';

const SidebarComponent = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
          <CDBSidebar textColor="#fff" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                HRMS
              </a>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink exact to="/" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="columns">HR Dashboard</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/AddEmployeeComponent" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="table">Add Employee</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/ListEmployeeComponent"  activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="user">View Employee</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/analytics" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
                </NavLink>
                
              </CDBSidebarMenu>
            </CDBSidebarContent>
            <CDBSidebarFooter style={{ textAlign: 'center' }}>
              <div
                style={{
                  padding: '20px 5px',
                }}
              >
                @CUTM
              </div>
            </CDBSidebarFooter>
          </CDBSidebar>
        </div>
      );
};

export default SidebarComponent;

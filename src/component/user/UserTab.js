import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core/Container';

class UserTab extends Component {
    constructor(props){
        super(props)
        this.state={
            value: 0
        }
    }
    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        })
      };

    render() {
        return (
            <div>
              <AppBar position="static" color="white">
                <Tabs 
                value={this.state.value} 
                onChange={this.handleChange} 
                aria-label="simple tabs example">
                  <Tab label="Item One">{this.state.value}</Tab>
                  <Tab label="Item One"  />
                  <Tab label="Item One"  />
                  <Tab label="Item One"  />
                </Tabs>
              </AppBar>
            </div>
          );
    }
}

export default UserTab;
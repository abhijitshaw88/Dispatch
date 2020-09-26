import { Card } from '@material-ui/core';
import React, { Component } from 'react';
import BarChart from './BarChart';

class Dashboard extends Component{
    render(){
        return(
            <div className="conatiner" style={{display:"block"}}>
            <div className="col-lg-6">
                <BarChart/>
            </div>
            {/* <Card className="col-lg-4">
                <p>Hey</p>
            </Card> */}
            </div>
        )
    }

}

export default Dashboard
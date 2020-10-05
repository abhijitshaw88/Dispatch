import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./component/navigationbar/Navbar";
import Navigation from './component/navigationbar/Navigation';
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from "./component/login/Login";
import SignUp from './component/signup/Signup';
import Sidenavbar from "./component/navigationbar/Sidenavbar";
import Sidebar from "./component/navigationbar/Sidebar";
import Invoice from "./component/invoice/Invoice";
import Notifications from "./component/notifications/Notifications";
import Addemployee from "./component/employee/Addemployee";
import Viewemployee from "./component/employee/Viewemployee";
import User from "./component/user/User";
import AddUser from "./component/user/AddUser";
import Role from "./component/role/Role";
import AddRole from "./component/role/AddRole";
import AddCustomer from "./component/customers/AddCustomer";
import ViewCustomer from "./component/customers/ViewCustomer";
import ViewOrder from "./component/orders/ViewOrder";
import CreateOrder from "./component/orders/CreateOrder";
import ProjectDailyBoard from "./component/project/ProjectDailyBoard";
import DispatchDailyBoard from "./component/dispatch/DispatchDailyBoard";
import Billing from "./component/billing/Billing";
import Fleet from "./component/fleets/Fleet"
import Dashboard from "./component/dashboard/Dashboard";
import CompanySite from "./component/customers/CompanySite";
import Delivery from "./component/delivery/Delivery";

import Role1 from './component/employee/role/Role1';
import Role2 from './component/employee/role/Role2';
import Viewuser from './component/employee/user/Viewuser';
import Adduser from './component/employee/user/Adduser';
import Material_color from './component/material/Material_color';
import Material_size from './component/material/Material_size';
import Material_price from './component/material/Material_price';
import Accounts from "./component/accounts/Accounts";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "signin",
      isSignedIn: false
    };
  }

  onRouteChange = route => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { route } = this.state;
  return (
    <BrowserRouter>
      {localStorage.getItem("tokenKey") ? (
      <div>
      <Navbar />
        <div className="row">
          <div className="col-2 m-0 p-0">
            <Sidenavbar />
          </div>
          <div className="col-10 m-0 p-0">
            <Route path="/dashboard" component={Dashboard} exact/>
            <Route path="/customer-invoice" component={Invoice} exact />
            <Route path="/notification" component={Notifications} exact />
            <Route path="/addcustomer" component={AddCustomer} exact />
            <Route path="/viewcustomer" component={ViewCustomer} exact />
            <Route path="/addorder" component={CreateOrder} exact />
            <Route path="/vieworder" component={ViewOrder} exact />
            <Route path="/project-dailyboard" component={ProjectDailyBoard} exact />
            <Route path="/dispatch-dailyboard" component={DispatchDailyBoard} exact />
            <Route path="/billings" component={Billing} exact />
            <Route path="/fleet" component={Fleet} exact />
            <Route path="/addcompanysite" component={CompanySite} exact />
            <Route path="/delivery" component={Delivery} exact />
            <Route path="/role1" component={Role2} exact />
            <Route path="/role2" component={Role1} exact />
            <Route path="/viewuser" component={Viewuser} exact />
            <Route path="/adduser" component={Adduser} exact />
            <Route path="/material-color" component={Material_color} exact />
            <Route path="/material-size" component={Material_size} exact />
            <Route path="/material-price" component={Material_price} exact />
            <Route path="/account" component={Accounts} exact />
          </div>
        </div>
      </div>
    ) : route === "signin" ? (
      <Signin onRouteChange={this.onRouteChange} wait={1} />

    ) : (
          window.location.reload()
        )}
      </BrowserRouter>
  );
}
}

export default App;

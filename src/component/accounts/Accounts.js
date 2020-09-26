import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Accounts.css';

const Accounts = () => {
  const [val, setVal] = useState({
    customername:'',
    customersite:'',
    billedQty:'',
    Dues:'',
    UnBilledQty:''
  }
  );
  // console.log(url);
  return (
    <React.Fragment>
      {/* <div className="header-wrapper"> */}
      <div className="container mt-4">
        <div className="row px-5 pt-2">
          <div className="col-lg-12 p-0">
            <label className="" id="top" style={{fontSize:16, color: "black"}}>Summary</label>
          </div>
        </div>
      </div>
      <div className="container ">
          <div className="row text-center ml-4 pt-3">
              <table className="table table-bordered">
                <thead>
                <tr>
                  <th>Sl No</th>
                  <th>Customer Name</th>
                  <th>Customer Site</th>
                  <th>Billed Qty</th>
                  <th>Dues</th>
                  <th>UnBilled Qty</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><a>Details</a></td>
                </tr>
                </tbody>
              </table>
          </div>

      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default Accounts;

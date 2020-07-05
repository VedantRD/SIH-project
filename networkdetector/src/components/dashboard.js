import React from 'react';
import CountUp from 'react-countup';
// import {Link} from 'react-router-dom'
// import Map from './map'
import Tempmap from './tempmap'
import Chart from './chart'
import Dropdown from './dropdown'
import "./../css/dashboard.css"

export class Dashboard extends React.Component {

  logoutFunc() {
    // Logout().then((res) => {
    //   if (res.status === "success") {
    //     this.props.history.push("/")
    //   }
    // })
  }
  render() {
    return (
      <div>
        <div className="navbar shadow-sm" style={{ backgroundColor: 'lightblue' }}>
          <a className="navbar-brand ml-2 rounded border p-1 border-info" href="localhost:3000/">
            <img src="https://e7.pngegg.com/pngimages/335/405/png-clipart-signal-strength-in-telecommunications-mobile-phone-signal-computer-icons-mobile-phones-others-computer-network-text.png" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            <span className="ml-1 text-info">Network Detection</span>
          </a>
          <div className="dropdown" style={{ float: 'right' }}>
            <img src="https://i.stack.imgur.com/34AD2.jpg"
              alt=""
              className="btn dropdown-toggle rounded-circle "
              type="button" id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ width: 70, height: 55 }}
            >
            </img>

            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="localhost:3000/" style={{ fontSize: '15px' }}><i className="fa fa-user" style={{ fontsize: "24px" }}></i> Profile</a>
              <span className="dropdown-item" style={{ fontSize: '15px' }} onClick={() => { this.logoutFunc() }}><i className="fa fa-sign-out" style={{ fontsize: "24px" }}></i> Sign out</span>
            </div>
          </div>
        </div>
        <div>
          <div className="row pt-3 justify-content-center">
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-width-2 border-left-0 border-top-0 border-danger rounded h-100 py-2 butn">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-danger text-uppercase">Reported Issues</div>
                      <div className="h5 mb-0 font-weight-bold text-grey-800">
                        <CountUp
                          start={0}
                          end={120000}
                          duration={2.5}
                          separator=','
                        />
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fa fa-exclamation-triangle fa-3x text-gray-300 text-danger"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-0 border-top-0 border-success h-100 py-2 butn">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase">solved Issues</div>
                      <div className="h5 mb-0 font-weight-bold text-grey-800">
                        <CountUp
                          start={0}
                          end={80000}
                          duration={2.5}
                          separator=','
                        />
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fa fa-check-square fa-3x text-gray-300 text-success"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-0 border-top-0 border-primary h-100 py-2 butn">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col">
                      <div className="text-xs font-weight-bold text-primary text-uppercase">Remaining Issues</div>
                      <div className="h5 mb-0 font-weight-bold text-grey-800">
                        <CountUp
                          start={0}
                          end={40000}
                          duration={2.5}
                          separator=','
                        />
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fa fa-minus-circle fa-3x text-primary text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-9 col-md-6 mb-4 card shadow-sm" style={{ height: '80vh' }}>
              <Tempmap />
            </div>
          </div>
          {/* <div className="row justify-content-center">
        <div className="col-xl-9 col-md-6 mb-4 card shadow">
          <Map />
        </div>
      </div> */}
          <div className="row justify-content-center">
            <div className="col-xl-9 col-md-6 mb-4">
              <Dropdown />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-9 col-md-6 mb-4">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

import React from "react";

function Sidebar() {
    return (
       <aside className="side-bar">
           <h3>instantPay</h3>
          <ul>
              <li>
                  <a className="nav-link collapsed" href="https//:">
                      <i className='bx bxs-dashboard'></i>
                      <span>Dashboard</span>
                  </a>
              </li>
              <li>
                  <a className="nav-link collapsed" href="https//:">
                      <i className='bx bx-transfer'></i>
                      <span>Payment</span>
                  </a>
              </li>
              <li>
                  <a className="nav-link collapsed" href="https//:">
                      <i className='bx bx-wallet'></i>
                      <span>Wallet</span>
                  </a>
              </li>
              <li>
                  <a className="nav-link collapsed" href="https//:">
                      <i className='bx bx-history'></i>
                      <span>History</span>
                  </a>
              </li>
              <li>
                  <a className="nav-link collapsed" href="https//:">
                      <i className='bx bx-line-chart-down'></i>
                      <span>Statistics</span>
                  </a>
              </li>
              <li>
                  <a className="nav-link collapsed" href="https//:">
                      <i className='bx bx-target-lock'></i>
                      <span>Goals</span>
                  </a>
              </li>
          </ul>

       </aside>

    );
}
export default Sidebar;

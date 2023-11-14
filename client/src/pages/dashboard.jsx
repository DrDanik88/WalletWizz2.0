import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css'; 

import Button from '@mui/material/Button';

//import Chart from 'react-chartjs-2'; 

function Dashboard() {
  // Placeholder data
  const transactions = [
    { company: 'Company A', date: '2023-11-01', amount: '$100.00' },
    { company: 'Company B', date: '2023-11-05', amount: '$50.00' },
    { company: 'Company C', date: '2023-11-10', amount: '$75.00' },
  ];

  // Placeholder data for the spending pie chart
  const spendingData = {
    labels: ['Food', 'Rent', 'Entertainment'],
    datasets: [
      {
        data: [300, 800, 150],
        backgroundColor: ['red', 'blue', 'green'],
      },
    ],
  };

  return (
    <div>
      <div className="container pageBox">
        <div className="container pageInner">
          <div className="container balanceAlign">
          <h2 className="headerText dashboardHeader">Hello User!</h2>
            <div className="card displayCards" id="balanceCard">
              <h3 className="headerText" id="accountsHeader">
                ACCOUNTS
              </h3>
              <div className="container balanceContainer" id="balanceContainer">
                <div className="balanceBoxes">
                  <h4 className="headerText balanceHeaders" id="savingsHeader">
                    Savings Account
                  </h4>
                  <p className="headerText" id="savings">$5,000</p>
                </div>
                <div className="balanceBoxes">
                  <h4 className="headerText balanceHeaders" id="checkingHeader">
                    Checking Account
                  </h4>
                  <p className="headerText" id="checking">$2,500</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container transactionAlign">
            <div className="cards" id="transactionCard">
              <h2 className="headerText" id="history">
                TRANSACTION HISTORY
              </h2>
              <div className="transactionContainer" id="transactionContainer">
                <PlaidTransactions />
                {transactions.map((transaction, index) => (
                  <div key={index} className="transactionDisplays">
                    <div className="transactionDescriptionAlign">
                      <h3 className="headerText transactionCompany">
                        {transaction.company}
                      </h3>
                      <h3 className="headerText transactionDate">
                        {transaction.date}
                      </h3>
                    </div>
                    <div className="transactionAmountAlign">
                      <h3 className="headerText transactionAmount">
                        {transaction.amount}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="container spendingAlign">
            <div className="cards" id="spendingCard">
              <h2 className="headerText" id="spending">
                MONTHLY SPENDING
              </h2>
              <div className="spendingChart">
                {/* /* <Chart
                  type="pie"
                  data={spendingData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
                /> */ }
              </div>
            </div>
        <div className="linkButtonAlign">
          <Button variant='contained' disableElevation>Link Account</Button>
        </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Dashboard;

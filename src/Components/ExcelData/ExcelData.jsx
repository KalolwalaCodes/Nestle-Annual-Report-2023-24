import React, { useState } from 'react';
import './ExcelData.css';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import StaticExcelData from './StaticExcelData';
const dataExcel = [
  {
    Results: {
      sales: ['Sales', '242,755','167,895','146,649','132,902','122,953','112,162','101,351','94,096','81,233','98,063'],
      ProfitFromOperations: ['Profit From Operations', '53,418','33,659','32,288','28,775','25,940','23,509','18,305','16,542','13,338','17,926'],
      asPercentofSales: ['As % of Sales', '22.0','20.0','22.0','21.7','21.1','21.0','18.1','17.6','16.4','18.3'],
      ProfitAfterTax: ['Profit after Tax', '39,328','23,905','21,184','20,824','19,684','16,069','12,252','10,014','5,633','11,847'],
      AsPercentOfSale: ['As % Of Sale', '16.2','14.2','14.4','15.7','16.0','14.3','12.1','10.6','6.9','12.1'],
    },
    BalanceSheetandCashFlowStatement: {
      ShareholdersFund: ['Shareholders Fund', '33,409','24,592','19,464','20,193','19,189','36,737','34,206','32,823','28,178','28,372'],
      ReturnOnAverageEquity: ['Return on Average Equity (%)^', '108.5', '108.5', '111.0', '105.8', '70.4', '45.3', '36.6', '32.8', '19.9', '45.5'],
      OperatingCashFlow: ['Operating Cash Flow', '41,748', '27,374', '22,360', '24,545', '22,953', '20,525', '18,178', '14,659', '10,981', '16,440'],
      AsPercentageOfSales1: ['As % Of Sales', '17.2', '16.3', '15.2', '18.5', '18.7', '18.3', '17.9', '15.6', '13.5', '16.8'],
      CapitalExpenditure: ['Capital Expenditure', '18,783', '5,407', '7,308', '4,741', '1,522', '1,628', '1,959', '1,133', '1,493', '4,044'],
      AsPercentageOfSales2: ['As % Of Sales 2', '7.7', '3.2', '5.0', '3.6', '1.2', '1.5', '1.9', '1.2', '1.8', '4.1'],
    },
    DataPerShare: {
      EarningsPerShare_H: ['Earnings per share (H)', '40.79', '24.79', '21.97', '21.60', '20.42', '16.67', '12.71', '10.39', '5.84', '12.29'],
      DividendPerShare_H: ['Dividend per share (H)', '32.2', '22.0', '20.0', '20.0', '34.2#', '11.5', '8.6', '6.3', '4.8', '6.3'],
    },
    Others: {
      Market_Capitalisation: ['Market capitalisation', '2,528,358', '1,890,327', '1,899,925', '1,773,312', '1,425,983', '1,070,913', '756,381', '581,367', '561,535', '615,113'],
      Number_of_employees: ['Number of employees', '8,912', '8,069', '7,910', '7,747', '7,649', '7,604', '7,527', '7,588', '7,495', '7,228'],
    },
  },
];
const ExcelData = () => {
    const [selectedTab, setSelectedTab] = useState('Results');
  
    const renderData = () => {
      const data = dataExcel[0][selectedTab];
      const years = ['Year', 'FY 2023-24', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014'];
  
      return (
        <>
          <div className="table-row"
>
            {years.map((year, i) => (
              <div key={i} className="data-cell" style={{background:"#46beb5",marginBottom:"10px",color:"white",fontWeight:"500"}}>{year}</div>
            ))}
          </div>
          {Object.keys(data).map((key, index) => (
            <div key={index} className="table-row">
              {data[key].map((item, i) => (
                <div key={i} className="data-cell">{item}</div>
              ))}
            </div>
          ))}
        </>
      );
    };
  
    const downloadExcel = () => {
      const data = dataExcel[0][selectedTab];
      const years = ['Year', 'FY 2023-24', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014'];
  
      const rows = [years];
  
      Object.keys(data).forEach((key) => {
        rows.push(data[key]);
      });
  
      const worksheet = XLSX.utils.aoa_to_sheet(rows);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
      saveAs(blob, `${selectedTab}.xlsx`);
    };
  
    return (
      <>
      <div className="table-container-main">
      <h3 className="bold-heading-text text-black font-bold text-center">
      10 - Year Financial Highlights
        </h3>
        <div className="toggle-data-tab-hilights">
          <button
            className={`toggle-btn-tab${selectedTab === 'Results' ? ' active' : ''}`}
            onClick={() => setSelectedTab('Results')}
          >
            Results
          </button>
          <button
            className={`toggle-btn-tab${selectedTab === 'BalanceSheetandCashFlowStatement' ? ' active' : ''}`}
            onClick={() => setSelectedTab('BalanceSheetandCashFlowStatement')}
          >
            Balance Sheet and Cash Flow Statement
          </button>
          <button
            className={`toggle-btn-tab${selectedTab === 'DataPerShare' ? ' active' : ''}`}
            onClick={() => setSelectedTab('DataPerShare')}
          >
            Data per Share
          </button>
          <button
            className={`toggle-btn-tab${selectedTab === 'Others' ? ' active' : ''}`}
            onClick={() => setSelectedTab('Others')}
          >
            Others
          </button>
          <button className='toggle-btn-tab flex gap-2' onClick={downloadExcel}><svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.978 29.978" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012 v-8.861H25.462z"></path> <path d="M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723 c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742 c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193 C15.092,18.979,14.62,18.426,14.62,18.426z"></path> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg> XLSX</button>
        </div>
        <div className="table-content">
          {renderData()}
        </div>
        
      </div>
      <StaticExcelData/>
</>
    );
  };
  
  export default ExcelData;
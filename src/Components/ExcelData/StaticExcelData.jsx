import React from 'react';

const StaticExcelData = () => {
    const dataToFeedInExcel = [
        ['Operating Profit Margin (%) (Profit From Operations / Sale of Products)', '22.0', '20.0'],
        ['Net Profit Margin (%) (Profit After Tax / Sale of Products)', '16.2', '14.2'],
        ['Return on Net Worth (%) (Profit After Tax / Average Equity)', '108.5', '108.5'],
        ['Current Ratio (Current Assets / Current liabilities)', '0.9', '1.1'],
        ['Inventory Turnover Ratio (Sale of Products / Average Inventories)', '9.7', '9.5'],
        ['Debtors Turnover Ratio (Sale of Products / Average Trade Receivables)', '78.9', '93.8']
    ];

    return (
        <div className='table-container-main justify-center'>
            <h3 className="bold-heading-text text-black font-bold text-center">
            Key financial ratios
        </h3>
            <h3 className='big-medium-font my-3'>As per the provisions of SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015, the key financial ratios are given below:</h3>

           
            <div className="flex gap-3 sm:flex-col md:flex-row">
                <div className='md:w-[60%] sm:w-full p-2' style={{background:"#f0f0f0" ,fontWeight:"700"}}>Particulars</div>
                <div className='md:w-[20%] sm:w-full p-2' style={{background:"#f0f0f0" ,fontWeight:"700"}}>2023-24</div>
                <div className='md:w-[20%] sm:w-full p-2' style={{background:"#f0f0f0" ,fontWeight:"700"}}>2022</div>
            </div>
            {
                dataToFeedInExcel.map((data, index) => (
                    <div className="flex gap-3 sm:flex-col md:flex-row" key={index}>
                        <div className='md:w-[60%] sm:w-full bg-white mt-1 p-2'>{data[0]}</div>
                        <div className='md:w-[20%] sm:w-full bg-white mt-1 p-2'>{data[1]}</div>
                        <div className='md:w-[20%] sm:w-full bg-white mt-1 p-2'>{data[2]}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default StaticExcelData;

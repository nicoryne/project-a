import React, { useState } from "react";

const parseData = (data: string) => {
  return data.trim().split('\n').map(line => {
    const rowData = Array.from({ length: headers.length }).fill("NULL");
  
    const match = line.match(/^(\D+?)(?=\s+\d)/);
    if (match) {
      const playerName = match[1].trim();
      const rest = line.substring(match[0].length).trim().split(' ');
      
      rowData[2] = playerName;
      
      rest.forEach((value, index) => {
        rowData[index + 3] = value.trim();
      });
    } else {
      

      line.split(' ').forEach((value, index) => {
        rowData[index + 2] = value.trim();
      });
    }
    
    return rowData;
  });
};


const headers = [
  "AGENT",
  "TEAM",
  "PLAYER",
  "ACS",
  "K",
  "D",
  "A",
  "ER",
  "FB",
  "P",
  "D"
];

const ValorantForm = ({ t, i }: { t: string; i: number }) => {
  const [tableData, setTableData] = useState(parseData(t));

  const handleInputChange = (rowIndex: number, cellIndex: number, value: string | number | readonly string[] | undefined) => {
    const newData = [...tableData];
    newData[rowIndex][cellIndex] = value || '';
    setTableData(newData);
  };

  return (
    <div className="p-5">
      <div className="flex w-full items-center justify-between mb-5 px-5">
        <p className="text-xl font-[600]">
          {`Table Generated on ${new Date().toUTCString()}`}
        </p>
        <button
          className="bg-white text-black text-sm md:text-base rounded-md px-5 py-2 hover:opacity-80 hover:transition transform"
        >
          Submit
        </button>
      </div>
      <table className="min-w-full bg-gray-800 text-white rounded-xl overflow-hidden">
        <thead className="bg-[#2c2c2c]">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-2 border-b border-gray-600">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-black-800 text-white">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-2 border-b border-x border-gray-600">
                  <input
                    type="text"
                    value={cell as string}
                    className="bg-transparent text-black w-full focus:outline-none"
                    onChange={(e) => handleInputChange(rowIndex, cellIndex, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ValorantForm;

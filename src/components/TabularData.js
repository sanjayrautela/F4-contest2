import React from "react";

function TabularData({ data }) {
  const dataForm = (key, value) => {
    return (
      <tr key={key} className="info-row">
        <td className="info-column">{key}</td>
        <td className="info-column">{value}</td>
      </tr>
    );
  };

  const tableForm = (obj) => {
    const rows = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] !== "object") {
          rows.push(dataForm(key, obj[key]));
        } else {
          rows.push(tableForm(obj[key]));
        }
      }
    }
    return <>{rows}</>;
  };

  const getData = (obj = data) => {
    const rows = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] !== "object") {
          rows.push(dataForm(key, obj[key]));
        } else {
          rows.push(tableForm(obj[key]));
        }
      }
    }
    return <>{rows}</>;
  };

  return (
    <>
      <table className="table-container">
        <tbody>{getData()}</tbody>
      </table>
    </>
  );
}

export default TabularData;
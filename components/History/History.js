import React from "react";
import Table from "../Table/Table";
import TableItems from "../Table/TableItems";

const History = () => {
  return (
    <div className="flex flex-col w-full items-center mt-5">
      <Table heading1="#" heading2="Status" heading3="Amount" heading4="Date" />

      <div className="flex flex-col items-center w-full">
        <TableItems
          value1="1"
          value2="Completed"
          value3="1000"
          value4={new Date().getDate()}
        />
        <TableItems
          value1="1"
          value2="Completed"
          value3="1000"
          value4={new Date().getDate()}
        />
        <TableItems
          value1="1"
          value2="Completed"
          value3="1000"
          value4={new Date().getDate()}
        />
        <TableItems
          value1="1"
          value2="Completed"
          value3="1000"
          value4={new Date().getDate()}
        />
      </div>
    </div>
  );
};

export default History;

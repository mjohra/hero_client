import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Header from "../../Shared/Header/Header";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";

const Rider = () => {
  const [information, setInformation] = useState([]);
  const columns = [
    {
      filter: textFilter(),
      dataField: "displayName",
      text: "Name",
    },
    { filter: textFilter(), dataField: "email", text: "Email" },
    {
      dataField: "age",
      text: "Age",
    },
    { filter: textFilter(), dataField: "phone", text: "Phone" },
    {
      dataField: "address",
      text: "Address",
    },
    {
      dataField: "carInfo",
      text: "Car Info",
    },
  ];
  useEffect(() => {
    fetch("https://hidden-sands-08000.herokuapp.com/rider")
      .then((res) => res.json())
      .then((data) => setInformation(data));
  }, []);
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 10,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
    },
  });
  return (
    <div id="rider">
      <Header></Header>
      <div className="container profile">
        <div className="row mt-5">
          <div className="col-md-12 col-12 pt-5">
            <h1 className="p-5 text-center main-title text-black">
              Rider Information
            </h1>
            <BootstrapTable
              pagination={pagination}
              filter={filterFactory()}
              keyField="email"
              data={information}
              columns={columns}
            ></BootstrapTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rider;

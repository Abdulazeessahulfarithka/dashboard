import React from "react";
import Card from "./Card";

export default function Dashboard() {
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>
      <div class="row">
        <Card
          title="Monthly Earnings"
          price="40000"
          color={"border-left-primary"}
        />
        <Card title="Total Products " price="30" color={"border-left-info"} />
        <Card title="Total users" price="20" color={"border-left-warning"} />
        <Card title="Online Users" price="10" color={"border-left-success"} />
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { Table } from "./components/table";
import { useQuery } from "react-query";

export const Header = (props) => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("http://localhost:8000/api/apps").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  console.log(data);

  return (
    <div>
      <h1 className="display-4 text-primary">Privacy Observatory</h1>
      <Table appList={data} />
    </div>
  );
};

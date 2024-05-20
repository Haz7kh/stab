import React from "react";
import { Route, Routes } from "react-router-dom";
import ITServices from "../ components/ITServices";
import AccountingServices from "../ components/AccountingServices ";

const Services = () => {
  return (
    <div className="container mx-auto py-16">
      <Routes>
        <Route path="it" element={<ITServices />} />
        <Route path="accounting" element={<AccountingServices />} />
      </Routes>
    </div>
  );
};

export default Services;

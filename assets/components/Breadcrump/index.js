
import React from "react";
import {Breadcrumb as BreadcrumbAntd } from "antd";

function Breadcrumb() { // TODO: Add props
  return (
    <>
        <BreadcrumbAntd style={{ margin: "16px 0" }}>
            <BreadcrumbAntd.Item>Home</BreadcrumbAntd.Item>
            <BreadcrumbAntd.Item>List</BreadcrumbAntd.Item>
            <BreadcrumbAntd.Item>App</BreadcrumbAntd.Item>
        </BreadcrumbAntd>
    </>
  );
}

export default Breadcrumb;

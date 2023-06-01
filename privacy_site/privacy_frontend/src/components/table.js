import React, { Component } from "react";

export const Table = (props) => {
  const appList = props.appList
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">App Name</th>
            <th scope="col">Privacy Type</th>
            <th scope="col">Purpose</th>
            <th scope="col">Data Category</th>
            <th scope="col">Data Type</th>
            <th scope="col">Release Date</th>
            <th scope="col">Version Release Date</th>
            <th scope="col">App URL</th>
          </tr>
        </thead>
        <tbody>
          {appList.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.app_name}</td>
              <td>{privacyTypeMethod(item.privacy_type)}</td>
              <td>{purposeMethod(item.purpose)}</td>
              <td>{dataCategoryMethod(item.data_category)}</td>
              <td>{dataTypeMethod(item.data_type)}</td>
              <td>{item.release_date}</td>
              <td>{item.version_release_date}</td>
              <td>{item.app_url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function privacyTypeMethod(str) {
  //("NC", "Data Not Collected"),
  //("NL", "Data Not Linked To You"),
  //("L", "Data Linked To You"),
  //("T", "Data Used To Track You"),
  if (str === "NC") {
    return "Data Not Collected";
  }
  if (str === "NL") {
    return "Data Not Linked To You";
  }
  if (str === "L") {
    return "Data Linked To You";
  }
  return "Data Used To Track You";
}

function purposeMethod(str) {
  //("A", "Analytics"),
  //("AP", "App Functionality"),
  //("D", "Developer's Advertising or Marketing"),
  //("O", "Other Purposes"),
  //("P", "Product Personalization"),
  //("T", "Third-party Advertising"),
  if (str === "A") {
    return "Analytics";
  }
  if (str === "AP") {
    return "App Functionality";
  }
  if (str === "D") {
    return "Developer's Advertising or Marketing";
  }
  if (str === "P") {
    return "Product Personalization";
  }
  if (str === "T") {
    return "Third-party Advertising";
  }
  return "Other Purposes";
}

function dataCategoryMethod(str) {
  if (str === "B") {
    return "Browsing History";
  }
  if (str === "CI") {
    return "Contact Info";
  }
  if (str === "C") {
    return "Contacts";
  }
  if (str === "D") {
    return "Diagnostics";
  }
  if (str === "F") {
    return "Financial Info";
  }
  if (str === "H") {
    return "Health and Fitness";
  }
  if (str === "I") {
    return "Identifiers";
  }
  if (str === "L") {
    return "Location Info";
  }
  if (str === "O") {
    return "Other Data";
  }
  if (str === "P") {
    return "Purchases";
  }
  if (str === "SH") {
    return "Search History";
  }
  if (str === "SI") {
    return "Sensitive Info";
  }
  if (str === "UD") {
    return "Usage Data";
  }
  if (str === "UC") {
    return "User Content";
  }
  return "Unknown";
}

function dataTypeMethod(str) {
  if (str === "AD") {
    return "Advertising Data";
  }
  if (str === "AU") {
    return "Audio Data";
  }
  if (str === "B") {
    return "Browsing History";
  }
  if (str === "CL") {
    return "Coarse Location";
  }
  if (str === "C") {
    return "Contacts";
  }
  if (str === "CD") {
    return "Crash Data";
  }
  if (str === "CI") {
    return "Credit Info";
  }
  if (str === "CS") {
    return "Customer Support";
  }
  if (str === "D") {
    return "Device ID";
  }
  if (str === "E") {
    return "Email Address";
  }
  if (str === "ET") {
    return "Emails or Text Messages";
  }
  if (str === "F") {
    return "Fitness";
  }
  if (str === "G") {
    return "Gameplay Content";
  }
  if (str === "H") {
    return "Health";
  }
  if (str === "N") {
    return "Name";
  }
  if (str === "PI") {
    return "Payment Info";
  }
  if (str === "PD") {
    return "Performance Data";
  }
  if (str === "PN") {
    return "Phone Number";
  }
  if (str === "PV") {
    return "Photos or Videos";
  }
  if (str === "PA") {
    return "Physical Address";
  }
  if (str === "PL") {
    return "Precise Location";
  }
  if (str === "PR") {
    return "Product Interaction";
  }
  if (str === "PH") {
    return "Purchase History";
  }
  if (str === "SH") {
    return "Search History";
  }
  if (str === "SI") {
    return "Sensitive Info";
  }
  if (str === "U") {
    return "User ID";
  }
  if (str === "O") {
    return "Other";
  }
  return "Unknown";
}
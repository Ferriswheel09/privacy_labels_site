import React, { Component } from "react";
import axios from "axios";

const apps = [
  {
    id: 3,
    app_name: "Instagram",
    privacy_type: "L",
    purpose: "P",
    data_category: "SH",
    data_type: "B",
    release_date: "2023-05-31",
    version_release_date: "2023-05-31",
    app_url: "",
  },
  {
    id: 4,
    app_name: "Snapchat",
    privacy_type: "NL",
    purpose: "AP",
    data_category: "UC",
    data_type: "D",
    release_date: "2023-06-01",
    version_release_date: "2023-06-01",
    app_url: "",
  },
];

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appList: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8000/api/apps").then(({ data }) => {
      console.log(data);
      this.setState({ appList: data });
    });
  }

  render() {
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
            {this.state.appList.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.app_name}</td>
                <td>{item.privacy_type}</td>
                <td>{item.purpose}</td>
                <td>{item.data_category}</td>
                <td>{item.data_type}</td>
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
}

export default Table;

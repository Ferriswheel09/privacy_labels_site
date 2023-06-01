import React, { Component } from "react";
import axios from "axios";

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

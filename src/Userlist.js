import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Userlist() {
  const [userList, setUserlist] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  let getUsers = async () => {
    try {
      const users = await axios.get(
        "https://5cdd0a92b22718001417c19d.mockapi.io/api/users"
      );
      setUserlist(users.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    return () => {
      console.log("Destroy...");
    };
  });
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Userlist</h1>
        <Link
          to="/portal/usercreate"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create user
        </Link>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>country</th>
                  <th>state</th>
                  <th>city</th>
                  <th>action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>country</th>
                  <th>state</th>
                  <th>city</th>
                  <th>action</th>
                </tr>
              </tfoot>
              <tbody>
                {userList.map((user) => {
                  return (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.country}</td>
                      <td>{user.state}</td>
                      <td>{user.city}</td>

                      <th>
                        <Link
                          to={`/portal/userview/${user.id}`}
                          className="btn btn-primary btn-sm mr-1"
                        >
                          view
                        </Link>
                        <Link
                          to={`/portal/useredit/${user.id}`}
                          className="btn btn-info btn-sm mr-1"
                        >
                          Edit
                        </Link>
                        <button className="btn btn-danger btn-sm mr-1">
                          Delete
                        </button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userlist;

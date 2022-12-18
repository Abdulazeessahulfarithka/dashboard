import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Usercreate() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const myFormik = useFormik({
    intialValues: {
      username: "",
      email: "",
      country: "",
      state: "",
      city: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.post(
          "https://5cdd0a92b22718001417c19d.mockapi.io/api/users",
          values
        );
        navigate("/portal/userview");
      } catch (error) {
        setLoading(false);
      }
    },
  });
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              name="username"
              value={myFormik.username}
              type={"text"}
              className="form-control"
            />
          </div>
          <div className="col-lg-6">
            <label>email</label>
            <input
              name="email"
              value={myFormik.email}
              type={"text"}
              className="form-control"
            />
          </div>
          <div className="col-lg-4">
            <label>country</label>
            <select
              name=" country"
              value={myFormik.country}
              className="form-control"
            >
              <option value={""}>---SELECT</option>
              <option value={"IN"}>india</option>
              <option value={"USA"}>america</option>
            </select>
          </div>
          <div className="col-lg-4">
            <label>state</label>
            <select
              name="state"
              value={myFormik.state}
              className="form-control"
            >
              <option value={""}>---SELECT</option>
              <option value={"TN"}>tamilnadu</option>
              <option value={"KL"}>kerla</option>
            </select>
          </div>
          <div className="col-lg-4">
            <label>city</label>
            <select name="city" value={myFormik.city} className="form-control">
              <option value={""}>---SELECT</option>
              <option value={"KR"}>karur</option>
              <option value={"MI"}>madurai</option>
            </select>
          </div>
          <div className="col-lg-3 mt-4">
            <input
              disabled={isLoading}
              type={"submit"}
              value={isLoading ? "Loading..." : "create"}
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Usercreate;

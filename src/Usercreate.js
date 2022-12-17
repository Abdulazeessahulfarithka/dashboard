import React from "react";

function Usercreate() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <label>name</label>
          <input type={"text"} className="form-control" />
        </div>
        <div className="col-lg-6">
          <label>email</label>
          <input type={"text"} className="form-control" />
        </div>
        <div className="col-lg-4">
          <label>country</label>
          <select className="form-control">
            <option>india</option>
            <option>america</option>
          </select>
        </div>
        <div className="col-lg-4">
          <label>state</label>
          <select className="form-control">
            <option>india</option>
            <option>america</option>
          </select>
        </div>
        <div className="col-lg-4">
          <label>city</label>
          <select className="form-control">
            <option>india</option>
            <option>america</option>
          </select>
        </div>
        <div className="col-lg-3 mt-4">
          <input type={"submit"} value="create" className="btn btn-primary" />
        </div>
      </div>
    </div>
  );
}

export default Usercreate;

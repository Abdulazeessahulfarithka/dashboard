import { useFormik } from "formik";
import React from "react";

function Useredit() {
  const myFormik = useFormik({
    initialValues: {
      username: "",
      email: "",
      country: "",
      state: "",
      city: "",
    },
    onSubmit: () => {},
  });
  return <div>Useredit</div>;
}

export default Useredit;

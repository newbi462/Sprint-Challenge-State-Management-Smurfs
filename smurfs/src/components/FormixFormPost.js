import React, { useContext, useState, useEffect }  from 'react';
import {withFormik, Form, Field } from "formik";
import axios from "axios";

import { SmurfContext } from "./../contexts/SmurfContext";

const FormWrap = ( { values, status } ) => {
	const { smurfsApiDate } = useContext(SmurfContext);
  console.log("IN FORM");
  console.log(smurfsApiDate);

  const [newSmurf, setNewSmurf] = useState([]);

  useEffect(() => {
    status && setNewSmurf(newSmurf => [...newSmurf, status]);
  }, [status]);

	return (
		<>
    <Form>
      <Field type="text" name="name" placeholder="New Smurf's Name" />
      <Field type="number" name="age" placeholder="New Smurf's Age" />
      <Field type="test" name="height" placeholder="New Smurf's Height" />

      <button>Submit</button>
    </Form>
    </>
	);
};

const FormikForm = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || "",
      age: age || "",
      height: height || "",
    };
  },
  handleSubmit(values, { setStatus }) {
    axios
      .post("http://localhost:3333/smurfs", values)
      .then(response => {
        setStatus(response.data);
        console.log("From Axios");
        console.log(response.data);
      })
      .catch(error => console.log(error.response));
  }
})(FormWrap);
export default FormikForm;

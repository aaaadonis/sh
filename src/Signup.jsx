import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";
import { myFS, myAuth } from "./firebase";
import { addDoc, collection } from "firebase/firestore";


const Signup = () => {

  

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      topSize: "",
      birthday: "",
      address: "",
      apt: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email addrss.").required("Required"),
      firstName: Yup.string().required("Required"),
      topSize: Yup.string().max(12, "Must be 12 characters or less."),
    }),
    onSubmit: async (values) => {
      let contactsCollRef = collection(myFS, "contacts");
      try {
        let newContactDoc = await addDoc(contactsCollRef, {
          email: values.email,
          firstName: values.firstName,
          topSize: values.topSize,
          birthday: values.birthday,
          address: values.address,
          apt: values.apt,
          city: values.city,
          state: values.state,
          zip: values.zip,
          phone: values.phone,
        });
        alert("Submission Successful");
      } catch (ex) {
        console.error(ex.message);
        console.error(ex);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="news">
        <div className="inpu">
          <p>full name: </p>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
        <div className="inpu">
          <p>birthday: </p>
          <input
            type="date"
            id="birthday"
            name="birthday"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthday}
          />
        </div>
        <div className="inpu">
          <p>top size: </p>
          <input
            type="text"
            id="topSize"
            name="topSize"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.topSize}
          />
        </div>
        {formik.touched.topSize && formik.errors.topSize ? (
          <p>{formik.errors.topSize}</p>
        ) : null}
        <div className="inpu">
          <p>address: </p>
          <input
            type="text"
            id="address"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
        </div>
        <div className="inpu">
          <p>apt/suite: </p>
          <input
            type="text"
            id="apt"
            name="apt"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.apt}
          />
        </div>
        <div className="inpu">
          <p>city: </p>
          <input
            type="text"
            id="city"
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
        </div>
        <div className="inpu">
          <p>state: </p>
          <input
            type="text"
            id="state"
            name="state"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.state}
          />
        </div>
        <div className="inpu">
          <p>zip code: </p>
          <input
            type="text"
            id="zip"
            name="zip"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zip}
          />
        </div>
        <div className="inpu">
          <p>email: </p>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
        <div className="inpu">
          <p>phone: </p>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
        </div>
      </div>
      <button type="submit">click to submit</button>
    </form>
  );
};

export default Signup;

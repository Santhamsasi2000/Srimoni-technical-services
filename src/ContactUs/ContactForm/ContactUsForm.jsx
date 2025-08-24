import React, { lazy, Suspense } from "react";
import { Formik, Form } from "formik";
import { ValidationSchema } from "./ValidationSchema";
import FormField from "./FormField";

const Swal = lazy(() => import("sweetalert2"));
const title = "Get In Touch";
const subTitle = "We're here to help! Use the form below to inquire about our services, request a consultation, or share your feedback. Your input helps us improve and serve you better.";
const key = "3853d374-e8db-4903-bd53-60139736a0a3";

const ContactUsForm = () => {
  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => formData.append(key, values[key]));
    formData.append("access_key", key);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        const { default: Swal } = await import("sweetalert2");
        Swal.fire({
          title: "MESSAGE SENT !",
          text: "Thank you for contacting us. You will receive a response within two hours. If you do not receive a response, please send us a WhatsApp message at +971 54 245 8604.",
          icon: "success",
        });
        resetForm();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      const { default: Swal } = await import("sweetalert2");
      Swal.fire({
        title: "Error",
        text: error.message || "Network error. Please try again.",
        icon: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="max-w-[500px] flex justify-end w-full">
      <Formik
        initialValues={{
          name: "",
          email: "",
          mobileNumber: "",
          address:"",
          subject: "",
          message: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <h2 className="text-teal-800 text-xl sm:text-2xl font-bold mb-3">{title}</h2>
            <p className="mb-5">{subTitle}</p>

            <FormField name="name" label="Name" placeholder="Your Name *" />
            <FormField name="email" label="Email Address (Optional)" type="email" placeholder="Enter Your Email Id" />
            <FormField name="mobileNumber" label="Mobile Number" placeholder="Enter Your Mobile Number *" />
            <FormField name="address" label="Address" placeholder="Your Address *"/>
            <FormField name="subject" label="Subject" placeholder="Enter the Subject *" />
            <FormField name="message" label="Message (Optional)" as="textarea" placeholder="Your Message" style={{height:"200px",padding:"10px"}}/>

            <button
              type="submit"
              className="bg-plum-600 text-white w-full py-2 rounded-xl"
              disabled={isSubmitting}
            >
              {isSubmitting ? "SENDING..." : "SEND"}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactUsForm;

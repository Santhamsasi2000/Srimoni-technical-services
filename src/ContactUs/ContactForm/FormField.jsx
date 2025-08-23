import { Field, ErrorMessage } from "formik";

const FormField = ({ label, name, type = "text", as = "input", ...props }) => (
  <div className="flex flex-col mb-4">
    <label className="font-medium" htmlFor={name}>
      {label}
    </label>
    <Field
      id={name}
      name={name}
      type={type}
      className={`p-2 mt-2 rounded border-1 border-gray-400
        ${type === "textarea" ? "pt-3" : ""}`}
      as={as}
      {...props}
    />
    <ErrorMessage name={name} component="div" className="text-red-600 mt-1" />
  </div>
);

export default FormField;

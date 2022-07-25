import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function FormComponent() {
  const [formData, setFormData] = useState(false);

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      }}
      validate={(res) => {
        let error = {};

        // Validacion Nombre
        if (!res.name) {
          error.name = "Por favor ingresa un nombre";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(res.name)) {
          error.name = "El nombre solo puede contener letras y espacio";
        }
        // Validacion Email
        if (!res.email) {
          error.email = "Por favor ingresa un correo electronico";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(res.email)
        ) {
          error.email =
            "El correo electronico solo puede contener letras, numeros, guiones, puntos y arrobas";
        }
        // Validacion Telefono
        if (!res.phone) {
          error.phone = "Por favor ingresa un numero de telefono";
        } else if (!/^[0-9]{10}$/.test(res.phone)) {
          error.phone = "El numero de telefono solo puede contener 10 numeros";
        }
        // Validacion Website
        if (!res.website) {
          error.website = "Por favor ingresa una pagina web";
        }
        // Validacion Mensaje
        if (!res.message) {
          error.message = "Por favor ingresa un mensaje";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,200}$/.test(res.message)) {
          error.message = "El mensaje solo puede contener letras y espacio";
        }
        return error;
      }}
      onSubmit={(res, { resetForm }) => {
        resetForm();
        setFormData(true);
        setTimeout(() => {
          setFormData(false), 5000;
        });
        return console.log(res);
      }}
    >
      {({ errors }) => (
        <Form className="pt-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="lg:col-span-1 col-span-2">
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="NOMBRE"
                className="w-full border text-sm border-gray-300 rounded-lg p-4 tracking-wider"
              />
              <ErrorMessage
                name="name"
                component={() => (
                  <div className="text-red-500 text-xs pl-1 pt-2">
                    {errors.name}
                  </div>
                )}
              />
            </div>
            <div className="lg:col-span-1 col-span-2">
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="CORREO ELECTRONICO"
                className="w-full border text-sm border-gray-300 rounded-lg p-4 tracking-wider"
              />
              <ErrorMessage
                name="email"
                component={() => (
                  <div className="text-red-500 text-xs pl-1 pt-2">
                    {errors.email}
                  </div>
                )}
              />
            </div>
            <div className="lg:col-span-1 col-span-2">
              <Field
                type="number"
                id="phone"
                name="phone"
                placeholder="TELEFONO"
                className="w-full border text-sm border-gray-300 rounded-lg p-4 tracking-wider"
              />

              <ErrorMessage
                name="phone"
                component={() => (
                  <div className="text-red-500 text-xs pl-1 pt-2">
                    {errors.phone}
                  </div>
                )}
              />
            </div>
            <div className="lg:col-span-1 col-span-2">
              <Field
                type="text"
                id="website"
                name="website"
                placeholder="WEBSITE"
                className="w-full text-sm border-gray-300 rounded-lg p-4 tracking-wider"
              />
              <ErrorMessage
                name="website"
                component={() => (
                  <div className="text-red-500 text-xs pl-1 pt-2">
                    {errors.website}
                  </div>
                )}
              />
            </div>
            <div className="col-span-2">
              <Field
                type="text"
                rows="4"
                id="message"
                name="message"
                placeholder="MENSAJE"
                className="w-full border text-sm border-gray-300 rounded-lg p-4 tracking-wider"
              ></Field>
              <ErrorMessage
                name="message"
                component={() => (
                  <div className="text-red-500 text-xs pl-1 pt-2">
                    {errors.message}
                  </div>
                )}
              />
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-800 hover:to-blue-800 text-white rounded-lg p-2 w-full flex justify-center shadow-lg shadow-indigo-500/50"
              >
                {!formData && (
                  <svg
                    aria-label="Compartir publicación"
                    className="_ab6-"
                    color="#fff"
                    fill="#fff"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="22"
                      x2="9.218"
                      y1="3"
                      y2="10.083"
                    ></line>
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></polygon>
                  </svg>
                )}
                {formData && (
                  <svg
                    class="animate-spin h-5 w-5 mr-3 ..."
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeMiterlimit="10"
                      fill="none"
                    ></circle>
                    <path
                      class="opacity-75"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormComponent;

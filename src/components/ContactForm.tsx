import { Formik, FormikProps } from "formik";
import InputFormik from "@/components/form/InputFormik";
import InputTextAreaFormik from "@/components/form/InputTextAreaFormik";

type FormikValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm = () => {
    return (
        <Formik
          initialValues={{ name: "", email: "", subject: "", message: "" }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            alert("Mensaje enviado");
            resetForm();
          }}
        >
          {(formik: FormikProps<FormikValues>) => (
        <form className="bg-[#bbc8ec] dark:bg-[#202636] rounded-xl p-8 w-full max-w-xl mx-auto text-start shadow-md">
          <InputFormik
            label="Nombre" 
            name="name" 
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          <InputFormik
            label="Email" 
            name="email" 
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <InputFormik
            label="Asunto" 
            name="subject" 
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
          />
          <InputTextAreaFormik
            label="Mensaje" 
            name="message" 
            rows={5}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          <button
            className="bg-cyan-900 dark:bg-cyan-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-cyan-600 transition-colors"
            type="button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            Enviar Mensaje
          </button>
        </form>
       )}
        </Formik>
    )
}

export default ContactForm;
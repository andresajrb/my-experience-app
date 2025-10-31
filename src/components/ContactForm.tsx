import { Formik, FormikProps } from "formik";
import InputFormik from "@/components/form/InputFormik";
import InputTextAreaFormik from "@/components/form/InputTextAreaFormik";
import { toast } from "react-toastify";
import { useTranslation } from "next-i18next";
import { publicEnv } from "@/lib/env-client";

type FormikValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

// const EMAIL_NOTIFICATION_URL = publicEnv.API_BASE_URL + '/myexperience/send-email';
const EMAIL_NOTIFICATION_URL = publicEnv.API_BASE_URL + '/myexperience/personalinfo';

const ContactForm = () => { 
    const { t } = useTranslation('common')
    console.log('env-client', publicEnv);
    return (
        <Formik
          initialValues={{ name: "", email: "", subject: "", message: "" }}
          onSubmit={(values, { resetForm }) => {
            fetch(EMAIL_NOTIFICATION_URL, {
              method: 'GET',
              // method: 'POST',
              // body: JSON.stringify(values),
              // headers: {
              //   'Content-Type': 'application/json'
              // }
            }).then(response => response.json())
              .then(data => {
                console.log(data);
                if (data.success) {
                  toast.success("Mensaje enviado");
                  resetForm();
                } else {
                  toast.error("Error al enviar el mensaje");
                }
              })
              .catch(error => {
                console.error('Error al enviar el mensaje:', error);
                toast.error("Error al enviar el mensaje");
              });
          }}
        >
          {(formik: FormikProps<FormikValues>) => (
        <form className="bg-[#bbc8ec] dark:bg-[#202636] rounded-xl p-8 w-full max-w-xl mx-auto text-start shadow-md">
          <InputFormik
            label={t('label.name')}
            name="name" 
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          <InputFormik
            label={t('label.email')}
            name="email" 
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <InputFormik
            label={t('label.subject')}
            name="subject" 
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
          />
          <InputTextAreaFormik
            label={t('label.message')}
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
            {t('label.sendMessage')}
          </button>
        </form>
       )}
        </Formik>
    )
}

export default ContactForm;
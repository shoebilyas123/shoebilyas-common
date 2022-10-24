import sgMail from "@sendgrid/mail";

import { ISendEmail } from "shoebilyas-common/interface/email";

sgMail.setApiKey(process.env?.SHOEB_ILYAS_APP_KEY || "");

const sendEmail = async (payload: ISendEmail) => {
  const response = await sgMail.send({
    ...payload,
  });
  console.log(response);
};

export default sendEmail;

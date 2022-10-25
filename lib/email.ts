import sgMail from "@sendgrid/mail";

import { ISendEmail } from "shoebilyas-common/interface/email";

sgMail.setApiKey(process.env?.SHOEB_ILYAS_APP_KEY || "");

const sendEmail = async (payload: ISendEmail) => {
  console.log(payload);
  const response = await sgMail.send({
    ...payload,
  });
  // @ts-ignore-next-line
  console.log({ response });
};

export default sendEmail;

export interface IEmailParams {
  to: string;
  name: string;
  id?: string;
}

export interface ISendEmail {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

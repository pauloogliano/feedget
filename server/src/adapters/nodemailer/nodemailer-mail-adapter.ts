import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b4a36293e4e8fa",
    pass: "e83de321092733"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe FeedGet <no-reply@pauloogliano.com>",
      to: "Paulo <contato@pauloogliano.com>",
      subject,
      html: body,
    });
  }
}

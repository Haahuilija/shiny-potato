import type { NextApiRequest, NextApiResponse } from 'next';
import tokenValidation from './assessment';
import sendEmail from './sendEmail';

export default async function handleToken(req: NextApiRequest, res: NextApiResponse) {
  let name, email, message, schedule, other, token;

  try {
    ({ name, email, message, schedule, other } = req.body);
    token = req.body.token;
  } catch (error) {
    console.error('Error destructuring request body:', error);
  }

  try {
    await tokenValidation(token, req);
    const emailStatus = await sendEmail(name, email, message, schedule, other, token);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error validating reCAPTCHA token or sending email');
  }
}
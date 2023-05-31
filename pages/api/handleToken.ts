import type { NextApiRequest, NextApiResponse } from 'next';
import tokenValidation from './assessment';
import sendEmail from './sendEmail';

export default async function handleToken(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('Request body:', req.body); // log the entire request body
  } catch (error) {
    console.error('Error logging request body:', error);
  }

  let name, email, message, schedule, other, token;

  try {
    ({ name, email, message, schedule, other } = req.body);
    token = req.body.token;
    console.log('Token value sent into backend:', token);
  } catch (error) {
    console.error('Error destructuring request body:', error);
  }

  try {
    console.log('Validating reCAPTCHA token...');
    await tokenValidation(token, req);
    console.log('Token validation successful.');

    console.log('Sending email...');
    const emailStatus = await sendEmail(name, email, message, schedule, other, token);
    console.log(emailStatus);

    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error validating reCAPTCHA token or sending email');
  }
}
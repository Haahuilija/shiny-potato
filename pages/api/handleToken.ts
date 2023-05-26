import type { NextApiRequest, NextApiResponse } from 'next';
import tokenValidation from './assessment';
import sendEmail from './sendEmail';

export default async function handleToken(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message, schedule, other } = req.body;
  const token = req.body.token;

  try {
    console.log('Validating reCAPTCHA token...');
    await tokenValidation(token, req);
    console.log('Token validation successful.');

    console.log('Sending email...');
    await sendEmail(name, email, message, schedule, other, token, req, res);
    console.log('Email sent successfully');

    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error validating reCAPTCHA token');
  }
}
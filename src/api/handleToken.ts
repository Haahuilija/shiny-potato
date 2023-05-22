import type { NextApiRequest, NextApiResponse } from 'next';
import tokenValidation from './assessment';
import sendEmail from './sendEmail';

export default async function handleToken(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message, schedule, other } = req.body;
  const token = req.body.token;

  try {
    await tokenValidation(token, req);
    await sendEmail(name, email, message, schedule, other, token, req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error validating reCAPTCHA token');
  }
}
import axios from 'axios';

async function getSecretValue(name: string) {
  const response = await axios.get(`http://metadata.google.internal/computeMetadata/v1/secret/project/${name}`, {
    headers: {
      'Metadata-Flavor': 'Google'
    }
  });
  return response.data;
}

export async function getSecretValues() {
  try {
    const EMAIL_FROM = await getSecretValue('EMAIL_FROM');
    const EMAIL_TO = await getSecretValue('EMAIL_TO');
    const NEXT_PUBLIC_RECAPTCHA_SITE_KEY_TEST = await getSecretValue('NEXT_PUBLIC_RECAPTCHA_SITE_KEY_TEST');
    const SENDGRID_API_KEY = await getSecretValue('SENDGRID_API_KEY');

    return {
      EMAIL_FROM,
      EMAIL_TO,
      NEXT_PUBLIC_RECAPTCHA_SITE_KEY_TEST,
      SENDGRID_API_KEY
    };
  } catch (err) {
    console.error(err);
    return {
      EMAIL_FROM: process.env.EMAIL_FROM,
      EMAIL_TO: process.env.EMAIL_TO,
      NEXT_PUBLIC_RECAPTCHA_SITE_KEY_TEST: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_TEST,
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
    };
  }
}
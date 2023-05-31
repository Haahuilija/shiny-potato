import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

interface SecretValues {
  EMAIL_FROM: string | null;
  EMAIL_TO: string | null;
  SENDGRID_API_KEY: string | null;
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY_TEST: string | null;
}

export async function getSecretValues(): Promise<SecretValues> {
  const client = new SecretManagerServiceClient();
  const [emailFrom] = await client.accessSecretVersion({
    name: 'projects/31744863114/secrets/EMAIL_FROM/versions/latest',
  });

  const [emailTo] = await client.accessSecretVersion({
    name: 'projects/31744863114/secrets/EMAIL_TO/versions/latest',
  });

  const [sendGridApiKey] = await client.accessSecretVersion({
    name: 'projects/31744863114/secrets/SENDGRID_API_KEY/versions/latest',
  });

  const [recaptchaSiteKey] = await client.accessSecretVersion({
    name: 'projects/31744863114/secrets/NEXT_PUBLIC_RECAPTCHA_SITE_KEY_TEST/versions/latest',
  });

  const secretValues: SecretValues = {
    EMAIL_FROM: emailFrom?.payload?.data?.toString() ?? null,
    EMAIL_TO: emailTo?.payload?.data?.toString() ?? null,
    SENDGRID_API_KEY: sendGridApiKey?.payload?.data?.toString() ?? null,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY_TEST: recaptchaSiteKey?.payload?.data?.toString() ?? null,
  };

  return secretValues;
}
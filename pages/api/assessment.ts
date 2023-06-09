import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';
import { getSecretValues } from './secrets';

const PROJECT_ID = 'tua-website-1681296175377';

export default async function tokenValidation(token: string | null, req: any) {
  if (!token) {
    console.error('reCAPTCHA token is not set');
    throw new Error('reCAPTCHA token is missing');
  }

  try {
    const client = new RecaptchaEnterpriseServiceClient();
    const { NEXT_PUBLIC_RECAPTCHA_SITE_KEY } = await getSecretValues();
    const assessmentRequest = {
      assessment: {
        event: {
          token: token,
          siteKey: NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        },
        expectedAttributes: {
          scoreReasons: true,
        },
      },
      parent: `projects/${PROJECT_ID}`,
    };

    const [assessment] = await client.createAssessment(assessmentRequest);
    if (!assessment.tokenProperties?.valid) {
      console.error(`Invalid reCAPTCHA token: ${assessment.tokenProperties?.invalidReason}`);
      throw new Error('Invalid reCAPTCHA token');
    }

    const score = assessment.riskAnalysis?.score;

    if (score === undefined || score === null || score < 0.5) {
      return false;
    }

    return true;
  } catch (error) {
    console.error(error);
    throw new Error('Error interpreting reCAPTCHA assessment');
  }
};
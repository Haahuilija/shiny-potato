import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';

const PROJECT_ID = 'tua-website-1681296175377';
const SITE_KEY = '6Letzo8lAAAAAEV5hmLvRtKRenOEkLy8p0cgfh8A';

export default async function validateToken(token: string | null, req: any) {
  if (!token) {
    console.error('reCAPTCHA token is not set');
    throw new Error('reCAPTCHA token is missing');
  }

  console.log('Interpreting reCAPTCHA assessment...');
  try {
    const client = new RecaptchaEnterpriseServiceClient();
    const assessmentRequest = {
      assessment: {
        event: {
          token: token,
          siteKey: SITE_KEY,
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
    console.log(`reCAPTCHA assessment score: ${score}`);

    if (score === undefined || score === null || score < 0.5) {
      console.log(`reCAPTCHA score too low: ${score}`);
      return false;
    }

    console.log(`reCAPTCHA score high enough: ${score}`);
    return true;
  } catch (error) {
    console.error(error);
    throw new Error('Error interpreting reCAPTCHA assessment');
  }
};
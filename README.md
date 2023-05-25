This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## About

This is a website I built for a relative. I decided to make use of this opportunity and use AI to help me, as I learned new things.

Created with Next.js.

Using Google Enterprise reCaptcha API to protect the contact form.

Using Secret Manager so I can avoid hard-coding API keys and Email adresses.

Set up everything using the Google Cloud platform, where I made a new project just for this website.
Enabled all the APIs needed and got the service running.

There was a need for custom domains as well, so had to set that up in Cloud Run.

Workflow setup: Edit code in VSC, Git repo linked with continuous deployment, where pulling into the Main branh triggers a build event,
using Docker to run my app in a Dev Container for testing purposes, but also using it to build the images for Cloud Run service.
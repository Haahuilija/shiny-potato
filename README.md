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

This website was developed as a personal project for a relative, serving as a platform for learning new technologies while creating a functional and user-friendly site. The site's focus is to provide a seamless user experience with minimal friction, and it successfully achieves this by incorporating advanced technologies and methodologies.

The project was built using a modern technology stack that includes Next.js, React, Node.js, TypeScript, and JavaScript for the core functionalities. CSS was employed to style the website, ensuring an appealing and intuitive interface.

Leveraging the power of AI, some of the website images were uniquely generated. In addition to this, royalty-free images from Shutterstock were incorporated to enhance the website's visual aesthetics and user engagement.

For added security and user-friendly interaction, Google Enterprise reCaptcha API was integrated into the contact form. This helps in protecting the form from spam and abuse while ensuring genuine users can easily navigate through.

Sensitive data like API keys and email addresses were handled securely by utilizing Google's Secret Manager. This approach allows for secure access to this information without having to hard-code them into the application.

The project was hosted and managed on Google Cloud, where I set up a dedicated project for this website. Google Cloud also facilitated the use of APIs and ensured smooth and continuous running of the service. Custom domains were set up in Google Cloud Run to offer a professional look and feel to the website.

A comprehensive and efficient workflow was established for this project. I utilized Visual Studio Code (VSC) for code editing and Git for version control. The main branch was linked to continuous deployment, so that each pull into the branch triggers a build event. Docker played a crucial role in this workflow, not only for running the app in a Development (Dev) Container for testing purposes but also for building images for the Cloud Run service.

Lastly, the SendGrid API was employed for sending emails. This reliable and scalable email service added a crucial aspect to the functionality of the website, ensuring smooth communication via email.

This project served as an excellent opportunity to learn and incorporate various technologies, emphasizing the power of AI and modern development tools in building user-centric, functional, and visually appealing websites.
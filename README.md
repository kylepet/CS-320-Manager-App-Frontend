This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

```bash
Run npm install.

```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## File Structure

Right now our file structure is divided into a few parts. The first is a node_modules directory contained within the root directory of the project, this contains all of the packages we installed into our directory using npm install, all of the packages installed with this project, along with their dependencies are contained within the package.json and package-log.json files. The code that we have written ourselves is all contained within the src directory. Within which we have a few sub directories. The first of which being our components directory, which contains reuseable JSX, all of which is used multiple times throughout the application. Our lib directory contains all relevent functions to perform behind the scenes functionality, such as API calls, and handling authentication. Our pages directory contains all pages in the application, being the login page, student dashboard page, and instructor dashboard page. Our styles directory contains all relevant CSS used in our project, primarily for the login page.

## Pages

As of now, the application consists of three pages. The first page, which is the entry point to our application, is our login screen, which can be reached at [http://localhost:8000](http://localhost:8000). Our login screen consists of a username and password field, which upon an appropriate combination of these two fields, brings the user to the respective page, instructor dashboard, or user dashboard.

Picture of our login page:
![login screen](https://github.com/TCarel01/CS-320-Manager-App-Frontend/assets/105895758/c1d074a7-b457-4ce1-984e-d34901ab3c22)

Once Logged in, you will be redirected to the appropriate dashboard. Our user dashboard displays all sections, and the status of the student's application for each section, as well as containing all relevant information about all sections regarding the student separately from the sections. If the student has not submitted an application, then they will be prompted to do so under the always open collapsible denoted by the student's name. All sections will note that the student has not submitted an application to that section. Upon submitting an application, but not being accepted, the status under the student's name will change to that representing the sections which the student has submitted to, and all sections which the student has submitted to will change to the proper status of the application, whether it be reject, accept, pending, etc. All of these statuses are their own individual components, which are displayed through a singular sections component.

Picture of our student dashboard page:

![student dashboard](https://github.com/TCarel01/CS-320-Manager-App-Frontend/assets/105895758/c6b35a8a-b529-4ff3-917d-b66e3c167950)

Finally, we have our instructor dashboard, containing all information relevant to that of the instructor. The instructor is able to view all students who have applied to their section, and change the status of the student's enrollment to accept or reject them. Once accepted or rejected, the student is either moved to the enrooled section, or removed entirely from the instructor's view. In addition, the instructor can change the course enrollment cap to whatever they please. The instructor can also view the information and enrollment status of other sections, but are unable to change them in the same way which they can change their own.

Picture of the instructor dashboard page:
![professor dashboard](https://github.com/TCarel01/CS-320-Manager-App-Frontend/assets/105895758/3f5e4857-f243-463a-b357-281c18a34682)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

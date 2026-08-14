# Siddartha Raj Subedi — Full Stack Developer Portfolio

A modern and responsive personal developer portfolio built with **React, Vite, Tailwind CSS, Framer Motion, React Router, Lucide React, and React Icons**.

The portfolio presents my projects, technical skills, development journey, certificates, current learning, and contact information in a clean and recruiter-focused interface.

---

## Live Portfolio

**Portfolio:**
https://portfolio-mu-nine-bgdnhhss9f.vercel.app/

---

## About Me

I am **Siddartha Raj Subedi**, a Computer System Engineering student based in **Pokhara, Nepal**, with a strong interest in Full Stack Development.

I enjoy building practical web applications and learning how frontend interfaces, backend APIs, authentication, and databases work together in complete systems.

My current development focus includes:

* React
* JavaScript
* Python
* Django
* Django REST Framework
* PostgreSQL
* REST APIs
* JWT Authentication
* Tailwind CSS
* Git and GitHub

I am currently open to **Full Stack Developer internship opportunities** where I can contribute to real projects and continue developing my software engineering skills.

---

## Portfolio Features

The portfolio includes:

* Responsive design for mobile, tablet, laptop, and desktop
* Modern green, slate, and white design system
* Animated Hero section
* Featured Project section
* Project cards with detailed project pages
* GitHub and Live Demo links
* About Me section
* Technical Skills section
* What I Build section
* Development Journey timeline
* Certificates and learning section
* Why Hire Me section
* Contact section
* Downloadable resume
* Scroll progress indicator
* Back-to-top button
* Framer Motion animations
* Reusable cards, buttons, badges, and icons
* Responsive mobile navigation
* Custom project case-study pages
* Custom 404 page
* Vercel deployment support

---

## Homepage Structure

The homepage currently follows this order:

1. Hero
2. Featured Project
3. About
4. Projects
5. Skills
6. What I Build
7. My Journey
8. Certificates & Learning
9. Why Hire Me
10. Contact
11. Footer

The layout is designed to show practical work early, followed by the skills, education, development journey, and supporting information behind those projects.

---

## Projects

### Simple Ecommerce Website

A full-stack ecommerce project focused on:

* User authentication
* Product management
* CRUD operations
* REST API integration
* Search
* Filtering
* Responsive interfaces
* Database integration

The project includes a live deployment.

**Live Demo:**
https://electro-ecommerce-rho.vercel.app/

> Before final deployment of this portfolio, the ecommerce project information in `src/constants/projectData.js` should be checked carefully. The current short description mentions Bootstrap and SQLite, while other project fields list React, Tailwind CSS, and PostgreSQL. The project should only list the technologies that were actually used.

---

### Authentication System

An authentication project created to understand real application authentication workflows.

Features include:

* User registration
* Login
* Logout
* Password reset
* JWT authentication
* Protected routes
* REST API integration

Main technologies include:

* React
* Python
* Django REST Framework
* PostgreSQL
* JWT

---

### Modern Portfolio

This portfolio is also included as one of my development projects.

It demonstrates:

* React component architecture
* Responsive UI development
* Tailwind CSS
* Framer Motion
* React Router
* Project detail routing
* Reusable components
* Custom design system
* Responsive navigation
* Interactive hover effects

---

## Technology Stack

### Frontend

* React
* JavaScript
* HTML
* CSS
* Tailwind CSS

### Backend Experience

* Python
* Django
* Django REST Framework
* REST APIs
* JWT Authentication

### Database

* PostgreSQL
* SQL

### Routing

* React Router DOM

### Animation

* Framer Motion

### Icons

* Lucide React
* React Icons

### Development Tools

* Git
* GitHub
* VS Code
* Postman
* Vite
* ESLint

### Deployment

* Vercel

---

## Project Structure

```text
portfolio/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── projects/
│   │   │   ├── authentication/
│   │   │   ├── ecommerce/
│   │   │   └── portfolio/
│   │   └── resume/
│   │
│   ├── components/
│   │   │
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ScrollProgress.jsx
│   │   │   └── ScrollTop.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── About.jsx
│   │   │   ├── Certificates.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── FeaturedProject.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── MyJourney.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── WhatIBuild.jsx
│   │   │   └── WhyHireMe.jsx
│   │   │
│   │   └── ui/
│   │       ├── Loader.jsx
│   │       ├── PrimaryButton.jsx
│   │       ├── ProjectCard.jsx
│   │       ├── SecondaryButton.jsx
│   │       └── SectionHeading.jsx
│   │
│   ├── constants/
│   │   ├── heroData.js
│   │   ├── profile.js
│   │   └── projectData.js
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── hero/
│   │   ├── HeroContent.jsx
│   │   ├── HeroImage.jsx
│   │   ├── HeroStats.jsx
│   │   └── TechStack.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   └── ProjectDetails.jsx
│   │
│   ├── routes/
│   │   └── Router.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── eslint.config.js
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

---

## Installation

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

Move into the project folder:

```bash
cd portfolio
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Start the development server

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

---

## Production Build

Create a production build using:

```bash
npm run build
```

---

## Preview Production Build

```bash
npm run preview
```

---

## ESLint

Run ESLint with:

```bash
npm run lint
```

---

## Main Dependencies

The project currently uses:

```json
{
  "react": "^19.2.7",
  "react-dom": "^19.2.7",
  "react-router-dom": "^7.11.0",
  "tailwindcss": "^4.3.3",
  "framer-motion": "^12.42.2",
  "lucide-react": "^1.28.0",
  "react-icons": "^5.7.0"
}
```

Vite is used as the development and production build tool.

---

## Personal Information

Personal portfolio information is stored in:

```text
src/constants/profile.js
```

This file contains information such as:

* Name
* Developer title
* Location
* Availability
* Email
* Phone
* Portfolio URL
* GitHub
* LinkedIn
* Resume
* Profile image
* About information
* Skills
* Statistics
* Current learning

Keeping this information in one file makes the portfolio easier to update.

---

## Project Data

Project information is stored in:

```text
src/constants/projectData.js
```

Each project can include:

* ID
* Slug
* Title
* Short description
* Full description
* Cover image
* Screenshots
* Problem
* Solution
* Features
* Technologies
* Architecture
* Challenges
* Lessons learned
* GitHub link
* Live demo
* Project statistics

This data is reused by the project cards, Featured Project section, and Project Details page.

---

## Resume

The resume file is stored inside:

```text
src/assets/resume/resume.pdf
```

The portfolio Resume buttons use the HTML `download` attribute so visitors can download the resume directly.

---

## Responsive Design

The portfolio is designed to work across:

* Mobile phones
* Tablets
* Laptops
* Desktop monitors
* Large screens

Tailwind CSS responsive utilities are used throughout the project for:

* Navigation
* Grid layouts
* Typography
* Cards
* Project screenshots
* Buttons
* Timeline layouts
* Contact layout
* Section spacing

---

## Design System

The portfolio uses a consistent design system based on:

### Primary Accent

Green

### Supporting Colours

* Slate
* White
* Soft gray
* Light emerald

### Visual Style

* Rounded cards
* Soft borders
* Subtle shadows
* Green accents
* Responsive spacing
* Clean typography
* Soft background glows
* Small hover animations
* Consistent section badges
* Reusable icon containers

Global reusable styles are maintained in:

```text
src/index.css
```

Important reusable classes include:

```text
container-custom
section-badge
section-title
section-description
portfolio-card
btn-primary
btn-secondary
btn-arrow
btn-download
btn-external
card-icon
social-icon
hover-link
```

---

## Current Learning

I am currently strengthening my knowledge in areas such as:

* Docker
* Redis
* Testing
* CI/CD
* AWS
* Backend architecture
* System design
* Clean architecture

---

## Current Career Goal

My current goal is to gain practical industry experience through a **Full Stack Developer internship**.

I am particularly interested in opportunities where I can:

* Work with real development teams
* Build practical applications
* Improve backend knowledge
* Strengthen frontend development
* Learn production workflows
* Improve testing skills
* Understand deployment and DevOps practices
* Continue developing clean and maintainable code

---

## Contact

**Siddartha Raj Subedi**

Full Stack Developer
Pokhara, Nepal

**GitHub:**
https://github.com/siddarthasubedi1

**LinkedIn:**
https://linkedin.com/in/siddarthasubedi1

**Portfolio:**
https://portfolio-mu-nine-bgdnhhss9f.vercel.app/

---

## Future Improvements

Possible future improvements include:

* Functional backend contact form
* Individual GitHub repository URLs for every project
* More live project deployments
* Additional project screenshots
* Certificate images or PDF links
* Automated testing
* Performance optimization
* Accessibility testing
* Lighthouse optimization
* CI/CD workflow
* Blog or learning notes section
* Additional backend projects
* Cloud deployment experience
* Improved SEO metadata

---

## Important Repository Cleanup

Before the final public release, unused or duplicate components should be reviewed and removed if they are no longer part of the portfolio.

Keeping only actively used components will make the repository easier to understand and will reduce the chance of future Git merge conflicts.

---

## License

This is a personal portfolio project.

The source code may be used as a learning reference, but personal information, resume content, branding, profile images, and project screenshots should not be copied and presented as another person's work.

# 🎥 Meetify 

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Clerk](https://img.shields.io/badge/-Clerk-6C47FF?style=flat&logo=clerk&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

<img width="1484" height="715" alt="Screenshot 2026-04-18 8 43 49 PM" src="https://github.com/user-attachments/assets/499eb00e-78ec-498d-af2a-8992b39bce97" />

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation Guide](#installation-guide)
- [Usage](#usage)
  - [Creating a Meeting](#creating-a-meeting)
  - [Managing your Profile](#managing-your-profile)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#-license)

# Introduction

**Meetify** is a modern, enterprise-ready video conferencing application built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. It leverages the **Stream Video SDK** to provide a scalable, low-latency, and high-quality communication experience.

## 🚀 Features

* **Secure Authentication:** Robust user login and registration via Clerk.
* **Instant Meetings:** Create a new meeting and share the link in seconds.
* **Scheduled Meetings:** Plan ahead by scheduling future sessions with a built-in calendar view.
* **Meeting Recordings:** Record your sessions and access them later from your personal dashboard.
* **Real-time Interaction:** Features include screen sharing, participant lists, and integrated chat.
* **Personal Room:** A dedicated, permanent link for your recurring meetings.
* **Responsive Design:** Optimized for desktop, tablet, and mobile viewing.

## 🛠️ Tech Stack

* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS, Shadcn UI
* **Video Infrastructure:** Stream Video SDK
* **Auth:** Clerk
* **Deployment:** Vercel (Recommended)

## 🏁 Getting Started

### Prerequisites

Ensure you have the following installed:
* **Node.js** (v18.0.0 or higher)
* A **Stream** account (for Video SDK credentials)
* A **Clerk** account (for authentication keys)

### Installation Guide

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/raymondoyondi/Meetify.git](https://github.com/raymondoyondi/Meetify.git)
   cd Meetify

2. **Install dependencies:**
   ```
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
Create a `.env.local` file in the root directory and add your credentials from Clerk and GetStream:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   NEXT_PUBLIC_STREAM_API_KEY=
   STREAM_SECRET_KEY=
   ```

4. **Run the development server:**
   ```
   npm run dev
   # or
   yarn dev
   ```

5. **Open the app:**
Open `http://localhost:3000` in your browser to see the result.

# Usage

### Creating a Meeting

1. Navigate to the **Dashboard**.
2. Click **"New Meeting"**.
3. Copy the generated link and send it to your participants.

### Managing your Profile

* Users can update their display names and avatars via the **Account Settings** tab, which syncs directly with Clerk and Stream

## Project Structure

This project uses the [Next.js App Router](https://nextjs.org) structure with a clear separation of concerns to maintain organization and scalability.
```
├── app/              # Next.js App Router (Pages & Layouts)
├── components/       # Reusable UI components
├── constants/        # Configuration and static data
├── hooks/            # Custom React hooks (Meeting logic)
├── lib/              # Utility functions and Stream actions
├── providers/        # Context providers (Stream, Clerk)
└── public/           # Static assets (Icons, Images)
```

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

<div>
  <h1><img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f49e/512.webp" width="40" height="40"> Contributors</h1>
</div>

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Temi-Tade"><img src="https://avatars.githubusercontent.com/u/104860162?v=4?s=100" width="100px;" alt="Temiloluwa Akintade"/><br /><sub><b>Temiloluwa Akintade/b></sub></a><br /><a href="https://github.com/getmeetify/Meetify/commits?author=Temi-Tade" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<hr>

## License

Distributed under the **MIT License**. See `LICENSE` for more information.

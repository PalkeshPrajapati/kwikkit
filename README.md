# kwikkit

Kwikkit is a modern, premium, and interactive web platform built for a zero-commission food delivery network serving the Chandigarh Tricity region. The platform allows users to browse landing details, read compliance information, interact with company blogs, and submit contact or job applications directly to the company.

---

## 🚀 Key Features

### 1. Unified Design & Layout
* **Premium Aesthetics**: Harmonious dark-green/cream color palettes, custom photographic backgrounds, glassmorphic overlays, and tactile transitions.
* **Responsive Subpages**: High-contrast, easy-to-read designs across Blog pages, Restaurant Onboarding, Careers Portal, and Terms of Service.

### 2. Interactive Legal & Compliance (Terms & Conditions)
* **Desktop Sidebar**: Left-hand sticky sidebar for one-click section jumps and scrolling position tracking.
* **Mobile Navigation Drawer**: Uses a floating bottom-center pill trigger showing the active section. Tapping the pill opens a slide-up bottom drawer, which locks body scroll and smooth-scrolls to the target section with a precise header offset.
* **Hover Sanitization**: Removed hover states on touch screens and replaced them with standard `:active` states for tap feedback.

### 3. Dynamic Blog Platform (`/blog/[id]`)
* Converted static modals into dedicated dynamic subpages with static database exports for fast loading and full SEO optimization.
* Complete visual layout with premium display typography and high-contrast readable layouts.

### 4. Interactive Forms with Resend Email Routing
* **Unified API Router**: Safe Route Handler (`/api/submit-form`) processes general inquiries, restaurant sign-ups, and job applications securely.
* **CV PDF Attachments (Careers)**: Applicants can upload a resume (.pdf up to 5MB) using a custom drag-and-drop/upload box. The file is validated client-side and attached directly to the Resend email.
* **Dynamic File Renaming**: Incoming applicant resumes are automatically renamed to `[FullName]_[Role]_Resume.pdf` (with whitespace and special characters sanitized to underscores) for clean HR cataloging.
* **Local Developer Sandbox**: If no Resend API key is provided locally, the handler falls back to a console-logged simulation mode displaying email details and attachment size.

### 5. Trusted Footer Certifications
* Displays clickable **FSSAI Licensed** and **ISO Certified** translucent glassmorphism badges with bright green status dots. Badges link directly to compliance PDF certificates (`/public/legal/`) opening in new tabs.

---

## 🛠️ Technology Stack

* **Framework**: Next.js (App Router)
* **Runtime**: Node.js & React 19
* **Styling**: Tailwind CSS & Inline CSS for responsive performance
* **Email Delivery**: Resend Node.js SDK
* **Icons**: Lucide React

---

## 💻 Local Setup & Development

### 1. Clone & Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root folder of the project (you can copy [.env.example](.env.example)):
```env
# Resend API Key for sending emails (sign up at https://resend.com)
RESEND_API_KEY=your_resend_api_key_here

# Recipient email address where form submissions will be sent
NOTIFICATION_RECIPIENT_EMAIL=xxxx@xxxx.xx
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🌐 Production Deployment (Vercel)

The easiest way to deploy this Next.js App is via the [Vercel Platform](https://vercel.com/new):

1. Link your GitHub repository.
2. In the **Environment Variables** section of the Vercel deployment configuration, add:
   * `RESEND_API_KEY` (Your live Resend API key)
   * `NOTIFICATION_RECIPIENT_EMAIL` (Your inbox email address)
3. Click **Deploy**. Vercel will build the bundles and serve the serverless functions securely.

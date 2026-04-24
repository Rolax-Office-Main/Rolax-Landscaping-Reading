# 🚀 COMPLETE GUIDE: Using This Codebase for Multiple Companies

## 📌 Table of Contents
1. Can You Reuse This Code?
2. What Needs to Change
3. Where Are All the Changes
4. Step-by-Step Setup for New Company
5. Complete Change Checklist
6. Example: Setting Up for Another Company

---

## ✅ PART 1: CAN YOU REUSE THIS CODE?

### YES! 100% YES!

**Why?**
- ✅ This is a **Next.js template** - designed to be reusable
- ✅ All company-specific data is **separated** (not hardcoded)
- ✅ Uses **environment variables** for sensitive data
- ✅ Component structure is **generic** (Header, Footer, Services, etc.)
- ✅ Easy to customize for any landscaping company

**Time to Setup New Company**: 
- **Fast**: 2-3 hours (experienced)
- **First time**: 4-5 hours (learning)
- **Beginner**: 6-8 hours

**Cost**: 
- $0 - You already have the code!
- Just hosting costs ($5-15/month)

---

## 🔍 PART 2: WHAT NEEDS TO CHANGE?

### Corporate Data (MOST IMPORTANT):
1. ❌ Company name (Rolax → New Company)
2. ❌ Logo image
3. ❌ Contact information (phone, email, address)
4. ❌ Service offerings
5. ❌ Colors/branding
6. ❌ Content (About, Blog, Testimonials)

### Technical Setup:
1. ❌ Environment variables (.env.local)
2. ❌ EmailJS credentials (new account)
3. ❌ Domain name
4. ❌ Google Analytics property ID
5. ❌ Google Search Console property

### Optional/Nice-to-Have:
1. ⚠️ Social media links
2. ⚠️ Font choices
3. ⚠️ Color schemes
4. ⚠️ Layout variations

---

## 🗂️ PART 3: WHERE ARE ALL THE CHANGES?

### Let me show you EVERY location that needs updating:

---

## 📋 FILE-BY-FILE BREAKDOWN

### **1. ROOT ENVIRONMENT VARIABLES (.env.local)**
**Location**: `e:\work\rolex canada\rolax-next\.env.local`

```env
# Change ALL of these for new company:
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_new_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_new_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_new_public_key

NEXT_PUBLIC_BUSINESS_NAME=New Company Name
NEXT_PUBLIC_BUSINESS_EMAIL=newemail@company.com
NEXT_PUBLIC_BUSINESS_PHONE=+1-XXX-XXX-XXXX
NEXT_PUBLIC_BUSINESS_ADDRESS=123 Main St, City, Province
NEXT_PUBLIC_BUSINESS_CITY=City Name
NEXT_PUBLIC_BUSINESS_PROVINCE=ON
NEXT_PUBLIC_BUSINESS_POSTAL_CODE=A1A 1A1

NEXT_PUBLIC_SITE_URL=https://newcompanydomain.com
NEXT_PUBLIC_SITE_NAME=New Company Name
```

**Impact**: 🔴 CRITICAL - All forms & business info

---

### **2. ROOT LAYOUT FILE**
**Location**: `src/app/layout.tsx` (Lines with company data)

```tsx
// FIND AND REPLACE:

// Line 27 - Metadata title/description
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "New Company Name | Your Service Description",
                    ↑↑↑ CHANGE THIS
    template: "%s | New Company Name",
                      ↑↑↑ CHANGE THIS
  },
  description: "Your company description here",
                        ↑↑↑ CHANGE THIS
};

// Line 104 - Schema markup company name
name: "New Company Name",
      ↑↑↑ CHANGE THIS

// Line 105 - Logo path (if different)
image: `${siteUrl}/images/your-new-logo.jpg`,
                           ↑↑↑ CHANGE IF NEEDED

// Line 109 - Company email
email: "youremail@company.com",
       ↑↑↑ CHANGE THIS

// Line 110 - Company phone
telephone: "+1-647-916-6654",
           ↑↑↑ CHANGE THIS

// Line 111-114 - Address components
streetAddress: "Your Street Address",
addressLocality: "Your City",
addressRegion: "ON",
postalCode: "A1A 1A1",

// Line 120-123 - Service areas
areaServed: ["City1", "City2", "Region"],
            ↑↑↑ CHANGE THESE

// Line 124 - Your services
serviceType: ["Service1", "Service2", "Service3"],
             ↑↑↑ CHANGE YOUR SERVICES
```

**Impact**: 🔴 CRITICAL - SEO & Schema markup

---

### **3. HEADER COMPONENTS**
**Location**: `src/common/header/HeaderMiddle.tsx`

```tsx
// Line 8 - Logo path
const LOGO_PATH = "/images/your-new-logo-file.jpg";
                           ↑↑↑ CHANGE THIS

// Line 155 - Company address (if different)
// Line 160 - Company phone number
// Line 166 - Company email
```

**Impact**: 🟠 HIGH - Brand visibility

---

### **4. HEADER TOP (Promotional Banner)**
**Location**: `src/common/header/HeaderTop.tsx`

```tsx
// Line 18 - Promotional message
<div className="offer-text">
  ● Your promotional message here
    ↑↑↑ CHANGE THIS
</div>
```

**Impact**: 🟡 MEDIUM - Marketing message

---

### **5. FOOTER COMPONENT**
**Location**: `src/common/footer/Footer.tsx`

```tsx
// Line 20 - Logo for footer
src="/images/your-new-logo.jpg"
            ↑↑↑ CHANGE THIS

// Line 108 - Company email
email: "newemail@company.com"
       ↑↑↑ CHANGE THIS

// Line 115 - Company phone
href="tel:+1-XXX-XXX-XXXX"
          ↑↑↑ CHANGE THIS

// Line 124 - Company address
Address text here
                ↑↑↑ CHANGE THIS

// Line 175 - Newsletter submit handler
// (EmailJS will use env variables automatically)

// Line 200-205 - Social media links
href="https://www.facebook.com/your-page"
                       ↑↑↑ CHANGE THIS
```

**Impact**: 🔴 CRITICAL - Contact info & forms

---

### **6. HERO SECTION (Main Banner)**
**Location**: `src/components/hero/Hero.tsx`

```tsx
// This component uses EmailJS environment variables (GOOD!)
// No hardcoded data to change here EXCEPT:

// Line 10-11 - EmailJS credentials (use env variables - already done)
// No direct company data hardcoded here ✓
```

**Impact**: ✅ Already optimized

---

### **7. CONTACT FORM**
**Location**: `src/components/contact/ContactForm.tsx`

```tsx
// Line 12 - Logo image (if different)
src="/images/your-logo.jpg"
            ↑↑↑ CHANGE IF NEEDED

// Line 82 - Company phone display
const PHONE_DISPLAY = "(XXX) XXX-XXXX";
                       ↑↑↑ CHANGE THIS

// Line 83 - Company phone tel link
const PHONE_TEL = "+1XXXXXXXXXX";
                  ↑↑↑ CHANGE THIS

// Line 86 (approx) - Company address
const mapAddress = "123 Main St, City, Province A1A 1A1";
                                      ↑↑↑ CHANGE THIS

// Line 90 - Google Maps coordinates
// "https://www.google.com/maps/search/?api=1&query="
// The address will automatically update above
```

**Impact**: 🔴 CRITICAL - Contact info & map

---

### **8. SERVICE COMPONENT**
**Location**: `src/components/sevices/Service.tsx`

```tsx
// This shows your services with data array starting Line 15
const ServiceData: ServiceDataType[] = [
  {
    id: uuidv4(),
    heading: "Your Service 1 Name",
              ↑↑↑ CHANGE THIS
    description: "Service description",
                 ↑↑↑ CHANGE THIS
    img: "/images/service/image1.jpg",
                          ↑↑↑ CHANGE THIS
    serviceLink: "/service-details/your-service-1",
                                   ↑↑↑ CHANGE THIS
  },
  // ... MORE SERVICES
];
```

**Impact**: 🟠 HIGH - Service listings

---

### **9. HOME ABOUT SECTION**
**Location**: `src/components/home-about/HomeAbout.tsx`

```tsx
// Line 14 - Company image
src="/images/about/your-about-image.jpg"
                   ↑↑↑ CHANGE THIS

// Line 23 - Award/achievement text
<h3>Your Company: Since XXXX! Over XXX Awards</h3>
    ↑↑↑ CHANGE THIS

// Line 33 - Tagline
<span>Your Company Tagline Here</span>
      ↑↑↑ CHANGE THIS

// Line 34-40 - About description
<h3>Your Company Name and description</h3>
    ↑↑↑ CHANGE THIS
<p>
  Your complete company description and mission statement
  ↑↑↑ CHANGE THIS ENTIRE PARAGRAPH
</p>
```

**Impact**: 🟠 HIGH - Company identity

---

### **10. TESTIMONIALS COMPONENT**
**Location**: `src/components/testimonial/Testimonial.tsx`

```tsx
// Lines 15-50 - Testimonial data array
const TestimonialData: TestimonialDataType[] = [
  {
    id: uuidv4(),
    name: "Customer Name",
           ↑↑↑ CHANGE THIS
    description: "Customer review/testimonial",
                 ↑↑↑ CHANGE THIS
  },
  // ... MORE TESTIMONIALS
];
```

**Replace with your actual customer testimonials**

**Impact**: 🟡 MEDIUM - Social proof

---

### **11. BLOG COMPONENT**
**Location**: `src/components/page-blog/Blog.tsx`

```tsx
// Lines 18-40 - Blog posts array
const BlogData: BlogDataType[] = [
  {
    id: uuidv4(),
    img: "/images/blog/your-image.jpg",
         ↑↑↑ CHANGE THIS
    parentCat: "Category",
               ↑↑↑ CHANGE THIS
    regularCat: "Subcategory",
                ↑↑↑ CHANGE THIS
    heading: "Your blog post title",
             ↑↑↑ CHANGE THIS
    date: "Your post date",
          ↑↑↑ CHANGE THIS
    author: "Your Company Name",
            ↑↑↑ CHANGE THIS
  },
  // ... MORE BLOG POSTS
];
```

**Replace with your blog content**

**Impact**: 🙂 MEDIUM - SEO & engagement

---

### **12. SERVICE DETAIL PAGES (7 files)**
**Locations**: 
- `src/app/service-details/landscaping/layout.tsx`
- `src/app/service-details/hardscaping/layout.tsx`
- `src/app/service-details/tree-service/layout.tsx`
- `src/app/service-details/snow-removal/layout.tsx`
- `src/app/service-details/sod-installation/layout.tsx`
- `src/app/service-details/mulch-installation/layout.tsx`
- `src/app/service-details/artificial-turf/layout.tsx`

```tsx
// IN EACH LAYOUT FILE:

export const metadata: Metadata = {
  title: "Your Service Name | Your Company Name",
                          ↑↑↑ CHANGE ALL
  description: "Your service description",
               ↑↑↑ CHANGE THIS
  keywords: ["keyword1", "keyword2", "city"],
            ↑↑↑ CHANGE YOUR KEYWORDS
};
```

**Impact**: 🔴 CRITICAL - SEO for service pages

---

### **13. PAGE-SPECIFIC METADATA (4 files)**
**Locations**:
- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/services/page.tsx`
- `src/app/blogs/page.tsx`

```tsx
// IN EACH PAGE FILE:

export const metadata: Metadata = {
  title: "Your Company | Your Page",
         ↑↑↑ CHANGE TO YOUR COMPANY
  description: "Your page description",
               ↑↑↑ CHANGE THIS
  keywords: ["keyword1", "keyword2"],
            ↑↑↑ CHANGE YOUR KEYWORDS
};
```

**Impact**: 🔴 CRITICAL - Page SEO

---

### **14. PUBLIC IMAGES**
**Location**: `public/images/`

**Replace these:**
- `public/images/rolax landscaping new logo.jpg` → Your company logo
- `public/images/about/about.jpg` → Your about image
- `public/images/service/*.jpg` → Your service images
- `public/images/blog/*.jpg` → Your blog images
- `public/images/project/*.jpg` → Your project images
- `public/favicon.ico` → Your company favicon

**Impact**: 🟠 HIGH - Visual branding

---

### **15. SITEMAP**
**Location**: `src/app/sitemap.ts`

```tsx
// No hardcoded company data, but update URLs if services are different:

{
  url: `${baseUrl}/service-details/landscaping`,
           ↑↑↑ CHANGE IF YOUR SERVICES ARE DIFFERENT
}
```

**Impact**: 🟡 MEDIUM - Search engine indexing

---

### **16. PACKAGE.JSON**
**Location**: `package.json`

```json
{
  "name": "yourcompany-next",
       ↑↑↑ CHANGE THIS
  "version": "0.1.0",
  ...other fields stay same...
}
```

**Impact**: 🟡 LOW - Just for identification

---

## 🎯 PART 4: STEP-BY-STEP SETUP FOR NEW COMPANY

### **PHASE 1: Clone & Organize (15 minutes)**

#### **What This Phase Does:**
You're creating a completely independent copy of the Rolax website code for your new company. Think of it like making a photocopy of a template.

#### **Step 1: Copy the Project Folder**

**What it is:**
- A folder contains all the code files for the website
- We're making a complete copy of it for your new company
- This way, Rolax's website stays the same, your new one is separate

**How to do it:**

**For Windows Users:**
1. Open File Explorer (Windows key + E)
2. Navigate to: `e:\work\rolex canada\`
3. You'll see a folder called `rolax-next` 
4. Right-click on `rolax-next`
5. Select "Copy" from menu
6. Navigate to: `e:\work\` (go up one level)
7. Create a new folder for your company:
   - Right-click in empty space
   - Select "New" → "Folder"
   - Name it: `new-company` (replace with actual company name)
8. Go INSIDE this `new-company` folder
9. Right-click → "Paste"
10. You now have: `e:\work\new-company\rolax-next` (rename the inner folder)

**File Path Result:**
```
BEFORE:
e:\work\
├── rolex canada\
│   └── rolax-next\ ← (original, don't change)

AFTER:
e:\work\
├── rolex canada\
│   └── rolax-next\ (original stays safe)
├── new-company\
│   └── newcompany-next\ ← (your new copy)
```

---

#### **Step 2: Open Terminal in New Project**

**What it is:**
- Terminal is where you type commands to tell computer what to do
- It's like a communication tool between you and the project

**How to do it:**

**Option A: Using VS Code (Easiest)**
1. Open VS Code
2. Click: "File" → "Open Folder"
3. Navigate to: `e:\work\new-company\newcompany-next`
4. Click "Select Folder"
5. In VS Code, click: "Terminal" → "New Terminal"
6. Terminal appears at bottom of screen

**Option B: Using PowerShell**
1. Open PowerShell (search "PowerShell" in Windows)
2. Type this command:
   ```
   cd e:\work\new-company\newcompany-next
   ```
3. Press Enter
4. You should see: `e:\work\new-company\newcompany-next>`

**File Path Confirmation:**
```
You should see this path shown somewhere:
e:\work\new-company\newcompany-next

If you see this: ✅ Good! You're in right place
If you see something else: ❌ Navigate to correct folder first
```

---

#### **Step 3: Update package.json File**

**What it is:**
- `package.json` is a special file that tells Node.js about your project
- It contains project name, version, and list of tools needed
- Located at: `e:\work\new-company\newcompany-next\package.json`

**How to do it:**

1. In VS Code, open file explorer on left side
2. Find and click: `package.json` (at root level)
3. File opens in editor
4. Look for this line around line 2:
   ```json
   "name": "rolax-next",
   ```
5. Change it to:
   ```json
   "name": "newcompany-next",
   ```
   Replace "newcompany" with your actual company name

6. Look for line 3:
   ```json
   "version": "0.1.0",
   ```
   Keep this the same (it's fine)

7. Save file: `Ctrl+S`

**File Location:**
```
e:\work\new-company\newcompany-next\package.json
↑ Root folder ↑
```

**What it looks like (before):**
```json
{
  "name": "rolax-next",
  "version": "0.1.0",
  "private": true,
  ...
}
```

**What it looks like (after):**
```json
{
  "name": "green-thumb-next",
  "version": "0.1.0",
  "private": true,
  ...
}
```

---

#### **Step 4: Install Dependencies (npm install)**

**What it is:**
- Dependencies are tools/libraries the project needs to work
- Think of it like downloading ingredients for a recipe
- `npm` is the package manager (tool that downloads stuff)
- `npm install` command tells it to download everything listed in `package.json`

**How to do it:**

1. Make sure terminal is open and showing:
   ```
   e:\work\new-company\newcompany-next>
   ```

2. Type this command:
   ```bash
   npm install
   ```

3. Press Enter

4. Wait... this takes 2-5 minutes
   - You'll see lots of text scrolling
   - This is NORMAL - it's downloading files
   - DO NOT close terminal during this
   - When done, you'll see: `added XX packages` or similar message

**File Path Result:**
```
BEFORE Installation:
e:\work\new-company\newcompany-next\
├── src\
├── public\
├── package.json
└── (other files)

AFTER Installation:
e:\work\new-company\newcompany-next\
├── src\
├── public\
├── package.json
├── node_modules\ ← (THIS APPEARS - thousands of files!)
└── (other files)
```

**Important Note:**
- `node_modules` folder will be HUGE (100+ MB)
- This is normal and expected
- Never delete it (you'll need it)
- Never upload it to git/GitHub (it's in .gitignore)

---

#### **Step 5: Create .env.local File**

**What it is:**
- `.env.local` stores secret information (passwords, API keys)
- `.env` files are special - they hold configuration for YOUR specific setup
- `.local` means it's only on your computer (not shared)
- This file tells the app: "Here's who you are and how to send emails"

**Why it matters:**
- Without this, forms won't work
- Email won't send
- Website won't remember company name
- This is THE most important file

**How to create it:**

**Method 1: Copy from .env.example (Easiest)**

1. In VS Code file explorer (left side)
2. Look at root folder - find `.env.example` file
3. Right-click on `.env.example`
4. Select: "Copy"
5. Right-click in empty space of file explorer
6. Select: "Paste" (creates copy)
7. A new file appears: `.env.example copy` or similar
8. Right-click it → "Rename"
9. Rename to: `.env.local` (exactly this name, with dot at start!)
10. Press Enter

**File Path:**
```
e:\work\new-company\newcompany-next\.env.local
                                      ↑ This dot is important!
```

**Method 2: Create Manually**

1. In VS Code, click: "File" → "New File"
2. Type: `.env.local` as filename
3. Press Enter
4. File appears empty - this is correct

---

#### **Step 6: Fill .env.local with Your Company Data**

**Now this is THE most important step!**

**What you're doing:**
- Adding your company information to the file
- This data will automatically appear throughout the website
- Change just ONE place (here) and it updates EVERYWHERE

**File Location:**
```
e:\work\new-company\newcompany-next\.env.local
```

**How to fill it:**

1. Open `.env.local` file (click it in VS Code)
2. File is empty or has old data
3. Delete everything inside
4. Copy-paste THIS template:

```env
# EmailJS Configuration
# Get your credentials from: https://dashboard.emailjs.com/
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here

# Business Information
NEXT_PUBLIC_BUSINESS_NAME=Your Company Name Here
NEXT_PUBLIC_BUSINESS_EMAIL=youremail@company.com
NEXT_PUBLIC_BUSINESS_PHONE=+1-XXX-XXX-XXXX
NEXT_PUBLIC_BUSINESS_ADDRESS=123 Main Street, City, Province
NEXT_PUBLIC_BUSINESS_CITY=City Name
NEXT_PUBLIC_BUSINESS_PROVINCE=ON
NEXT_PUBLIC_BUSINESS_POSTAL_CODE=A1A 1A1

# SEO & Domain
NEXT_PUBLIC_SITE_URL=https://yourcompanydomain.com
NEXT_PUBLIC_SITE_NAME=Your Company Name
```

**Now replace with YOUR actual data:**

**Example 1: For Green Thumb Landscaping (Vancouver)**
```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc12345
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz98765
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=greenthumb_key_12345

# Business Information
NEXT_PUBLIC_BUSINESS_NAME=Green Thumb Landscaping
NEXT_PUBLIC_BUSINESS_EMAIL=contact@greenthumb.ca
NEXT_PUBLIC_BUSINESS_PHONE=+1-604-555-1234
NEXT_PUBLIC_BUSINESS_ADDRESS=456 Oak Street, Vancouver, BC
NEXT_PUBLIC_BUSINESS_CITY=Vancouver
NEXT_PUBLIC_BUSINESS_PROVINCE=BC
NEXT_PUBLIC_BUSINESS_POSTAL_CODE=V6B 1A1

# SEO & Domain
NEXT_PUBLIC_SITE_URL=https://greenthumbvancouver.com
NEXT_PUBLIC_SITE_NAME=Green Thumb Landscaping
```

**How to get EmailJS credentials:**
1. Go to: https://www.emailjs.com/
2. Create free account
3. Click "Dashboards" at top
4. You'll see your Service ID
5. Click into your service
6. You'll see Template ID
7. In left menu, click "Account"
8. You'll see Public Key
9. Copy these 3 values into .env.local

**Save file:**
- Press: `Ctrl+S`
- File saved ✅

**Verification Checklist:**
```
✓ File name is exactly: .env.local (with dot)
✓ File location: root folder of project
✓ File contains: All 10 NEXT_PUBLIC_ variables
✓ File has: Your real company data
✓ File is saved (Ctrl+S)
```

---

### **PHASE 1 COMPLETE!** ✅

You now have:
- ✅ Independent copy of project
- ✅ Updated package name
- ✅ Dependencies installed
- ✅ .env.local file created with company data

**Next:** Move to PHASE 2 (Update Global Files)

---

### **PHASE 2: Update Company Data (45 minutes)**

#### **What This Phase Does:**
You're updating all the places where company information appears. Every file here has text/data that people see on the website.

---

#### **Step 1: Global Metadata File (layout.tsx)**

**What it is:**
- This file is the "master template" for all pages
- It defines what appears in browser title, social media previews, search results
- Located at: `e:\work\new-company\newcompany-next\src\app\layout.tsx`

**What you need to change:**

**File Location:**
```
e:\work\new-company\newcompany-next\src\app\layout.tsx
```

**How to open it:**
1. In VS Code, click file explorer on left
2. Navigate: `src` → `app` → `layout.tsx`
3. Double-click to open

**What to find and change:**

Find this section (around line 27-65):
```tsx
export const metadata: Metadata = {
  title: {
    default: "Rolax Landscaping Canada | Professional Landscaping Services Toronto",
                ↑↑↑ CHANGE THIS
    template: "%s | Rolax Landscaping Canada",
                    ↑↑↑ CHANGE THIS
  },
```

**Replace with your company:**
```tsx
export const metadata: Metadata = {
  title: {
    default: "Green Thumb Landscaping | Professional Landscaping Services Vancouver",
                ↑↑↑ YOUR COMPANY | YOUR TAGLINE
    template: "%s | Green Thumb Landscaping",
                    ↑↑↑ YOUR COMPANY NAME
  },
```

**Key points:**
- The part before `|` is YOUR company name
- The part after `|` is what appears on EVERY page in browser tab
- Keep the structure the same
- Change only the company-specific parts

**Find and replace descriptions** (same file, around line 30):

**OLD:**
```tsx
description: "Professional landscaping, hardscaping, tree services, and snow removal in Toronto & Scarborough. Expert outdoor solutions for residential & commercial properties.",
              ↑↑↑ THIS DESCRIBES ROLAX
```

**NEW:**
```tsx
description: "Professional landscape design, hardscaping, and garden services in Vancouver & Metro Vancouver. Expert outdoor solutions for homes and businesses.",
              ↑↑↑ YOUR COMPANY'S SERVICES & AREA
```

**Find and replace keywords** (same file, around line 33):

**OLD:**
```tsx
keywords: ["landscaping Toronto", "hardscaping", "tree removal", "snow removal", "lawn care", "outdoor design"],
           ↑↑↑ ROLAX KEYWORDS
```

**NEW:**
```tsx
keywords: ["landscaping Vancouver", "garden design", "hardscaping BC", "outdoor services", "landscape contractor"],
           ↑↑↑ YOUR COMPANY KEYWORDS
```

**Find and replace schema data** (same file, around line 104-124):

**OLD (in schema.org section):**
```json
name: "Rolax Landscaping Canada",
      ↑↑↑ CHANGE THIS
image: `${siteUrl}/images/rolax landscaping new logo.jpg`,
                               ↑↑↑ CHANGE THIS (if different logo)
email: "rolaxlandscapingcanada@gmail.com",
       ↑↑↑ CHANGE THIS
telephone: "+1-647-916-6654",
           ↑↑↑ CHANGE THIS
streetAddress: "33 Saratoga Drive",
               ↑↑↑ CHANGE THIS
addressLocality: "Scarborough",
                 ↑↑↑ CHANGE THIS
addressRegion: "ON",
               ↑↑↑ CHANGE THIS
postalCode: "M1P 4H8",
            ↑↑↑ CHANGE THIS
```

**Replace with:**
```json
name: "Green Thumb Landscaping",
      ↑↑↑ YOUR COMPANY
image: `${siteUrl}/images/green-thumb-logo.jpg`,
                           ↑↑↑ YOUR LOGO FILENAME
email: "contact@greenthumb.ca",
       ↑↑↑ YOUR EMAIL
telephone: "+1-604-555-1234",
           ↑↑↑ YOUR PHONE
streetAddress: "456 Oak Street",
               ↑↑↑ YOUR ADDRESS
addressLocality: "Vancouver",
                 ↑↑↑ YOUR CITY
addressRegion: "BC",
               ↑↑↑ YOUR PROVINCE
postalCode: "V6B 1A1",
            ↑↑↑ YOUR POSTAL CODE
```

**Save file:** `Ctrl+S`

---

#### **Step 2: Header Middle Component (HeaderMiddle.tsx)**

**What it is:**
- This is the middle section of the website header (top bar)
- Shows logo and company contact info
- Located at: `e:\work\new-company\newcompany-next\src\common\header\HeaderMiddle.tsx`

**How to open it:**
1. File explorer: `src` → `common` → `header` → `HeaderMiddle.tsx`
2. Double-click to open

**File Location:**
```
e:\work\new-company\newcompany-next\src\common\header\HeaderMiddle.tsx
```

**What to find and change:**

Find line 8 (logo path):
**OLD:**
```tsx
const LOGO_PATH = "/images/rolax landscaping new logo.jpg";
                           ↑↑↑ THIS IS ROLAX LOGO
```

**NEW:**
```tsx
const LOGO_PATH = "/images/your-company-logo.jpg";
                           ↑↑↑ YOUR LOGO FILENAME
```

**Important note about logo:**
- This is just the PATH (location)
- The actual image file goes in: `public/images/`
- You'll update the image file itself in later step
- For now, just update the filename here to match what you'll put in `public/images/`

**Find around line 160:** (company phone display)
```tsx
// ICONS
.hm-icon {
```

Keep looking down, find where phone number appears as text. Update it to your phone number.

**Save file:** `Ctrl+S`

---

#### **Step 3: Footer Component (Footer.tsx)**

**What it is:**
- The bottom section of every page
- Shows company info, newsletter signup, social links
- Located at: `e:\work\new-company\newcompany-next\src\common\footer\Footer.tsx`

**File Location:**
```
e:\work\new-company\newcompany-next\src\common\footer\Footer.tsx
```

**How to open it:**
1. File explorer: `src` → `common` → `footer` → `Footer.tsx`
2. Double-click

**What to find and change:**

Find line ~30-40 (where it says "const" and has KEY values):
```tsx
// KEYS from Environment Variables
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
```

**This is GOOD - leave it as-is!** ✅
- These automatically use your .env.local values
- No changes needed here

Find line ~111 (logo image):
**OLD:**
```tsx
<Image 
  src="/images/rolax landscaping new logo.jpg"
                  ↑↑↑ CHANGE THIS PATH
```

**NEW:**
```tsx
<Image 
  src="/images/your-company-logo.jpg"
                  ↑↑↑ MATCH WHAT YOU PUT IN HeaderMiddle.tsx
```

Find around line 115-125 (contact information in footer):
Look for lines with company phone, email, address. These might reference old company data.

**Example of what you might find:**
```tsx
href="tel:+16479166654"  → Change to your phone
href="mailto:rolax@..."  → Change to your email
"33 Saratoga..."         → Change to your address
```

**Replace with your company info.**

**Find around line 200-210** (social media links):
```tsx
href="https://www.facebook.com/rolaxlandscaping"
     ↑↑↑ THIS IS ROLAX'S FACEBOOK
```

Replace with YOUR social media links:
```tsx
href="https://www.facebook.com/greenthumblandscaping"
     ↑↑↑ YOUR COMPANY'S FACEBOOK
```

**Save file:** `Ctrl+S`

---

#### **Step 4: Contact Form (ContactForm.tsx)**

**What it is:**
- The contact form on contact page and other places
- Has phone number and address hardcoded
- Located at: `e:\work\new-company\newcompany-next\src\components\contact\ContactForm.tsx`

**File Location:**
```
e:\work\new-company\newcompany-next\src\components\contact\ContactForm.tsx
```

**How to open it:**
1. File explorer: `src` → `components` → `contact` → `ContactForm.tsx`
2. Double-click

**What to find and change:**

Find around line 12-15 (EmailJS keys):
```tsx
// KEYS from Environment Variables
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
```

**GOOD - leave this!** ✅ These use your .env.local

Find around line 82-83 (phone number):
**OLD:**
```tsx
const PHONE_DISPLAY = "(647) 916-6654";
                       ↑↑↑ ROLAX PHONE FORMAT
const PHONE_TEL = "+16479166654";
                  ↑↑↑ ROLAX PHONE WITHOUT FORMATTING
```

**NEW:**
```tsx
const PHONE_DISPLAY = "(604) 555-1234";
                       ↑↑↑ YOUR PHONE (formatted with dots/dashes)
const PHONE_TEL = "+16045551234";
                  ↑↑↑ YOUR PHONE (just + and numbers)
```

**Important:**
- PHONE_DISPLAY: For showing to users (can have dashes/dots)
- PHONE_TEL: For dial links (only + and numbers, no dashes)

Find around line 86 (company address):
**OLD:**
```tsx
const mapAddress = "33 Saratoga Drive, Scarborough, ON M1P 4H8";
                    ↑↑↑ ROLAX ADDRESS
```

**NEW:**
```tsx
const mapAddress = "456 Oak Street, Vancouver, BC V6B 1A1";
                    ↑↑↑ YOUR COMPANY ADDRESS
```

**Save file:** `Ctrl+S`

---

#### **Step 5: Home About Component (HomeAbout.tsx)**

**What it is:**
- Shows company story and information on homepage
- Located at: `e:\work\new-company\newcompany-next\src\components\home-about\HomeAbout.tsx`

**File Location:**
```
e:\work\new-company\newcompany-next\src\components\home-about\HomeAbout.tsx
```

**How to open it:**
1. File explorer: `src` → `components` → `home-about` → `HomeAbout.tsx`
2. Double-click

**What to find and change:**

Find around line 15 (image):
**OLD:**
```tsx
src="/images/about/about.jpg"
           ↑↑↑ ROLAX ABOUT IMAGE
```

**NEW:**
```tsx
src="/images/about/your-about-image.jpg"
           ↑↑↑ YOUR COMPANY IMAGE NAME
```

Find around line 23 (achievement text):
**OLD:**
```tsx
<h3>We Are Since 2010! Over 200 Awards</h3>
      ↑↑↑ ROLAX'S FOUNDING YEAR AND AWARDS
```

**NEW:**
```tsx
<h3>Green Thumb: Since 2015! Over 150 Projects</h3>
      ↑↑↑ YOUR COMPANY'S INFO
```

Find around line 30-35 (company tagline):
**OLD:**
```tsx
<span>We are Committed to Landscape Service</span>
      ↑↑↑ ROLAX's TAGLINE
```

**NEW:**
```tsx
<span>Your Company Tagline Here</span>
      ↑↑↑ YOUR COMPANY MISSION/TAGLINE
```

Find around line 34-35 (company description - H3 heading):
**OLD:**
```tsx
<h3 className="mb-30">
  Rolax Landscaping is a trusted provider of high-quality landscaping, hardscaping, tree service, and snow plowing services in Toronto
</h3>
↑↑↑ ROLAX DESCRIPTION
```

**NEW:**
```tsx
<h3 className="mb-30">
  Green Thumb Landscaping is a trusted provider of expert garden design, hardscaping, and outdoor services in Vancouver
</h3>
↑↑↑ YOUR COMPANY DESCRIPTION
```

Find around line 38-42 (long company description - paragraph):
**OLD:**
```tsx
<p>
  Rolax Landscaping is a professional landscaping company serving Toronto and the Greater Toronto Area (GTA), providing reliable services for both residential and commercial properties. We specialize in landscaping, hardscaping, tree services, and snow plowing, using expert craftsmanship...
  [long text...]
</p>
↑↑↑ LONG ROLAX DESCRIPTION
```

**NEW:**
```tsx
<p>
  Green Thumb Landscaping is a professional garden and landscaping company serving Vancouver and Metro Vancouver areas, providing expert services for both residential and commercial properties. We specialize in custom garden design, hardscaping, and outdoor living spaces...
  [Write your company description here - 3-4 sentences]
</p>
↑↑↑ YOUR COMPANY DESCRIPTION (important for SEO!)
```

**Save file:** `Ctrl+S`

---

### **PHASE 2 COMPLETE!** ✅

You now have:
- ✅ Global metadata updated (layout.tsx)
- ✅ Header updated (HeaderMiddle.tsx)
- ✅ Footer updated (Footer.tsx)
- ✅ Contact info updated (ContactForm.tsx)
- ✅ About section updated (HomeAbout.tsx)

**All company text and info changed!**

**Next:** Move to PHASE 3 (Update Services & Content)

---

### **PHASE 3: Update Services & Content (1-2 hours)**

#### **What This Phase Does:**
You're replacing the actual services, blog posts, and testimonials with your company's real data. This is content people see on your website.

---

#### **Step 1: Update Services List**

**What it is:**
- The services that appear on the homepage and services page
- Shows what your company offers (e.g., Landscaping, Hardscaping, Tree Service, etc.)
- Located at: `e:\work\new-company\newcompany-next\src\components\sevices\Service.tsx`

**Note: File name has typo** - It's spelled `sevices` not `services` (keep it this way!)

**File Location:**
```
e:\work\new-company\newcompany-next\src\components\sevices\Service.tsx
```

**How to open it:**
1. File explorer: `src` → `components` → `sevices` → `Service.tsx`
2. Double-click to open

**What you'll see:**

Around line 3-25, you'll see an array that looks like:
```tsx
const ServiceData = [
  {
    id: 1,
    icon: "fas fa-leaf",
    title: "Landscaping",
    description: "Transform your outdoor space with professional landscape design and installation..."
  },
  {
    id: 2,
    icon: "fas fa-hammer",
    title: "Hardscaping",
    description: "Create stunning patios, walkways, and outdoor structures..."
  },
  // MORE SERVICES HERE...
];
```

**This is what you need to replace:**

**For each service, you need 4 things:**
1. **id** - Just a number (1, 2, 3...)
2. **icon** - A Font Awesome icon name (see list below)
3. **title** - Name of the service (e.g., "Landscaping")
4. **description** - What the service does (2-3 sentences)

**Font Awesome icons you can use** (common ones for landscaping):
- `fas fa-leaf` - Landscaping, plants
- `fas fa-hammer` - Building, hardscaping
- `fas fa-tree` - Tree service
- `fas fa-snowflake` - Snow removal
- `fas fa-home` - Sod/lawn installation
- `fas fa-water` - Irrigation
- `fas fa-paint-brush` - Design
- `fas fa-check-circle` - Maintenance
- `fas fa-scissors` - Trimming

**Example - Replace with your services:**

**OLD:**
```tsx
const ServiceData = [
  {
    id: 1,
    icon: "fas fa-leaf",
    title: "Landscaping",
    description: "Comprehensive landscaping services including design, installation, and maintenance..."
  },
  {
    id: 2,
    icon: "fas fa-hammer",
    title: "Hardscaping",
    description: "Expert hardscaping solutions for patios, walkways, retaining walls..."
  },
  {
    id: 3,
    icon: "fas fa-tree",
    title: "Tree Service",
    description: "Professional tree trimming, removal, and stump grinding services..."
  },
  // ... MORE SERVICES
];
```

**NEW (Example - Green Thumb Landscaping):**
```tsx
const ServiceData = [
  {
    id: 1,
    icon: "fas fa-leaf",
    title: "Garden Design",
    description: "Custom garden design tailored to your vision. We create beautiful outdoor spaces with plants, flowers, and unique features that reflect your style."
  },
  {
    id: 2,
    icon: "fas fa-hammer",
    title: "Hardscaping",
    description: "Expert construction of patios, pathways, pergolas, and stone work. We build outdoor living spaces that enhance your property's beauty and functionality."
  },
  {
    id: 3,
    icon: "fas fa-water",
    title: "Irrigation Systems",
    description: "Smart irrigation setup for year-round watering. We install efficient systems that keep your garden healthy while saving water and money."
  },
];
```

**Important notes:**
- Keep the exact structure (id, icon, title, description)
- Add or remove services as needed
- Keep commas between items
- Each title should be 1-2 words
- Each description should be 1-2 sentences

**Save file:** `Ctrl+S`

---

#### **Step 2: Update Service Detail Pages (Optional but Recommended)**

**What it is:**
- Each service has its own detailed page
- Located at: `e:\work\new-company\newcompany-next\src\app\service-details\*/layout.tsx`
- There are 7 folders: `landscaping/`, `hardscaping/`, `tree-service/`, `snow-removal/`, `sod-installation/`, `mulch-installation/`, `artificial-turf/`

**File Locations:**
```
e:\work\new-company\newcompany-next\src\app\service-details\
├── landscaping\layout.tsx
├── hardscaping\layout.tsx
├── tree-service\layout.tsx
├── snow-removal\layout.tsx
├── sod-installation\layout.tsx
├── mulch-installation\layout.tsx
└── artificial-turf\layout.tsx
```

**What you need to do:**

**Option A: Update Existing Folders** (Easiest - 5 minutes per service)
1. Open each layout.tsx file
2. Find lines with metadata (title, description, keywords)
3. Replace with your company's service info

**Example for landscaping/layout.tsx:**

**OLD:**
```tsx
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Professional Landscaping Services Toronto | Rolax",
    description: "Expert landscaping services in Toronto including design, installation, and maintenance...",
    keywords: ["landscaping Toronto", "landscape design", "garden installation"],
  };
}
```

**NEW:**
```tsx
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Garden Design Services Vancouver | Green Thumb Landscaping",
    description: "Professional garden design and installation in Vancouver. Custom designs for residential and commercial properties.",
    keywords: ["garden design Vancouver", "landscape design BC", "garden installation"],
  };
}
```

**Option B: Rename Folders** (Advanced - Only if your services are completely different)

**Example:**
- Instead of `landscaping/` → rename to `gardening/`
- Instead of `tree-service/` → rename to `irrigation/`

**This requires:**
1. Renaming the folders
2. Finding where these routes are referenced
3. Updating imports and links

**Recommendation:** Use Option A (Update Existing) unless your services are very different.

**Save all files:** `Ctrl+S`

---

#### **Step 3: Update Blog Posts**

**What it is:**
- Blog articles that appear on the blog page
- Located at: `e:\work\new-company\newcompany-next\src\components\page-blog\Blog.tsx`

**File Location:**
```
e:\work\new-company\newcompany-next\src\components\page-blog\Blog.tsx
```

**How to open it:**
1. File explorer: `src` → `components` → `page-blog` → `Blog.tsx`
2. Double-click

**What you'll see:**

Around line 3-40, you'll see an array like:
```tsx
const BlogData = [
  {
    id: 1,
    image: "/images/blog/1.jpg",
    title: "How to Keep Your Lawn Green in Summer",
    date: "June 15, 2024",
    author: "Rolax Team",
    category: "Lawn Care",
    excerpt: "Summer heat can damage your lawn. Here are expert tips to keep it green..."
  },
  {
    id: 2,
    image: "/images/blog/2.jpg",
    title: "Benefits of Professional Hardscaping",
    date: "June 10, 2024",
    author: "Rolax Team",
    category: "Hardscaping",
    excerpt: "Hardscaping adds structure and beauty to outdoor spaces..."
  },
  // MORE BLOG POSTS
];
```

**What to replace:**

For each blog post, you need:
1. **id** - Just a number (1, 2, 3...)
2. **image** - Path to blog image (e.g., `/images/blog/1.jpg`)
3. **title** - Blog post title (catchy, 8-12 words)
4. **date** - Publication date (format: "Month Day, Year")
5. **author** - Who wrote it (your company name or person name)
6. **category** - Topic category (e.g., "Gardening Tips")
7. **excerpt** - Short summary (3-5 sentences)

**Example - Replace with your blog posts:**

**OLD:**
```tsx
const BlogData = [
  {
    id: 1,
    image: "/images/blog/1.jpg",
    title: "How to Keep Your Lawn Green in Summer",
    date: "June 15, 2024",
    author: "Rolax Team",
    category: "Lawn Care",
    excerpt: "Summer heat can damage your lawn. Here are expert tips..."
  },
];
```

**NEW (Example):**
```tsx
const BlogData = [
  {
    id: 1,
    image: "/images/blog/1.jpg",
    title: "Top 5 Plants for Vancouver Gardens This Spring",
    date: "April 1, 2025",
    author: "Green Thumb Landscaping",
    category: "Garden Tips",
    excerpt: "Looking to refresh your garden this spring? We recommend five hardy, beautiful plants that thrive in Vancouver's climate. These selections require minimal maintenance and will bloom beautifully throughout the season."
  },
  {
    id: 2,
    image: "/images/blog/2.jpg",
    title: "Creating the Perfect Patio with Hardscaping",
    date: "March 20, 2025",
    author: "Green Thumb Landscaping",
    category: "Hardscaping",
    excerpt: "Your patio is an extension of your home. Learn how professional hardscaping can create an outdoor living space that's beautiful, functional, and built to last."
  },
];
```

**Important notes:**
- Keep the same structure
- Image paths should match actual files (you'll upload images in Phase 4)
- Dates can be any date in the past
- Author is typically your company name
- Categories help organize blog posts

**Save file:** `Ctrl+S`

---

#### **Step 4: Update Testimonials**

**What it is:**
- Customer reviews that appear on homepage
- Shows social proof (happy customers)
- Located at: `e:\work\new-company\newcompany-next\src\components\testimonial\Testimonial.tsx`

**File Location:**
```
e:\work\new-company\newcompany-next\src\components\testimonial\Testimonial.tsx
```

**How to open it:**
1. File explorer: `src` → `components` → `testimonial` → `Testimonial.tsx`
2. Double-click

**What you'll see:**

Around line 3-30, you'll see:
```tsx
const TestimonialData = [
  {
    id: 1,
    image: "/images/project/1.jpg",
    name: "John Smith",
    title: "Homeowner",
    review: "Rolax Landscaping transformed our backyard. Professional team, great results!"
  },
  {
    id: 2,
    image: "/images/project/2.jpg",
    name: "Sarah Johnson",
    title: "Property Manager",
    review: "We've used them for 3 years. Reliable, punctual, and excellent work."
  },
  // MORE TESTIMONIALS
];
```

**What to replace:**

For each testimonial, you need:
1. **id** - Number (1, 2, 3...)
2. **image** - Path to customer photo (e.g., `/images/project/1.jpg`)
3. **name** - Customer name
4. **title** - What they do (Homeowner, Business Owner, etc.)
5. **review** - What they say (1-2 sentences)

**Example:**

**OLD:**
```tsx
const TestimonialData = [
  {
    id: 1,
    image: "/images/project/1.jpg",
    name: "John Smith",
    title: "Homeowner",
    review: "Rolax Landscaping transformed our backyard. Professional team, great results!"
  },
];
```

**NEW (Example):**
```tsx
const TestimonialData = [
  {
    id: 1,
    image: "/images/project/1.jpg",
    name: "Maria Garcia",
    title: "Homeowner, Vancouver",
    review: "Green Thumb completely transformed our garden. The design is beautiful and the quality of work is outstanding. Highly recommend!"
  },
  {
    id: 2,
    image: "/images/project/2.jpg",
    name: "David Lee",
    title: "Business Owner, Burnaby",
    review: "We hired them for our office landscape. Professional, reliable, and they stayed within budget. Best service in town!"
  },
];
```

**Important notes:**
- Keep structure exactly the same
- Names should be real or realistic
- Title can be "Homeowner", "Business Owner", "Property Manager", etc.
- Reviews should be authentic and specific
- Image paths will be updated in Phase 4

**Save file:** `Ctrl+S`

---

#### **Step 5: Update Fun Facts (Optional - Homepage)**

**What it is:**
- Quick statistics that appear on homepage (e.g., "500+ Projects Completed")
- Located at: `e:\work\new-company\newcompany-next\src\components\fun-fact\FunFact.tsx`

**File Location:**
```
e:\work\new-company\newcompany-next\src\components\fun-fact\FunFact.tsx
```

**How to open it:**
1. File explorer: `src` → `components` → `fun-fact` → `FunFact.tsx`
2. Double-click

**What you'll see:**

Around line 3-20:
```tsx
const FunFactData = [
  {
    id: 1,
    number: "500+",
    text: "Happy Customers"
  },
  {
    id: 2,
    number: "200+",
    text: "Awards Won"
  },
  {
    id: 3,
    number: "15+",
    text: "Years Experience"
  },
];
```

**What to replace:**

For each fact:
1. **id** - Number
2. **number** - The statistic (e.g., "500+", "200+", "15+")
3. **text** - Description (e.g., "Happy Customers")

**Example:**

**OLD:**
```tsx
const FunFactData = [
  {
    id: 1,
    number: "500+",
    text: "Happy Customers"
  },
  {
    id: 2,
    number: "200+",
    text: "Awards Won"
  },
];
```

**NEW (Example):**
```tsx
const FunFactData = [
  {
    id: 1,
    number: "350+",
    text: "Properties Transformed"
  },
  {
    id: 2,
    number: "10+",
    text: "Years in Business"
  },
  {
    id: 3,
    number: "98%",
    text: "Customer Satisfaction"
  },
];
```

**Save file:** `Ctrl+S`

---

### **PHASE 3 COMPLETE!** ✅

You now have:
- ✅ Services updated (Service.tsx)
- ✅ Service detail pages updated (7 layout.tsx files)
- ✅ Blog posts updated (Blog.tsx)
- ✅ Testimonials updated (Testimonial.tsx)
- ✅ Fun facts updated (FunFact.tsx)

**All your real content is now in place!**

**Next:** Move to PHASE 4 (Update Images)

---

### **PHASE 4: Update Images (30 minutes)**

#### **What This Phase Does:**
You're replacing all the Rolax images with your company's images. This makes the website look like YOUR company instead of Rolax.

---

#### **Important image technical info:**

**Supported formats:**
- JPG/JPEG - Photos (best for photos)
- PNG - For images with transparency (logos, icons)
- WebP - Modern format (smaller file size)
- AVIF - Next-gen format (smallest)

**Recommended sizes (pixels):**
- Logo: 200-400 wide, height proportional
- Hero image: 1920x600 (or wide like banner)
- Service images: 500x400 or 600x400
- Blog images: 800x600 or 1000x700
- About image: 600x500

---

#### **Step 1: Prepare Your Images**

Before you replace files, you need your images ready on your computer.

**Image checklist:**
- [ ] Company logo (JPG or PNG)
- [ ] Hero/banner image (large, 1920+ wide)
- [ ] About page image (portrait or square)
- [ ] 7-8 service images
- [ ] 3-5 blog images
- [ ] 3-5 project/testimonial images
- [ ] Favicon (small icon for browser tab, 32x32 or 64x64)

**Where to get images:**
- Take your own photos (best!)
- Use stock photos: Unsplash, Pexels, Pixabay (free)
- Professional photographer (best quality)
- AI tools: Midjourney, DALL-E, Stable Diffusion

---

#### **Step 2: Replace Images in Windows File Explorer**

**Location:**
```
e:\work\new-company\newcompany-next\public\images\
```

**Step-by-step:**

1. **Open File Explorer**
   - Press Windows key + E
   - Navigate to: `e:\work\new-company\newcompany-next\public\images\`

2. **File structure you'll see:**
```
images/
├── rolax landscaping new logo.jpg    ← Logo
├── about/
│   └── about.jpg                      ← About page
├── service/
│   ├── landscape.png                  ← Service images (7-8 files)
│   ├── hardscape.png
│   ├── tree-service.png
│   └── ...
├── blog/
│   ├── 1.jpg                          ← Blog images (3-5 files)
│   ├── 2.jpg
│   └── ...
├── hero/
│   └── hero.jpg                       ← Hero/banner image
├── project/
│   ├── 1.jpg                          ← Project/testimonial images
│   ├── 2.jpg
│   └── ...
└── breadcrumb/
    └── breadcrumb.jpg                 ← (Keep as-is, usually generic)
```

---

#### **Step 3: Replace Logo (Most Important)**

**Why:** Logo appears on every page at the top and bottom

**What to do:**
1. Find your company logo file on your computer
2. Copy it (Ctrl+C)
3. Navigate in File Explorer to: `e:\work\new-company\newcompany-next\public\images\`
4. Rename or delete the old file: `rolax landscaping new logo.jpg`
5. Paste your logo (Ctrl+V)
6. **Rename your logo to:** `company-logo.jpg` (all lowercase, hyphenated)

**Important:**
- If you named it in Phase 2, use THE SAME NAME
- Make it JPG or PNG (not BMP or other format)
- Make sure it's a good size (200-400 pixels wide)

**Example names:**
- `green-thumb-logo.jpg`
- `acme-landscaping-logo.png`
- `company-logo.jpg`

---

#### **Step 4: Replace Hero Image**

**What it is:**
- Big banner image at top of homepage
- First thing people see
- Location: `e:\work\new-company\newcompany-next\public\images\hero\`

**What to do:**
1. Get a landscape/wide image (landscape design, beautiful outdoor scene, etc.)
2. Navigate to: `public/images/hero/`
3. Delete: `hero.jpg`
4. Add your image and name it: `hero.jpg`

**Tips:**
- Make it WIDE (1920px wide or wider)
- Make it HIGH QUALITY (don't use low-res images)
- Make sure it relates to landscaping/your services

---

#### **Step 5: Replace Service Images**

**What they are:**
- Images for each service (Landscaping, Hardscaping, etc.)
- Show on services page and homepage
- Location: `e:\work\new-company\newcompany-next\public\images\service\`

**What to do:**
1. Get 7-8 quality images (one per service)
2. Navigate to: `public/images/service/`
3. Delete old images: landscape.png, hardscape.png, etc.
4. Add your new images

**Naming:**
You can keep the old names or rename them:
- `landscape.jpg` - Landscaping/garden
- `hardscape.jpg` - Hardscaping/patio
- `tree-service.jpg` - Tree work
- `snow-removal.jpg` - Snow removal (if applicable)
- `sod-installation.jpg` - Sod/lawn
- `mulch-installation.jpg` - Mulch
- `artificial-turf.jpg` - Artificial turf (if applicable)

**Important:**
- Match filenames with your Service.tsx entries (from Phase 3)
- All should be same format (all JPG or all PNG)
- Good quality photos (show actual projects)

---

#### **Step 6: Replace Blog Images**

**What they are:**
- Images for blog posts
- Show on blog page
- Location: `e:\work\new-company\newcompany-next\public\images\blog\`

**What to do:**
1. Get 3-5 blog-related images
2. Navigate to: `public/images/blog/`
3. Delete old files: 1.jpg, 2.jpg, etc.
4. Add your new images

**Naming:**
Keep simple numeric names:
- `1.jpg` - First blog post image
- `2.jpg` - Second blog post image
- `3.jpg` - Third blog post image
- etc.

**IMPORTANT - Must match Phase 3:**
- In Blog.tsx, you put image paths like `/images/blog/1.jpg`
- So image 1 in File Explorer MUST be `1.jpg`
- Image 2 MUST be `2.jpg`
- If you have 5 blog posts, need 5 images (1.jpg through 5.jpg)

---

#### **Step 7: Replace About Image**

**What it is:**
- Image on About page
- Shows your company/team
- Location: `e:\work\new-company\newcompany-next\public\images\about\`

**What to do:**
1. Get an about page image (team photo, office, work in progress, etc.)
2. Navigate to: `public/images/about/`
3. Delete: `about.jpg`
4. Add your image and name: `about.jpg`

---

#### **Step 8: Replace Project/Testimonial Images**

**What they are:**
- Photos for testimonials/reviews
- Should be project photos (before/after ideal)
- Location: `e:\work\new-company\newcompany-next\public\images\project\`

**What to do:**
1. Get project photos (3-5 of your best work)
2. Navigate to: `public/images/project/`
3. Delete old files: 1.jpg, 2.jpg, etc.
4. Add your project images

**Naming:**
Keep numeric:
- `1.jpg` - First project photo
- `2.jpg` - Second project photo
- `3.jpg` - Third project photo
- etc.

**IMPORTANT - Must match Phase 3:**
- In Testimonial.tsx, you set image paths like `/images/project/1.jpg`
- So first testimonial's image MUST be `1.jpg`
- If you have 4 testimonials, need 4 project images

---

#### **Step 9: Update Favicon (Browser Tab Icon)**

**What it is:**
- Tiny icon that appears in browser tab
- Shows next to website name at top of browser

**Current location:**
```
e:\work\new-company\newcompany-next\public\favicon.ico
```

**What to do:**
1. Create/find a 32x32 or 64x64 pixel icon (can be your logo)
2. Convert to .ico format (use online converter if needed)
3. Replace: `public/favicon.ico`

**How to create:**
- Use your logo
- Resize to 32x32 or 64x64 pixels
- Save as ICO format (use website: favicongenerator.com)

**Optional:**
- You can skip this - the default favicon will work
- Only do if you want custom browser tab icon

---

#### **Step 10: Verify Everything**

After replacing images:

**Checklist:**
- [ ] Logo file replaced and renamed correctly
- [ ] Hero image replaced
- [ ] 7-8 Service images replaced
- [ ] 3-5 Blog images named 1.jpg, 2.jpg, etc.
- [ ] About image replaced
- [ ] 3-5 Project images named 1.jpg, 2.jpg, etc.
- [ ] All images are JPG/PNG format
- [ ] Filenames match what you put in code (Phase 2-3)

---

#### **Step 11: Final Check**

Go back and make sure filenames match what you coded:

**Example:**
- If in HeaderMiddle.tsx you put: `/images/green-thumb-logo.jpg`
- Then logo MUST be named: `green-thumb-logo.jpg`
- If names don't match, images won't show!

---

### **PHASE 4 COMPLETE!** ✅

You now have:
- ✅ Logo replaced
- ✅ Hero image updated
- ✅ Service images updated
- ✅ Blog images updated
- ✅ About image updated
- ✅ Project images updated
- ✅ Favicon updated (optional)

**Website now looks like YOUR company!**

**Next:** Move to PHASE 5 (Test Locally)

---

### **PHASE 5: Test Locally (15 minutes)**

#### **What This Phase Does:**
You're running the website on your computer to make sure everything works before sending it live.

---

#### **Step 1: Start the Development Server**

**What it is:**
- Development server = running the website on your computer
- Lets you see what it looks like before uploading to internet
- Can see errors and fix them

**How to start:**

**Method A: Using VS Code Terminal (Easiest)**

1. In VS Code, press `` Ctrl+` `` (backtick) to open terminal
2. Make sure you're in the correct directory - terminal should show:
```
e:\work\new-company\newcompany-next>
```
3. Type this command:
```bash
npm run dev
```
4. Press Enter and wait for server to start

**What you'll see:**
```
 ✓ Ready in 2.3s
 ▲ Next.js 16.1.6 started
 - Local: http://localhost:3000
 - Environments: .env.local
 
● compiled client + 3 modules
```

**Good signs:**
- ✅ "Ready" message appears
- ✅ Shows `http://localhost:3000`
- ✅ No red error messages

**Method B: Using Windows PowerShell Terminal**

1. Open PowerShell
2. Navigate to project:
```powershell
cd e:\work\new-company\newcompany-next
```
3. Run:
```powershell
npm run dev
```

---

#### **Step 2: View Website in Browser**

**Now visit your website:**

1. Open any web browser (Chrome, Edge, Firefox, Safari)
2. In address bar, type:
```
http://localhost:3000
```
3. Press Enter

**What you should see:**
- Your homepage appears
- Logo displays (top of page)
- Company name shows
- All text is your company's text (not Rolax)
- Website loads in 2-5 seconds

---

#### **Step 3: Test Every Section**

**Go through each page and verify:**

**Homepage checks:**
- [ ] Logo displays (top left corner)
- [ ] Your company name appears
- [ ] Hero image shows (big banner)
- [ ] Services section shows YOUR services (not Rolax's)
- [ ] About section shows YOUR company info
- [ ] Testimonials section shows YOUR testimonials with correct person names
- [ ] Blog section shows YOUR blog titles
- [ ] Footer shows YOUR company info, phone, email
- [ ] Newsletter signup form visible

**About page checks:**
- [ ] Title is your company name
- [ ] About image shows
- [ ] Company description is yours
- [ ] No Rolax references anywhere

**Services page checks:**
- [ ] Shows YOUR services with YOUR icons
- [ ] Descriptions match what you entered in Phase 3
- [ ] Each service is clickable (try clicking one)

**Contact page checks:**
- [ ] Contact form visible
- [ ] YOUR phone number displays
- [ ] YOUR address shows on map
- [ ] Newsletter form works

**Blog page checks:**
- [ ] YOUR blog titles show
- [ ] Blog images display
- [ ] Blog categories are correct

---

#### **Step 4: Test Forms Part 1 - Try Submitting**

**Contact form:**
1. Go to Contact page
2. Fill in form:
   - Name: Test Name
   - Email: test@example.com
   - Phone: 555-1234
   - Message: "This is a test"
3. Click Submit button
4. See if it works (will show success or error message)

**Newsletter form:**
1. Go to homepage or footer
2. Enter email: test@example.com
3. Click Subscribe button

**Important:**
- These won't actually send emails to you yet if you haven't set up EmailJS completely
- That's OK for now - you're just testing the form loads

---

#### **Step 5: Test Responsiveness (Mobile Testing)**

**What it is:**
- Making sure website looks good on phones and tablets

**How to test on computer:**

**In Chrome or Edge:**
1. Right-click anywhere on page
2. Choose "Inspect"
3. Click mobile phone icon at top left of developer tools
4. Select different phone sizes:
   - iPhone 12 (390px wide)
   - iPhone XR (414px)
   - iPad (768px)
5. Scroll through page - check if it looks good on smaller screens

**What to look for:**
- Text is readable (not too small)
- Buttons are clickable (not too small)
- Images scale properly (not stretched or broken)
- Navigation menu collapses on mobile
- Content is centered and easy to read

---

#### **Step 6: Check for Image Errors**

**Images not showing?**

If images don't appear:
1. Right-click on empty space where image should be
2. Choose "Inspect" or "Inspect Element"
3. Look in browser console (bottom)
4. See red ERROR message like:
```
GET http://localhost:3000/images/logo.jpg 404 (Not Found)
```

**What this means:**
- File path doesn't match
- Example: You coded `/images/green-thumb-logo.jpg` but saved file as `green-thumb-logo.png`
- Fix: Make sure filenames match EXACTLY (same name, same extension)

**Common image issues:**
- [ ] Logo path doesn't match (check HeaderMiddle.tsx)
- [ ] Image file has different name than code
- [ ] Image in wrong folder
- [ ] JPG vs PNG mismatch

---

#### **Step 7: Check Links**

**Click through every link:**
- [ ] All menu items work
- [ ] Service links work (click on a service)
- [ ] Blog links work
- [ ] Social media links work (open in new tab)
- [ ] Footer links work
- [ ] Back buttons work

**What to look for:**
- Pages load without errors
- No "404 Page Not Found" errors
- Links go to correct pages

---

#### **Step 8: Fix Any Errors**

**If something is wrong:**

**Issue: Wrong company name appears**
- Fix: Edit layout.tsx (Phase 2)
- Restart dev server (in terminal, press Ctrl+C, then npm run dev again)

**Issue: Image doesn't show**
- Fix: Check filename matches code (case-sensitive!)
- Verify image is in correct folder
- Restart dev server

**Issue: Text is cut off or misaligned**
- This is usually just CSS styling
- Should still be usable
- Fix later if needed

**Issue: Form doesn't work**
- This is normal if EmailJS isn't fully set up
- Forms work fine for now - will send emails later

**Restart dev server after changes:**
1. In terminal, press `Ctrl+C` to stop server
2. Type `npm run dev` again to restart

---

#### **Step 9: Use Checklist**

**Print & check this:**

```
PHASE 5 VERIFICATION CHECKLIST

HOMEPAGE:
□ Page loads in browser
□ Logo displays (no broken image)
□ Your company name shows
□ Hero image displays
□ Services section shows YOUR services
□ About section shows YOUR company info
□ Testimonials show YOUR testimonials
□ Newsletter form visible
□ Footer has YOUR company info

PAGES:
□ About page loads and displays correctly
□ Services page shows YOUR services
□ Contact page shows YOUR phone/address
□ Blog page shows YOUR blog posts
□ Mobile view looks good (responsive)

FUNCTIONALITY:
□ All links work (no 404 errors)
□ Forms appear (may not submit fully yet)
□ Images display (no broken image icons)
□ No red errors in browser console
□ Mobile menu works on small screen

CONTENT:
□ No "Rolax" text anywhere on site
□ All text is YOUR company's info
□ All images are YOUR images (not Rolax)
□ Phone numbers are correct
□ Addresses are correct
□ Email addresses are correct
```

---

#### **Step 10: Keep Problems List**

During testing, note any issues:

**Example problem list:**
1. Logo size is too big - fix later
2. About page text color is hard to read - adjust CSS
3. Contact form button color looks wrong - update CSS
4. Blog images are pixelated - use better quality images

**These aren't urgent** - website still works. Fix in next version if needed.

---

### **PHASE 5 COMPLETE!** ✅

You now have:
- ✅ Website running locally on your computer
- ✅ Verified all content is yours (not Rolax)
- ✅ Tested all pages work
- ✅ Checked images display
- ✅ Tested forms load
- ✅ Verified mobile responsive

**Website is ready for deployment!**

**Next:** Move to PHASE 6 (Deploy to Internet)

---

### **PHASE 6: Deploy to Internet (30-45 minutes)**

#### **What This Phase Does:**
You're moving your website from your computer to the internet so anyone in the world can visit it.

---

#### **What is Deployment?**

**Deployment = uploading your website to the web**

Your options:
1. **Vercel** (easiest, free tier available)
2. **Netlify** (also very easy)
3. **Traditional hosting** (more control, but harder)

**RECOMMENDED:** Use **Vercel**
- Created by the makers of Next.js
- Free tier works great
- Much faster than others
- Easy to use (literally 5 minutes)
- Can use custom domain

---

#### **Step 1: Choose Your Deployment Platform**

#### **Option A: Deploy to Vercel (Recommended)**

**Why Vercel?**
- Free for most websites
- Super fast
- Built for Next.js
- Easy to update your site
- Free SSL certificate (security)
- Custom domain support
- Free tier includes: 100GB bandwidth, unlimited deployments

**Cost:**
- Free tier: $0/month (perfect for starting)
- If you need more: $20/month (Pro plan)

---

#### **Option A Steps: Vercel Deployment**

**Step A1: Create Vercel Account**

1. Go to: https://vercel.com
2. Click "Sign Up" (top right)
3. Click "Continue with GitHub"
4. Create GitHub account if you don't have one (free):
   - Go: https://github.com/signup
   - Fill in email, password, username
   - Verify email
5. GitHub will connect to Vercel automatically

**What you'll see:**
- Vercel dashboard
- "Import Project" button

---

#### **Step A2: Connect to GitHub**

**What this means:**
- GitHub = Online code storage (like cloud backup for your code)
- Vercel watches your GitHub
- When you update code on GitHub, Vercel auto-updates website

**How to connect:**

1. On your computer, open PowerShell
2. Navigate to your project:
```powershell
cd e:\work\new-company\newcompany-next
```

3. Initialize Git:
```powershell
git init
```

4. Add files to git:
```powershell
git add .
```

5. Create first version (commit):
```powershell
git commit -m "Initial commit - company website setup"
```

6. Create GitHub repo at: https://github.com/new
   - Give it a name: "newcompany-next"
   - Click "Create repository"

7. Copy the commands GitHub shows:
```powershell
git remote add origin https://github.com/YOUR-USERNAME/newcompany-next.git
git branch -M main
git push -u origin main
```

8. Paste into PowerShell and run each line

**What happens:**
- Your code uploads to GitHub
- Vercel can now see your code

---

#### **Step A3: Deploy from Vercel Dashboard**

1. Go to: https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Select your GitHub repository (should show `newcompany-next`)
4. Click "Import"
5. Vercel shows settings - click "Deploy"
6. Wait 2-3 minutes for deployment

**You'll see a link like:**
```
https://newcompany-next.vercel.app
```

**This is your live website URL!** 🎉

---

#### **Step A4: Set Up Custom Domain (Optional)**

If you have your own domain (yourcompany.com):

1. In Vercel dashboard
2. Go to your project settings
3. Click "Domains"
4. Add your custom domain
5. Update domain's DNS settings (follow Vercel's instructions)
6. Wait 24-48 hours for domain to point to Vercel

---

#### **Option B: Deploy to Netlify**

**Why Netlify?**
- Free tier very generous
- User-friendly interface
- Good documentation
- Good performance

**Cost:**
- Free tier: $0/month (generous limits)
- Pro: $19/month

**Steps:**

1. Go to: https://app.netlify.com
2. Click "Sign up"
3. Choose "GitHub" method
4. Same GitHub setup as Vercel (steps above)
5. Click "New site from Git"
6. Select your GitHub repo
7. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
8. Click "Deploy site"
9. Wait 2-5 minutes

**You'll get a URL like:**
```
https://newcompany-123456.netlify.app
```

---

#### **Option C: Traditional Hosting (Advanced)**

If you already have hosting (Bluehost, GoDaddy, Cpanel, etc.):

**These hosting services usually support:**
1. Node.js applications
2. SSH access
3. Package managers (npm)

**How to deploy:**

1. Upload project files via SFTP/FTP
2. SSH into server
3. Run: `npm install`
4. Run: `npm run build`
5. Configure process manager (PM2 or similar)
6. Point domain to server
7. Set up SSL certificate

**This is more complex** - I recommend Vercel or Netlify instead.

---

#### **Step 2: Set Up Environment Variables on Production**

**What this means:**
- Production = your live website on internet
- Environment variables = your secret keys
- Need to add them to your hosting platform

**For Vercel:**

1. Go to your Vercel project dashboard
2. Click "Settings"
3. Click "Environment Variables"
4. Add each variable from your .env.local:
   - Name: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - Value: (paste your Service ID)
   - Click "Add"
5. Repeat for all variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_BUSINESS_NAME`
   - `NEXT_PUBLIC_BUSINESS_EMAIL`
   - `NEXT_PUBLIC_BUSINESS_PHONE`
   - `NEXT_PUBLIC_BUSINESS_ADDRESS`
   - `NEXT_PUBLIC_SITE_URL`

6. After adding all, click "Redeploy" on deployments page

**For Netlify:**

1. In Netlify dashboard
2. Go to "Site settings"
3. Click "Build & deploy" → "Environment"
4. Click "Edit variables"
5. Add same variables as above
6. Click "Save"

---

#### **Step 3: Test Your Live Website**

**Visit your new website:**
1. Go to your deployment URL
2. Check it works exactly like local version
3. Go through the checklist from Phase 5:
   - [ ] Logo displays
   - [ ] Company name correct
   - [ ] All images show
   - [ ] Forms appear
   - [ ] Links work

---

#### **Step 4: Set Up Email System (Optional but Important)**

If you want forms to actually send emails:

1. Make sure EmailJS credentials in .env.local work
2. Test by filling out contact form
3. Check your email inbox (the one you set in EmailJS template)
4. You should receive the form submission

**Troubleshooting:**
- Emails not arriving? Check EmailJS dashboard
- Form says "error"? Check environment variables are correct

---

#### **Step 5: Set Up Google Analytics (Optional but Recommended)**

**What it does:**
- Tracks how many people visit your website
- Shows where visitors come from
- Shows what pages they visit

**How to set up:**

1. Go to: https://analytics.google.com
2. Sign in with Google account
3. Click "Start measuring"
4. Enter website details:
   - Account name: "Your Company Website"
   - Website name: "yourcompany.com"
5. Copy tracking code
6. In VS Code, edit: `src/app/layout.tsx`
7. Find the Google Analytics script
8. Paste your tracking code
9. Redeploy to Vercel/Netlify

---

#### **Step 6: Update DNS Records (If Using Custom Domain)**

**If you bought a domain:**

1. Go to where you bought the domain
2. Find DNS settings (often called "Nameservers" or "A record")
3. Point to your deployment platform

**For Vercel:**
- Vercel will show you exact DNS changes needed
- Usually: Add A record pointing to Vercel IP
- Takes 24-48 hours to work

**For Netlify:**
- Similar to Vercel
- Netlify shows you exactly what to do

---

#### **Step 7: Enable HTTPS (Security)**

**What it means:**
- HTTPS = secure, encrypted connection
- Shows lock icon in browser
- Important for trust

**Good news:**
- Vercel: Automatic (free SSL)
- Netlify: Automatic (free SSL)
- Both do this automatically!

**Nothing to do** - it's already set up! 🎉

---

#### **Step 8: Set Up Auto-Updates (Optional)**

If you want website to update automatically when you change code:

**For Vercel:**
- Automatic! Just push code to GitHub, Vercel redeploys

**For Netlify:**
- Same! Push to GitHub, Netlify redeploys

**How to update later:**

1. Make changes to code on your computer
2. In PowerShell:
```powershell
git add .
git commit -m "Update description"
git push origin main
```
3. Wait 2-5 minutes
4. Your live website updates automatically!

**No manual uploading needed!** 🎉

---

#### **Step 9: Performance Check**

After deployment, check if website is fast:

1. Go to: https://pagespeed.web.dev
2. Enter your website URL
3. Check score:
   - 90+: Excellent ✅
   - 70-89: Good
   - < 70: Need optimization

**If slow:**
- Check image sizes (resize in Phase 4)
- Reduce unnecessary components
- Cache optimization (advanced)

---

#### **Step 10: Final Deployment Checklist**

```
DEPLOYMENT COMPLETE CHECKLIST

DEPLOYMENT PLATFORM:
□ Created Vercel account (or chose alternative)
□ Connected GitHub repository
□ Website deployed successfully

LIVE WEBSITE:
□ Website accessible at deployment URL
□ Logo displays correctly
□ All images show
□ All content is correct (no Rolax)
□ Forms load
□ Links work
□ Mobile view responsive

ENVIRONMENT:
□ Added all environment variables
□ EmailJS credentials in place
□ Site is showing with HTTPS (lock icon)

DOMAIN (if applicable):
□ Custom domain connected (optional)
□ DNS configured correctly
□ Domain points to deployment

ANALYTICS (optional):
□ Google Analytics installed
□ Tracking code in place
□ Website showing in Analytics dashboard

SECURITY:
□ SSL certificate active (HTTPS)
□ No sensitive data in code
□ .env.local never uploaded to GitHub
```

---

### **PHASE 6 COMPLETE!** ✅ 

You now have:
- ✅ Website live on internet
- ✅ Accessible via public URL
- ✅ HTTPS/security enabled
- ✅ EmailJS ready to send emails
- ✅ Analytics tracking setup (optional)
- ✅ Auto-updates when you change code
- ✅ Custom domain (optional)

**🎉 YOUR WEBSITE IS LIVE!**

---

## **🎉 ALL 6 PHASES COMPLETE!**

**You have successfully:**
1. ✅ Set up project locally
2. ✅ Updated company data
3. ✅ Created custom content
4. ✅ Replaced all images
5. ✅ Tested everything works
6. ✅ Deployed to internet

**Your website is now production-ready and live!**

### **Next Steps:**

**Immediate (This Week):**
- Send link to team/friends for feedback
- Test all forms work
- Monitor Analytics for first visitors

**Short term (Next 2 weeks):**
- Write real blog posts (more than 1-2)
- Get high-quality photos (professional photographer)
- Before/after project photos

**Medium term (Next month):**
- Google Search Console setup
- Google Local Business optimization
- Social media integration
- Email newsletter system

**Long term (Ongoing):**
- Add more blog content
- Update testimonials
- Monthly analytics review
- SEO optimization

---

## ✅ PART 5: COMPLETE CHANGE CHECKLIST

Print this and check off as you go:

```
ENVIRONMENT SETUP:
□ Copy project folder to new company directory
□ Create .env.local file
□ Fill .env.local with company credentials
□ npm install

GLOBAL SETTINGS:
□ Update src/app/layout.tsx metadata
□ Update company name in layout.tsx
□ Update address in layout.tsx schema
□ Update email in layout.tsx

HEADER COMPONENTS:
□ Update logo path in HeaderMiddle.tsx
□ Update company info in HeaderMiddle.tsx
□ Update banner message in HeaderTop.tsx

FOOTER:
□ Update logo in Footer.tsx
□ Update company info in Footer.tsx
□ Update social media links in Footer.tsx

HOME PAGE:
□ Update about section text
□ Update about section image
□ Update services list data
□ Update testimonials data
□ Update blog posts data

SERVICE PAGES:
□ Update each service detail page title/description
□ Consider renaming service folders if needed

CONTACT PAGE:
□ Verify phone number in ContactForm.tsx
□ Verify address in ContactForm.tsx
□ Update any custom contact message

IMAGES:
□ Replace logo
□ Replace favicon
□ Replace about image
□ Replace service images (7-8 images)
□ Replace blog images (3+ images)
□ Replace hero images

TESTING:
□ npm run dev works
□ Homepage displays correctly
□ All links work
□ Forms submit
□ Mobile responsive
□ No logo/image 404 errors

DEPLOYMENT:
□ Choose hosting platform
□ Deploy project
□ Configure domain
□ Set up SSL certificate
□ Verify live site works
```

---

## 📝 PART 6: COMPLETE EXAMPLE - NEW COMPANY

### **EXAMPLE: Setting up for "Green Thumb Landscaping" in Vancouver**

**Before Code:**
All references to "Rolax", Toronto, etc.

**After Setup:**

#### .env.local changes:
```env
BEFORE:
NEXT_PUBLIC_BUSINESS_NAME=Rolax Landscaping Canada
NEXT_PUBLIC_BUSINESS_PHONE=+1-647-916-6654
NEXT_PUBLIC_BUSINESS_ADDRESS=33 Saratoga Drive, Scarborough, ON M1P 4H8
NEXT_PUBLIC_SITE_URL=https://rolaxcanada.com

AFTER:
NEXT_PUBLIC_BUSINESS_NAME=Green Thumb Landscaping
NEXT_PUBLIC_BUSINESS_PHONE=+1-604-555-1234
NEXT_PUBLIC_BUSINESS_ADDRESS=456 Oak Street, Vancouver, BC V6B 1A1
NEXT_PUBLIC_SITE_URL=https://greenthumbvancouver.com
```

#### layout.tsx changes:
```tsx
BEFORE:
title: "Rolax Landscaping Canada | Professional Landscaping Services Toronto",
description: "Professional landscaping, hardscaping, tree services, and snow removal in Toronto & Scarborough."

AFTER:
title: "Green Thumb Landscaping | Professional Landscaping Services Vancouver",
description: "Professional landscaping, hardscaping, tree services, garden design in Vancouver & Metro Vancouver."
```

#### logo path changes:
```tsx
BEFORE:
src="/images/rolax landscaping new logo.jpg"

AFTER:
src="/images/green-thumb-logo.jpg"
```

#### Services changes:
```tsx
BEFORE (in Service.tsx):
{
  heading: "Landscaping & Mulching Services in Toronto",
  description: "Professional landscaping and mulch installation services across Toronto...",
  serviceLink: "/service-details/landscaping-mulching",
}

AFTER:
{
  heading: "Garden Design & Landscaping in Vancouver",
  description: "Custom garden design and expert landscaping services across Vancouver...",
  serviceLink: "/service-details/garden-design",
}
```

#### About section changes:
```tsx
BEFORE (in HomeAbout.tsx):
<h3>
  Rolax Landscaping is a trusted provider of high-quality landscaping, hardscaping, tree service, and snow plowing services in Toronto
</h3>

AFTER:
<h3>
  Green Thumb Landscaping is a trusted provider of expert garden design, landscaping, hardscaping and tree services in Vancouver
</h3>
```

---

## 🎓 BEST PRACTICES FOR REUSING CODE

### ✅ DO:
- ✅ Keep all company data in `.env.local`
- ✅ Use the component structure (it's generic)
- ✅ Keep the folder structure
- ✅ Reuse styling and colors (or customize)
- ✅ Test thoroughly before deploying

### ❌ DON'T:
- ❌ Hardcode company names in components
- ❌ Put credentials in git repository
- ❌ Change file structure without updating imports
- ❌ Forget to update SEO metadata
- ❌ Use placeholder images in production

---

## 🏗️ SCALABILITY: How to Handle MULTIPLE Clients

### **Option 1: Separate Repositories** (Recommended for beginners)
- Create new folder per company
- Clone/copy this code
- Each company has own git repo
- Each company has own deployment

**Pros**: Simple, independent, no conflicts  
**Cons**: Code duplication  
**Time**: 4-5 hours per company  

### **Option 2: Multi-Tenant Structure** (Advanced)
- One codebase
- Company info from database
- Different themes per company
- Shared components

**Pros**: DRY principle, efficient  
**Cons**: Complex, requires planning  
**Time**: 20+ hours setup, then 1-2 hours per company  

### **Option 3: Vercel Deployment** (Best of both)
- Separate repos
- Automatic deployment per company
- Free SSL, CDN, automatic scaling

**Pros**: Easy, scalable, cheap  
**Cons**: Monthly Vercel cost (~$20/company)  
**Time**: 30 mins per company deployment  

---

## 💰 BUSINESS MODELS

### **Model 1: Project-Based**
- Build website: $2,000-5,000
- Client gets own code & hosting
- You maintain code, they host & deploy
- Setup time: 5-10 hours
- Revenue per project: $2-5K

### **Model 2: Maintenance Contract**
- Build website: $2,000-5,000
- Monthly maintenance: $200-500
- You handle updates, content, SEO
- Client pays monthly
- Revenue: Long-term recurring

### **Model 3: White-Label (SaaS)**
- One shared codebase
- Different domains per company
- Multi-tenant setup (advanced)
- Monthly SaaS fee: $300-1,000 per company
- You manage everything

---

## 📞 QUICK REFERENCE TABLE

| Item | Location | Change For New Company |
|------|----------|----------------------|
| **Company Name** | `.env.local`, `layout.tsx`, all components | ✅ Yes |
| **Logo** | `public/images/` | ✅ Yes |
| **Contact Info** | `.env.local`, `HeaderMiddle.tsx`, `Footer.tsx` | ✅ Yes |
| **Services** | `Service.tsx`, `service-details/*/` | ✅ Yes |
| **About Content** | `HomeAbout.tsx` | ✅ Yes |
| **Testimonials** | `Testimonial.tsx` | ✅ Yes |
| **Blog Posts** | `Blog.tsx` | ✅ Yes |
| **Colors/Styling** | `styles/css/` files | ⚠️ Optional |
| **Domain Name** | `.env.local`, `dns/hosting` | ✅ Yes |
| **SEO Keywords** | All page metadata | ✅ Yes |
| **Component Structure** | `src/components/`, `src/app/` | ❌ No* |

*No for beginners. Only change structure if you have deep React knowledge.

---

## 🚀 TOTAL SETUP TIME BREAKDOWN

| Phase | Task | Time |
|-------|------|------|
| 1 | Clone & organize | 15 min |
| 2 | Update company data | 45 min |
| 3 | Update services & content | 60 min |
| 4 | Update images | 30 min |
| 5 | Test locally | 15 min |
| 6 | Deploy | 30 min |
| **TOTAL** | **New company setup** | **~3 hours** |

**If experienced**: 1-2 hours  
**If beginner**: 4-5 hours first time  
**Subsequent companies**: 2-3 hours each  

---

## 🎯 FINAL CHECKLIST FOR LAUNCHING NEW COMPANY SITE

```
PRE-LAUNCH:
□ .env.local created and filled
□ All company data updated
□ All images replaced
□ npm run build completes without errors
□ npm run dev works locally
□ Forms tested with real EmailJS
□ Mobile responsive checked
□ All links work (no broken 404s)
□ Logo displays correctly

DEPLOYMENT:
□ Domain registered
□ Hosting chosen (Vercel/Netlify/Other)
□ Environment variables set on hosting
□ Code deployed successfully
□ Domain points to hosted site
□ SSL certificate working (HTTPS)
□ Site accessible via new domain

POST-LAUNCH:
□ Google Search Console property created
□ Sitemap submitted to Search Console
□ Google Analytics 4 installed
□ Monitor first week for errors
□ Collect feedback from client
□ Document any custom changes made
□ Create backup of code
□ Set up monitoring/alerts
```

---

## 💡 PRO TIPS FOR REUSABLE CODEBASE

### Tip 1: Version Control
```bash
# Tag each company version
git tag -a v1.0-company-name -m "Launch for [company]"
git push origin v1.0-company-name

# Easy to track which version each client has
```

### Tip 2: Document Changes
Create `CHANGES.md` per client:
```
Green Thumb Landscaping - Changes Made:
- Custom service: "Garden Design"
- Removed: Snow removal (not offered)
- Colors: Changed from green (#16a34a) to teal
- Logo: Custom design, 200x60px
- Hosting: Vercel
- Domain: greenthumbvancouver.com
```

### Tip 3: Reusable Configuration
```tsx
// Create: src/config/company.ts
export const COMPANY_CONFIG = {
  name: process.env.NEXT_PUBLIC_BUSINESS_NAME,
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE,
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL,
  // ... all from env variables
}

// Use everywhere:
import { COMPANY_CONFIG } from '@/config/company'
<h1>{COMPANY_CONFIG.name}</h1>
```

### Tip 4: Create Changelog
Document what's changed:
```
v1.0
- Initial setup for Rolax Landscaping
- 7 service types
- Blog functionality
- Contact form

v1.1
- Added testimonials component
- Improved mobile responsiveness
- Added schema.org markup

v1.2 (Green Thumb Landscaping)
- Updated for Vancouver market
- Changed colors to teal theme
- Removed snow removal service
- Added garden design service
```

---

## 🎓 TRAINING CHECKLIST FOR NEW DEVELOPER

If you're training someone to use this codebase:

```
WEEK 1:
□ Explain project structure
□ Show env variable setup
□ Update .env.local together
□ Update one company's metadata
□ Update images
□ Deploy to test environment

WEEK 2:
□ Update services independently
□ Update testimonials
□ Update blog content
□ Make landing page changes
□ Deploy independently

WEEK 3:
□ Independent setup of new company
□ Configure hosting
□ Deploy to production
□ Monitor and troubleshoot
□ Ready to do solo!
```

---

## 🎨 FAVICON & OG IMAGE SETUP (REUSABLE)

### What is a Favicon?
A favicon is the **small image** that appears in browser tabs, bookmarks, and in search results.

### What is an OG Image?
An OG (Open Graph) image is displayed when your site is shared on **Google Search, Facebook, Twitter, LinkedIn**.

### 📦 Required Files for New Company

Place these in `public/` folder:

```
public/
├── favicon.ico                    (64x64px - main favicon)
├── favicon-16x16.png              (16x16px - small tabs)
├── favicon-32x32.png              (32x32px - medium)
├── apple-touch-icon.png           (180x180px - iOS)
├── images/
│   └── og-image.jpg               (1200x630px - social sharing)
└── ...
```

### 🚀 Quick Setup Process

#### Step 1: Create Favicon Files (2 Options)

**Option A: Using Online Generator (Easiest)**
1. Go to [Favicon.io](https://favicon.io/) or [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Click "From Image"
3. Upload their company logo
4. Download the package and extract
5. Copy these 4 files to `public/` folder:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`

**Option B: Programmatic (If you have Python)**
Use a script to generate from existing logo image.

#### Step 2: Create OG Image (1200x630px)

**Specifications:**
- **Dimensions**: 1200x630px (MUST be 16:9 aspect ratio)
- **Format**: JPEG or PNG
- **Content**: Company logo + name + services/tagline
- **Location**: `public/images/og-image.jpg`

**How to Create:**
1. Use **Canva**: Search for "1200x630 Social Media Image"
2. Use **Figma**: Use 1200x630 artboard
3. Use **Photoshop**: New document 1200x630px
4. Use online: [Pixlr](https://pixlr.com/), [Photopea](https://www.photopea.com/)

**Design Tips:**
- Use company brand colors
- Include logo prominently
- Add company name
- Add 1-2 service types
- Leave margins (avoid text at edges)

#### Step 3: Verify After Creation

Run these commands:
```bash
npm run build
npm run dev
```

Then verify:
- ✅ Check favicon appears in browser tab
- ✅ Check OG image using [Facebook Debugger](https://www.facebook.com/sharing/debugger/)
- ✅ Clear browser cache if not showing (Ctrl+Shift+Delete)

### 🐛 If Image Doesn't Show

| Problem | Solution |
|---------|----------|
| Favicon not in tab | Hard refresh: `Ctrl+Shift+R` |
| OG image wrong on Facebook | Use debugger to clear cache |
| Apple icon not working | Must be exactly 180x180px PNG |
| Image distorted | Check dimensions: must be 1200x630px |

### 📝 REUSABLE PROCESS FOR NEW COMPANY

When setting up for a **new company**, follow this process:

1. **Get their logo** (preferably square, PNG or JPG)
2. **Generate favicon files** from their logo using online tools
3. **Replace files in** `public/`:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`
4. **Create custom OG image** (1200x630px) with:
   - Their logo
   - Their company name
   - Their main service/tagline
   - Their brand colors
5. **Save as** `public/images/og-image.jpg`
6. **Build and deploy** with `npm run build`

**Time Required**: 20-30 minutes per company

### ✅ Verification Checklist

Before deploying:
- [ ] Favicon appears in browser tab
- [ ] OG image is 1200x630px (verify dimensions)
- [ ] OG image shows when link is shared on social media
- [ ] All 4 favicon files present in `public/`
- [ ] No errors when running `npm run build`

---

## ❓ FAQ - REUSING CODE

**Q: Can I use this for non-landscaping companies?**  
A: YES! The structure is generic. Change services, content, and styling to match any service-based business (plumbing, electrician, HVAC, etc.)

**Q: Do I need to pay for anything?**  
A: Only hosting (~$5-15/month) and domain (~$10/year). EmailJS is free tier.

**Q: Can I change the colors?**  
A: Yes! Edit `src/styles/css/` files or use Tailwind classes. The green color (#16a34a) is used throughout.

**Q: How do I change services?**  
A: Edit `src/components/sevices/Service.tsx` and rename/create new `/service-details/` pages.

**Q: Can I sell this as a service?**  
A: YES! Build websites for other companies using this template. It's a business model!

**Q: What if client wants custom features?**  
A: You can add them! React components are extendable. Add: live chat, video, animations, etc.

---

## 📚 FINAL SUMMARY

✅ **YES you can reuse** - This code is designed to be reused  
✅ **Fast to setup** - 3-5 hours per new company  
✅ **Easy to customize** - All company data centralized  
✅ **Great for business** - Build it once, sell many times  
✅ **Already optimized** - SEO, performance, security built-in  

**Next Step**: Follow Phase 1-6 for any new company!

---

**Document created**: February 9, 2026  
**Status**: ✅ Complete guide ready for new developers  
**Time to implement**: 3-5 hours per new company

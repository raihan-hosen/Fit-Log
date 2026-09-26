# 💪 FitLog — Workout Library

FitLog is a responsive workout library and workout planning web application built with Next.js. It allows users to browse workouts, view detailed exercise information, add exercises to today's plan, save workouts for later, and manage their daily workout plan from a single place.

## 🚀 Live Demo

**Live Link:** https://github.com/raihan-hosen/Fit-Log

## 📦 GitHub Repository

**Repository:** https://fit-log-dun.vercel.app/

---

## ✨ Features

- 🏋️ **Workout Library**
  - Browse all available workouts from the FitLog API.
  - Responsive workout cards with images, categories, equipment, duration, calories, and rating.
  - Sort workouts by duration, calories, or rating.

- 📋 **Today's Plan**
  - Add workouts to today's workout plan.
  - View all planned workouts from the My Plan page.
  - Maximum of 5 workouts can be added to today's plan.
  - Remove workouts or mark them as completed.

- 🔖 **Save for Later**
  - Save workouts for later.
  - View saved workouts from the My Plan page.
  - Remove saved workouts when no longer needed.

- 📊 **Workout Statistics**
  - Live calculation of total exercises, workout duration, and calories for today's plan.

- 🔎 **Workout Details**
  - View complete workout information.
  - Includes equipment, difficulty, sets, reps, duration, calories, rating, and instructions.

- 🔔 **Toast Notifications**
  - Displays relevant notifications when adding, saving, removing, or completing workouts.

- 📱 **Fully Responsive**
  - Optimized for mobile, tablet, and desktop screen sizes.

- ⚡ **Loading & Empty States**
  - Loading animation while workout data is being fetched.
  - Helpful empty states when no workouts are available in a plan.

- 🚫 **Custom 404 Page**
  - Displays a custom 404 page for invalid or unknown routes.

- 💾 **Local Storage**
  - Today's Plan and Saved workouts are persisted using browser localStorage so they remain available after page reloads.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Next.js | Application framework |
| React | Building UI components |
| TypeScript | Type-safe development |
| Tailwind CSS | Styling and responsive design |
| DaisyUI | UI components |
| Lucide React | Icons |
| React Toastify | Toast notifications |
| Next/Image | Optimized image rendering |
| FitLog API | Workout data source |
| localStorage | Client-side data persistence |

---

## 🔗 API

The project uses the provided FitLog API.

### Get All Workouts

```text
https://api.abcz.workers.dev/api/fitlog

# 🏏 IPL Ticket Booking Platform

A modern, responsive web application built with **React**, **Vite**, and **Supabase** that allows users to explore IPL matches, view venues, and book tickets online.

---

## 🚀 Features

- **Match Listings:** View upcoming IPL matches with details on teams, venues, and timings.
- **Ticket Booking:** Seamless booking interface for selecting matches, stands, and ticket quantities.
- **Booking History:** Track past ticket bookings and reservation details in real time.
- **Responsive UI:** Fully optimized layout for mobile, tablet, and desktop viewports.
- **Backend & Database Integration:** Powered by Supabase for backend data handling.

---

## 🛠️ Tech Stack

- **Frontend:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** CSS3 (Flexbox, Grid, Media Queries)
- **Database / Backend:** [Supabase](https://supabase.com/)
- **Linter / Tooling:** Oxlint

---

## 📁 Project Structure

```text
ipl-ticket-booking/
├── public/
├── src/
│   ├── assets/            # Static assets (logos, images)
│   ├── components/        # Reusable UI components (Navbar, etc.)
│   ├── pages/             # App pages (Home, Matches, Booking, BookingHistory)
│   ├── supabase.js        # Supabase client configuration
│   ├── App.jsx            # Main app component & routing
│   ├── App.css            # Global styles & responsive breakpoints
│   └── main.jsx           # Application entry point
├── package.json
└── vite.config.js

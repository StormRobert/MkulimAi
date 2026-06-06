# MkulimAI 🌱

AI-powered smart farming platform built with React + Vite.

MkulimAI helps farmers analyze farm conditions using:
- Real-time weather forecasting
- AI-based forestry analysis
- Farm risk scoring
- Agroforestry recommendations
- SMS advisory previews

---

# Features

## Weather Intelligence
- Current weather conditions
- Hourly weather timeline
- Humidity, wind and UV analysis
- Region-based weather forecasts

## Forestry AI
- Tree canopy analysis
- Tree health estimation
- Coverage analysis
- AI-generated farm observations

## Farm Risk Detection
- Weather hazard scoring
- Environmental stress estimation
- Smart farming alerts

## Farmer Communication
- SMS broadcast preview
- Automated advisory messaging

---

# Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- Lucide React
- Weather AI API

---

# 📦 Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/mkulimAi.git
git clone git@github.com:YOUR_USERNAME/MkulimAi.git
```

Move into the project:

```bash
cd mkulimAi
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

# 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_BASE_URL=https://api.weather-ai.co
VITE_WEATHER_AI_KEY=your_api_key
```

---

# 🌐 Deployment

This project is deployed using Vercel.

To deploy:

```bash
npm run build
```

Then connect the repository to:

https://vercel.com

Add the environment variables in:
- Vercel Dashboard
- Project Settings
- Environment Variables

---

# ⚠️ Known Limitation

The Weather AI public API currently blocks browser requests from deployed domains due to CORS restrictions.

Localhost development works correctly.

A backend proxy/serverless function is recommended for production deployment.

---

# 📸 Application Screenshots

## Landing Page

![Landing Page](./screenshots/landingpage.png)

## Image Upload & Analysis

![Upload Analysis](./screenshots/uploadfile.png)

## Analysis Dashboard

![Dashboard1](./screenshots/dashboard1.png)
![Dashboard2](./screenshots/dashboard2.png)

---

# 📁 Project Structure

```bash
src/
├── Components/
├── Pages/
├── Services/
├── Utils/
└── Assets/
```

---

# 👨‍💻 Author

Developed by Storm Arasa

---


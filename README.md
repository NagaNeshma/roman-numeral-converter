Roman Numeral Converter Web Application
This project is a full-stack web application that converts Arabic numbers (1–3999) into Roman numerals.
It includes:
•	A React + TypeScript frontend (with React Spectrum UI)
•	A Node.js + Express + TypeScript backend
•	Dockerized setup
•	Prometheus metrics
•	Unit tests with Jest
•	CI/CD via GitHub Actions
•	Deployed via Render
________________________________________
Tech Stack
Layer	Tech/Library
Frontend	React, TypeScript, React Spectrum, Axios
Backend	Node.js, Express, TypeScript
Observability	Morgan (logs), prom-client (metrics), traces via logs
Testing	Jest, ts-jest
DevOps	Docker, Docker Compose, GitHub Actions
Hosting	Render.com (Backend + Frontend separately deployed)
________________________________________
Installation & Running Locally
Requires: Node.js 18+, Docker, npm
🔹 Clone the repo:
git clone https://github.com/NagaNeshma/roman-numeral-converter.git
cd roman-numeral-converter
🔹 Run with Docker Compose (preferred):
docker compose up --build
•	Backend runs on: http://localhost:8080/romannumeral?query=5
•	Frontend runs on: http://localhost:3000
________________________________________
Manual Run Without Docker
Backend:
cd backend
npm install
npm run dev
Frontend:
cd frontend
npm install
npm start
________________________________________
Testing
cd backend
npm test
________________________________________
Metrics
Backend exposes Prometheus metrics at:
GET http://localhost:8080/metrics
________________________________________
Dark Mode
•	React Spectrum automatically detects system theme
•	Manual dark/light mode toggle included (bottom-right corner of the UI)
________________________________________
Live Demos
Component	URL
Backend (API)	https://roman-numeral-converter-1l2x.onrender.com/romannumeral?query=5
Frontend (UI)	https://roman-frontend-r2m4.onrender.com

________________________________________
Roman Numeral Spec
Conversion logic is based on the Wikipedia Roman numeral specification:
🔗 https://en.wikipedia.org/wiki/Roman_numerals
________________________________________
Notes
•	Conversion logic is self-written (not from libraries).
•	Uses .env file for React API URL (React needs prefix REACT_APP_).
•	Toggle button allows switching between light/dark modes on the fly.
________________________________________
Author
Naga Neshma Koppalli
________________________________________
License
This project is part of Adobe Home assessment. All rights reserved.
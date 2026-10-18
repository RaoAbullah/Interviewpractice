# 🎙️ PrepMaster: Role-Based Mock Interview Platform

[![Live Demo](https://img.shields.io/badge/Demo-Live_Website-success?style=for-the-badge&logo=googlechrome)](https://raoabullah.github.io/Interviewpractice/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Auth_&_DB-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![WebRTC](https://img.shields.io/badge/WebRTC-MediaRecorder_API-FF4438?style=for-the-badge)](https://webrtc.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

> Built during an **AI SaaS Product Internship at Technologia Solutions LLC**.

PrepMaster is a client-side interview simulation web application that replicates high-pressure technical and behavioral interviews. It delivers role-specific question sets, enforces realistic prep timers, records synchronized audio/video responses locally, and enables instant session exports—with complete privacy and zero video server storage.

---

## 🏗️ System Workflow

```mermaid
sequenceDiagram
    actor Candidate
    participant UI as Browser UI
    participant Auth as Supabase Auth
    participant Media as Web MediaRecorder API
    participant Disk as Local Storage / Download

    Candidate->>UI: Select Role & Difficulty
    UI->>Auth: Validate Session / Token
    Auth-->>UI: Authenticated
    UI->>Candidate: Present Question + 30s Prep Timer
    Candidate->>Media: Grant Camera & Mic Permissions
    Media-->>UI: Live Stream Preview
    Candidate->>Media: Record Answer
    Media-->>Disk: Compile WebM / MP4 Stream
    Candidate->>UI: End Interview
    UI->>Candidate: Instant Video Playback & One-Click Download
```

---

## 🌟 Key Features

* **Targeted Domain Question Bank:** Curated question pools across multiple tech domains:
  * Software Engineering (Frontend, Backend, Full-Stack)
  * Data Science & Machine Learning
  * DevOps & Cloud Engineering
  * Product Management & UI/UX Design
* **Real-World Interview Constraints:** Enforces a configurable 30-second thinking countdown before auto-triggering response recording.
* **In-Browser Hardware Streaming:** Integrates native HTML5 `navigator.mediaDevices.getUserMedia` and `MediaRecorder` API for zero-latency audio/video capture.
* **Privacy-First Architecture:** Video recordings remain strictly in local memory/blob buffers; no video or audio data is ever transmitted to external servers.
* **Cloud Authentication:** Integrated with **Supabase Auth** for persistent user sessions, email sign-in/registration, and profile tracking.
* **Session Export:** Download full interview sessions with formatted timestamps for self-review or coaching feedback.

---

## 🛠️ Tech Stack

* **Frontend:** Modern Semantic HTML5, CSS3 Glassmorphism UI, Responsive Flexbox/Grid
* **Core Logic:** Vanilla JavaScript (ES6+ Modules, Async/Await, Blob streams)
* **Authentication:** Supabase Client SDK (`@supabase/supabase-js`)
* **Media Handling:** WebRTC `MediaStream`, `MediaRecorder` API
* **Deployment:** GitHub Pages

---

## 🚀 Getting Started

### Prerequisites
* Any modern web browser with camera and microphone access (Chrome, Edge, Firefox, Brave, Safari).

### Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/RaoAbullah/Interviewpractice.git
   cd Interviewpractice
   ```
2. Open `index.html` directly in your browser or run via local server:
   ```bash
   # Using Python
   python -m http.server 3000

   # Or using VS Code Live Server
   ```
3. Navigate to `http://localhost:3000` in your browser.

---

## 👤 Author
* **Rao Abdullah Nasir** — [GitHub](https://github.com/RaoAbullah) · [LinkedIn](https://www.linkedin.com/in/rao-abdullah-rajput) · [Email](mailto:abdullahnasirrao7@gmail.com)

# 🎮 Free Game Giveaways

A lightweight React app that displays currently available free games and loot from the [GamerPower API](https://www.gamerpower.com/api-read). It fetches and displays giveaways across platforms like Steam, Epic Games Store, and Android.

---

## 📑 Table of Contents

- [Technologies](#technologies)
- [Components](#components)
- [Installation](#installation)
- [Usage](#usage)
- [Development Process](#development-process)
- [Links](#links)

---

## ⚙️ Technologies

- **Frontend**:

  - React.js
  - TypeScript
  - Vite
  - Less Modules
- **API**:

  - [GamerPower API via RapidAPI](https://rapidapi.com/digiwalls/api/gamerpower)

---

## 🧩 Components

The key components are simple, modular, and reusable:

- **FreeGamesPage**
  Loads and displays all available giveaways. Handles loading and error states.
- **Card**
  Displays an individual giveaway with an image, title, platform info, and a link to claim the game.
- **fetchGiveaways**
  Fetches giveaway data from the API using correct headers and error handling.

---

## 🧪 Installation

Follow these steps to run the project locally:

### 1. Clone the repository:

```bash
git clone https://github.com/Friftycode/game-giveaway-overview.git
cd free-games
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Configure environment variables:

Create a `.env` file in the root of the project and add your RapidAPI key:

```env
VITE_RAPIDAPI_KEY=your_rapidapi_key
```

### 4. Start the development server:

```bash
npm run dev
```

### 5. Open in your browser:

Go to [http://localhost:5173](http://localhost:5173)

---

## 🕹️ Usage

- **Viewing Giveaways**
  The app automatically fetches and displays all available free game giveaways.
- **Claiming Games**
  Click the **"CLAIM NOW"** button to open the giveaway page in a new tab.

---

## 🛠️ Development Process

1. **Project Setup**

   - Created using `npm create vite@latest` with React + TypeScript.
   - Environment variables configured for API authentication.
2. **Basic Layout & Functionality**

   - Built `FreeGamesPage` to fetch and display data.
   - Created `Card` component for each game.
3. **Styling & UX**

   - Styled with Less Modules for scoped and maintainable styles.
   - Loading state and error handling implemented.
4. **Finishing Touches**

   - Cleaned up code, added alt text for accessibility.
   - Wrote documentation for future reference.

---

## 📎 Links

- 📘 [GamerPower API Docs](https://www.gamerpower.com/api-read)
- 🚀 [GamerPower on RapidAPI](https://rapidapi.com/digiwalls/api/gamerpower)

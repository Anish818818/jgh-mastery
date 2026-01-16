# A/L Bio Learning Platform

ශ්‍රී ලංකා උසස් පෙළ Biology stream ශිෂ්‍යයන් සඳහා සම්පූර්ණ learning platform එකක්

## Features

- 📚 **Complete Syllabus Coverage** - Biology, Chemistry, Physics විෂයයන් තුනම
- 📝 **Interactive Quizzes** - MCQ questions with instant feedback
- 📊 **Progress Tracking** - Track your completion and performance
- ⏱️ **Pomodoro Timer** - Stay focused with study sessions
- 🏆 **Gamification** - Earn points, badges, and level up
- 🌙 **Dark Mode** - Eye-friendly theme for night studying
- 📱 **Responsive Design** - Works on all devices

## Setup

### PowerShell Execution Policy Fix

If you encounter PowerShell execution policy errors, use one of these methods:

**Method 1: Bypass for current session (Recommended)**
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install
npm run dev
```

**Method 2: Use Command Prompt**
```cmd
npm install
npm run dev
```

**Method 3: Change policy permanently (requires Admin)**
```powershell
Set-ExecutionPolicy RemoteSigned
```

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Usage

1. Open the application in your browser
2. Start from the Dashboard
3. Select a subject (Biology/Chemistry/Physics)
4. Complete topics and take quizzes
5. Track your progress and earn achievements!

## Tech Stack

- Vite
- Vanilla JavaScript (ES6 Modules)
- CSS3 with Glassmorphism
- localStorage for data persistence

## License

Made with ❤️ for Sri Lankan students

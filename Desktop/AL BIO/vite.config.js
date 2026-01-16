import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/jgh-mastery/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        profile: resolve(__dirname, 'profile.html'),
        biology: resolve(__dirname, 'biology.html'),
        chemistry: resolve(__dirname, 'chemistry.html'),
        physics: resolve(__dirname, 'physics.html'),
        theory: resolve(__dirname, 'theory.html'),
        quiz: resolve(__dirname, 'quiz.html'),
        practice: resolve(__dirname, 'practice.html'),
        flashcards: resolve(__dirname, 'flashcards.html'),
        timer: resolve(__dirname, 'study-timer.html'),
        planner: resolve(__dirname, 'planner.html'),
        analytics: resolve(__dirname, 'analytics.html'),
      },
    },
  },
});

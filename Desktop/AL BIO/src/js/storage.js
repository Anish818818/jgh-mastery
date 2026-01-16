// Storage Management System for A/L Bio Learning Platform

class StorageManager {
    constructor() {
        this.storageKey = 'alBioLearning';
        this.initializeStorage();
    }

    // Initialize storage with default structure
    initializeStorage() {
        if (!this.getData()) {
            const defaultData = {
                user: {
                    name: '',
                    email: '',
                    joinedDate: new Date().toISOString(),
                    theme: 'light',
                    level: 1,
                    totalPoints: 0,
                    streak: 0,
                    lastStudyDate: null
                },
                progress: {
                    biology: { completed: 0, total: 0, topics: {} },
                    chemistry: { completed: 0, total: 0, topics: {} },
                    physics: { completed: 0, total: 0, topics: {} }
                },
                quizResults: [],
                studySessions: [],
                achievements: [],
                flashcards: {
                    biology: [],
                    chemistry: [],
                    physics: [],
                    custom: []
                },
                planner: {
                    tasks: [],
                    goals: []
                },
                settings: {
                    notifications: true,
                    soundEffects: true,
                    pomodoroWork: 25,
                    pomodoroBreak: 5,
                    dailyGoal: 120 // minutes
                }
            };
            this.saveData(defaultData);
        }
    }

    // Get all data
    getData() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return null;
        }
    }

    // Save all data
    saveData(data) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            return false;
        }
    }

    // Get user data
    getUser() {
        const data = this.getData();
        return data ? data.user : null;
    }

    // Update user data
    updateUser(updates) {
        const data = this.getData();
        if (data) {
            data.user = { ...data.user, ...updates };
            this.saveData(data);
            return true;
        }
        return false;
    }

    // Get progress for a subject
    getProgress(subject) {
        const data = this.getData();
        return data && data.progress[subject] ? data.progress[subject] : null;
    }

    // Update progress for a topic
    updateTopicProgress(subject, topicId, completed) {
        const data = this.getData();
        if (data && data.progress[subject]) {
            if (!data.progress[subject].topics) {
                data.progress[subject].topics = {};
            }
            data.progress[subject].topics[topicId] = completed;

            // Recalculate completed count
            const completedTopics = Object.values(data.progress[subject].topics).filter(Boolean).length;
            data.progress[subject].completed = completedTopics;

            this.saveData(data);
            return true;
        }
        return false;
    }

    // Add quiz result
    addQuizResult(result) {
        const data = this.getData();
        if (data) {
            data.quizResults.push({
                ...result,
                date: new Date().toISOString()
            });
            this.saveData(data);
            return true;
        }
        return false;
    }

    // Get quiz results
    getQuizResults(subject = null, limit = null) {
        const data = this.getData();
        if (!data) return [];

        let results = data.quizResults;

        if (subject) {
            results = results.filter(r => r.subject === subject);
        }

        if (limit) {
            results = results.slice(-limit);
        }

        return results;
    }

    // Add study session
    addStudySession(session) {
        const data = this.getData();
        if (data) {
            data.studySessions.push({
                ...session,
                date: new Date().toISOString()
            });

            // Update streak
            this.updateStreak();

            this.saveData(data);
            return true;
        }
        return false;
    }

    // Get study sessions
    getStudySessions(days = 7) {
        const data = this.getData();
        if (!data) return [];

        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - days);

        return data.studySessions.filter(session =>
            new Date(session.date) >= cutoffDate
        );
    }

    // Update streak
    updateStreak() {
        const data = this.getData();
        if (!data) return;

        const today = new Date().toDateString();
        const lastStudyDate = data.user.lastStudyDate ? new Date(data.user.lastStudyDate).toDateString() : null;

        if (lastStudyDate === today) {
            // Already studied today
            return;
        }

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toDateString();

        if (lastStudyDate === yesterdayStr) {
            // Continuing streak
            data.user.streak += 1;
        } else if (lastStudyDate !== today) {
            // Streak broken
            data.user.streak = 1;
        }

        data.user.lastStudyDate = new Date().toISOString();
        this.saveData(data);
    }

    // Add points
    addPoints(points, reason) {
        const data = this.getData();
        if (data) {
            data.user.totalPoints += points;

            // Level up logic (every 1000 points = 1 level)
            const newLevel = Math.floor(data.user.totalPoints / 1000) + 1;
            if (newLevel > data.user.level) {
                data.user.level = newLevel;
                this.unlockAchievement('level_' + newLevel);
            }

            this.saveData(data);
            return true;
        }
        return false;
    }

    // Unlock achievement
    unlockAchievement(achievementId) {
        const data = this.getData();
        if (data) {
            if (!data.achievements.includes(achievementId)) {
                data.achievements.push(achievementId);
                this.saveData(data);
                return true;
            }
        }
        return false;
    }

    // Get achievements
    getAchievements() {
        const data = this.getData();
        return data ? data.achievements : [];
    }

    // Flashcard operations
    addFlashcard(subject, flashcard) {
        const data = this.getData();
        if (data && data.flashcards[subject]) {
            data.flashcards[subject].push({
                ...flashcard,
                id: Date.now(),
                createdAt: new Date().toISOString()
            });
            this.saveData(data);
            return true;
        }
        return false;
    }

    getFlashcards(subject) {
        const data = this.getData();
        return data && data.flashcards[subject] ? data.flashcards[subject] : [];
    }

    // Planner operations
    addTask(task) {
        const data = this.getData();
        if (data) {
            data.planner.tasks.push({
                ...task,
                id: Date.now(),
                createdAt: new Date().toISOString(),
                completed: false
            });
            this.saveData(data);
            return true;
        }
        return false;
    }

    updateTask(taskId, updates) {
        const data = this.getData();
        if (data) {
            const taskIndex = data.planner.tasks.findIndex(t => t.id === taskId);
            if (taskIndex !== -1) {
                data.planner.tasks[taskIndex] = { ...data.planner.tasks[taskIndex], ...updates };
                this.saveData(data);
                return true;
            }
        }
        return false;
    }

    getTasks(completed = null) {
        const data = this.getData();
        if (!data) return [];

        let tasks = data.planner.tasks;

        if (completed !== null) {
            tasks = tasks.filter(t => t.completed === completed);
        }

        return tasks;
    }

    // Settings operations
    getSettings() {
        const data = this.getData();
        return data ? data.settings : null;
    }

    updateSettings(updates) {
        const data = this.getData();
        if (data) {
            data.settings = { ...data.settings, ...updates };
            this.saveData(data);
            return true;
        }
        return false;
    }

    // Export data
    exportData() {
        const data = this.getData();
        if (data) {
            const dataStr = JSON.stringify(data, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `al-bio-backup-${new Date().toISOString().split('T')[0]}.json`;
            link.click();
            URL.revokeObjectURL(url);
            return true;
        }
        return false;
    }

    // Import data
    importData(jsonData) {
        try {
            const data = JSON.parse(jsonData);
            this.saveData(data);
            return true;
        } catch (error) {
            console.error('Error importing data:', error);
            return false;
        }
    }

    // Clear all data
    clearData() {
        localStorage.removeItem(this.storageKey);
        this.initializeStorage();
    }
}

// Export singleton instance
export const storage = new StorageManager();

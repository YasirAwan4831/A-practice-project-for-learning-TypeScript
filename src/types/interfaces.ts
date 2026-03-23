// Interfaces and Types
export interface UserData {
    fullname: string;
    email: string;
    role?: string;
    interest?: string;
    message: string;
    newsletter?: boolean;
}

export interface ToastOptions {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    duration?: number;
}

export interface ThemeState {
    isDark: boolean;
    toggle: () => void;
}

export type ToastType = 'success' | 'error' | 'info' | 'warning';

// Enums
export enum LearningModule {
    HTML = 'HTML',
    CSS = 'CSS',
    JavaScript = 'JavaScript',
    TypeScript = 'TypeScript',
    React = 'React',
    Git = 'Git'
}

export enum ProgressStatus {
    Completed = '✅ Completed',
    InProgress = '🔄 In Progress',
    Planned = '📅 Planned',
    NotStarted = '⭕ Not Started'
}
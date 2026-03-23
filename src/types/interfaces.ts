// User data interface
export interface UserData {
    fullname: string;
    email: string;
    message: string;
    newsletter?: boolean;
}

// Toast options interface
export interface ToastOptions {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    duration?: number;
}

// Theme state interface
export interface ThemeState {
    isDark: boolean;
    toggle: () => void;
}

// Form validation result
export interface ValidationResult {
    isValid: boolean;
    error?: string;
}

// Type alias for toast types
export type ToastType = 'success' | 'error' | 'info' | 'warning';

// Enum for learning modules
export enum LearningModule {
    TypeScript = 'TypeScript',
    HTML = 'HTML',
    CSS = 'CSS',
    JavaScript = 'JavaScript',
    Git = 'Git'
}
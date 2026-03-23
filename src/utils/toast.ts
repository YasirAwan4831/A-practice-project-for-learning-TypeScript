import { ToastOptions, ToastType } from '../types/interfaces.js';

class ToastManager {
    private static instance: ToastManager;
    private toastElement: HTMLDivElement | null = null;
    
    private constructor() {}
    
    static getInstance(): ToastManager {
        if (!ToastManager.instance) {
            ToastManager.instance = new ToastManager();
        }
        return ToastManager.instance;
    }
    
    show(options: ToastOptions): void {
        const { message, type = 'info', duration = 3000 } = options;
        
        // Remove existing toast
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        
        // Apply styles based on type
        const colors: Record<ToastType, string> = {
            success: 'linear-gradient(135deg, #4CAF50, #2e7d32)',
            error: 'linear-gradient(135deg, #f44336, #d32f2f)',
            info: 'linear-gradient(135deg, #2196F3, #1976D2)',
            warning: 'linear-gradient(135deg, #ff9800, #f57c00)'
        };
        
        toast.style.background = colors[type];
        document.body.appendChild(toast);
        
        // Animate
        setTimeout(() => toast.classList.add('show'), 10);
        
        // Auto remove
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }
}

// Global function for backward compatibility
export const showToast = (message: string, type: ToastType = 'info'): void => {
    ToastManager.getInstance().show({ message, type });
};

export default ToastManager;
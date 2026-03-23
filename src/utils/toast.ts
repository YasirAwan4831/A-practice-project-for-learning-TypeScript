import { ToastOptions, ToastType } from '../types/interfaces.js';

class ToastManager {
    private static instance: ToastManager;
    
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
        if (existingToast) existingToast.remove();
        
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        
        // Colors based on type
        const colors: Record<ToastType, string> = {
            success: '#4CAF50',
            error: '#f44336',
            info: '#2196F3',
            warning: '#ff9800'
        };
        
        toast.style.background = colors[type];
        document.body.appendChild(toast);
        
        // Show animation
        setTimeout(() => toast.classList.add('show'), 10);
        
        // Auto remove
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }
}

// Export function
export const showToast = (message: string, type: ToastType = 'info'): void => {
    ToastManager.getInstance().show({ message, type });
};

export default ToastManager;
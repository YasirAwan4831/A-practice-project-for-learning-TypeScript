import { UserData, ValidationResult } from '../types/interfaces.js';
import { showToast } from './toast.js';

class FormHandler {
    private form: HTMLFormElement | null;
    
    constructor() {
        this.form = document.querySelector('form');
        this.init();
    }
    
    private validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    private validateForm(data: UserData): ValidationResult {
        if (!data.fullname || !data.email || !data.message) {
            return { isValid: false, error: 'All fields are required' };
        }
        
        if (!this.validateEmail(data.email)) {
            return { isValid: false, error: 'Invalid email format' };
        }
        
        return { isValid: true };
    }
    
    private getFormData(): UserData {
        const fullname = (document.getElementById('fullname') as HTMLInputElement)?.value || '';
        const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
        const message = (document.getElementById('message') as HTMLTextAreaElement)?.value || '';
        const newsletter = (document.querySelector('input[name="newsletter"]') as HTMLInputElement)?.checked || false;
        
        return { fullname, email, message, newsletter };
    }
    
    private handleSubmit = (e: Event): void => {
        e.preventDefault();
        
        const formData = this.getFormData();
        const validation = this.validateForm(formData);
        
        if (validation.isValid) {
            let msg = `✅ Thanks ${formData.fullname}! Message sent.`;
            if (formData.newsletter) msg += ' Subscribed to newsletter.';
            showToast(msg, 'success');
            console.log('Form submitted:', formData);
        } else {
            showToast(`❌ ${validation.error}`, 'error');
        }
    };
    
    private setupResetHandler(): void {
        const resetBtn = this.form?.querySelector('button[type="reset"]');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                setTimeout(() => showToast('🔄 Form reset', 'info'), 100);
            });
        }
    }
    
    init(): void {
        if (this.form) {
            this.form.addEventListener('submit', this.handleSubmit);
            this.setupResetHandler();
        }
    }
}

export default FormHandler;
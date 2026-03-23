import { ThemeState } from '../types/interfaces.js';
import { showToast } from './toast.js';

class ThemeManager implements ThemeState {
    private toggleButton: HTMLButtonElement | null;
    private body: HTMLElement;
    private readonly DARK_CLASS = 'dark';
    
    constructor() {
        this.body = document.body;
        this.toggleButton = document.getElementById('themeToggle') as HTMLButtonElement;
        this.init();
    }
    
    get isDark(): boolean {
        return this.body.classList.contains(this.DARK_CLASS);
    }
    
    private loadSavedTheme(): void {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark') {
            this.body.classList.add(this.DARK_CLASS);
            this.updateButtonText();
        }
    }
    
    private updateButtonText(): void {
        if (this.toggleButton) {
            this.toggleButton.textContent = this.isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
        }
    }
    
    toggle(): void {
        this.body.classList.toggle(this.DARK_CLASS);
        localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
        this.updateButtonText();
        
        showToast(
            this.isDark ? '🌙 Dark mode activated' : '☀️ Light mode activated',
            'success'
        );
    }
    
    private setupEventListeners(): void {
        if (this.toggleButton) {
            this.toggleButton.addEventListener('click', () => this.toggle());
        }
    }
    
    init(): void {
        this.loadSavedTheme();
        this.setupEventListeners();
    }
}

export default ThemeManager;
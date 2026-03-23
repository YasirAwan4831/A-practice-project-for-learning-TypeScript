import { ThemeState } from '../types/interfaces.js';

class ThemeManager implements ThemeState {
    private themeToggle: HTMLButtonElement | null;
    private body: HTMLElement;
    private readonly DARK_CLASS = 'dark';
    
    constructor() {
        this.body = document.body;
        this.themeToggle = document.getElementById('themeToggle') as HTMLButtonElement;
        this.init();
    }
    
    get isDark(): boolean {
        return this.body.classList.contains(this.DARK_CLASS);
    }
    
    private loadSavedTheme(): void {
        const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
        if (savedTheme === 'dark') {
            this.body.classList.add(this.DARK_CLASS);
            if (this.themeToggle) {
                this.themeToggle.textContent = '☀️ Light Mode';
            }
        } else {
            if (this.themeToggle) {
                this.themeToggle.textContent = '🌙 Dark Mode';
            }
        }
    }
    
    toggle(): void {
        this.body.classList.toggle(this.DARK_CLASS);
        
        if (this.isDark) {
            localStorage.setItem('theme', 'dark');
            if (this.themeToggle) {
                this.themeToggle.textContent = '☀️ Light Mode';
            }
        } else {
            localStorage.setItem('theme', 'light');
            if (this.themeToggle) {
                this.themeToggle.textContent = '🌙 Dark Mode';
            }
        }
    }
    
    private setupEventListeners(): void {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.toggle();
                showToast({
                    message: this.isDark ? '🌙 Dark mode activated' : '☀️ Light mode activated',
                    type: 'success'
                });
            });
        }
    }
    
    init(): void {
        this.loadSavedTheme();
        this.setupEventListeners();
    }
}

export default ThemeManager;
import ThemeManager from './utils/theme.js';
import FormHandler from './utils/form.js';
import ScrollManager from './utils/scroll.js';
import { showToast } from './utils/toast.js';

class App {
    private themeManager: ThemeManager;
    private formHandler: FormHandler;
    private scrollManager: ScrollManager;
    
    constructor() {
        this.themeManager = new ThemeManager();
        this.formHandler = new FormHandler();
        this.scrollManager = new ScrollManager();
        this.init();
    }
    
    private setupKeyboardShortcuts(): void {
        document.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.altKey && e.key === 't') {
                e.preventDefault();
                this.themeManager.toggle();
            }
            
            if (e.altKey && e.key === 'h') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                showToast('⌨️ Shortcut: Back to top', 'info');
            }
        });
    }
    
    private setupTableInteractions(): void {
        const rows = document.querySelectorAll('tbody tr');
        rows.forEach(row => {
            row.addEventListener('click', () => {
                const cells = row.querySelectorAll('td');
                if (cells.length) {
                    showToast(`📊 ${cells[0]?.textContent}: ${cells[1]?.textContent}`, 'info');
                }
            });
        });
    }
    
    private setupDetailsInteractions(): void {
        document.querySelectorAll('details').forEach(details => {
            details.addEventListener('toggle', () => {
                if (details.open) {
                    const summary = details.querySelector('summary')?.textContent;
                    showToast(`📂 Expanded: ${summary}`, 'info');
                }
            });
        });
    }
    
    private showWelcomeMessage(): void {
        setTimeout(() => {
            showToast('🎉 Welcome to TypeScript Learning Lab!', 'success');
        }, 500);
        
        console.log('%c🚀 TypeScript App Started!', 'color: #007acc; font-size: 16px');
        console.log('%c💡 Try Alt+T for theme toggle', 'color: #ff9800');
    }
    
    init(): void {
        this.setupKeyboardShortcuts();
        this.setupTableInteractions();
        this.setupDetailsInteractions();
        this.showWelcomeMessage();
        
        console.log('✅ All modules initialized');
    }
}

// Start app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
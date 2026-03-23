import { showToast } from './toast.js';

class ScrollManager {
    private scrollButton: HTMLButtonElement | null;
    
    constructor() {
        this.scrollButton = document.getElementById('scrollTopBtn') as HTMLButtonElement;
        this.init();
    }
    
    private handleScroll(): void {
        if (window.pageYOffset > 300) {
            if (this.scrollButton) this.scrollButton.style.display = 'block';
        } else {
            if (this.scrollButton) this.scrollButton.style.display = 'none';
        }
    }
    
    private scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showToast('⬆️ Back to top', 'info');
    }
    
    setupSmoothLinks(): void {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const targetId = anchor.getAttribute('href');
                if (!targetId || targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    showToast(`📖 Scrolled to section`, 'info');
                }
            });
        });
    }
    
    private setupEventListeners(): void {
        window.addEventListener('scroll', () => this.handleScroll());
        if (this.scrollButton) {
            this.scrollButton.addEventListener('click', () => this.scrollToTop());
        }
    }
    
    init(): void {
        this.setupEventListeners();
        this.setupSmoothLinks();
    }
}

export default ScrollManager;
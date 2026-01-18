// Intersection Observer utility for scroll-triggered animations
// Uses Motion One for lightweight, performant animations

import { inView } from 'motion';

export function initSectionAnimations() {
  // Animate sections on scroll
  const sections = document.querySelectorAll('.section-fade-in, .section-scale-in');
  
  sections.forEach((section) => {
    inView(
      section as Element,
      () => {
        section.classList.add('visible');
        return () => section.classList.remove('visible');
      },
      { 
        margin: '-100px 0px',
        amount: 0.2
      }
    );
  });
  
  // Animate icon lists with stagger
  const iconLists = document.querySelectorAll('.icon-list');
  
  iconLists.forEach((list) => {
    const items = list.querySelectorAll('.icon-list-item');
    
    inView(
      list as Element,
      () => {
        items.forEach((item, index) => {
          (item as HTMLElement).style.animationDelay = `${index * 100}ms`;
        });
      },
      { 
        margin: '-50px 0px',
        amount: 0.3
      }
    );
  });
  
  // Animate heading underlines
  const headings = document.querySelectorAll('.heading-underline');
  
  headings.forEach((heading) => {
    inView(
      heading as Element,
      () => {
        heading.classList.add('animated');
      },
      { 
        margin: '-50px 0px',
        amount: 0.8
      }
    );
  });
}

// Initialize on DOM ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSectionAnimations);
  } else {
    initSectionAnimations();
  }
}

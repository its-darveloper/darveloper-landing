// src/lib/analytics.ts
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: {
        page_title?: string;
        page_location?: string;
        event_category?: string;
        event_label?: string;
        value?: number;
        [key: string]: string | number | boolean | undefined;
      }
    ) => void;
  }
}

// Track custom events
export const trackEvent = (
  action: string, 
  category: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
      page_title: title,
      page_location: url,
    });
  }
};

// Predefined events for your site
export const analytics = {
  // Contact events
  emailClick: () => trackEvent('click', 'contact', 'email'),
  instagramClick: () => trackEvent('click', 'social', 'instagram'),
  linkedinClick: () => trackEvent('click', 'social', 'linkedin'),
  
  // UI events
  darkModeToggle: (mode: 'dark' | 'light') => trackEvent('toggle', 'ui', `dark_mode_${mode}`),
  
  // Engagement
  scrollDepth: (depth: number) => trackEvent('scroll', 'engagement', 'depth', depth),
};
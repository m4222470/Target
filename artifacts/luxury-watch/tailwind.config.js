/**
 * ═══════════════════════════════════════════════════════════════════════════
 * AURUM & CO — Tailwind CSS Configuration
 * Luxury E-commerce Design System
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ═══════════════════════════════════════════════════════════════════════
      // 1. LUXURY TYPOGRAPHY
      // ═══════════════════════════════════════════════════════════════════════
      fontFamily: {
        // Display — Cormorant Garamond (Serif)
        'display': ['Cormorant Garamond', 'Georgia', '"Times New Roman"', 'serif'],
        'serif': ['Cormorant Garamond', 'Georgia', '"Times New Roman"', 'serif'],

        // Body — Montserrat (Sans-serif)
        'sans': ['Montserrat', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        'body': ['Montserrat', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },

      // ═══════════════════════════════════════════════════════════════════════
      // 2. LUXURY COLOR PALETTE
      // ═══════════════════════════════════════════════════════════════════════
      colors: {
        // Royal Noir — Primary Dark Backgrounds
        'royal': {
          DEFAULT: '#0A0A0A',
          50: '#1A1A1A',
          100: '#121212',
        },

        // Champagne Gold — Primary Accent
        'champagne': {
          DEFAULT: '#D4AF37',
          50: '#FDF8EE',
          100: '#F6E9C4',
          200: '#ECD28A',
          300: '#DDB84D',
          400: '#C9A227',
          500: '#AA8318',
          600: '#D4AF37', // Primary
          700: '#8C6712',
          800: '#573D0D',
          900: '#46300C',
        },

        // Gold Muted — Secondary Accent
        'gold': {
          DEFAULT: '#D4AF37',
          muted: '#B8956E',
          light: '#E8D5A3',
          dark: '#A68B29',
          subtle: 'rgba(212, 175, 55, 0.15)',
        },

        // Rose Gold — Alternative Accent
        'rose-gold': {
          DEFAULT: '#B76E79',
          light: '#D4A5A5',
          muted: '#8B6B6B',
        },

        // Bronze — Alternative Accent
        'bronze': {
          DEFAULT: '#8B7355',
          light: '#A69076',
          dark: '#6B5344',
        },

        // Ivory — Light Theme
        'ivory': {
          DEFAULT: '#FFFFFF',
          pure: '#FFFFFF',
          soft: '#F5F5F0',
          warm: '#F9F6F0',
        },

        // Cream — Light Background
        'cream': {
          DEFAULT: '#FAF7F2',
          light: '#F9F6F0',
        },

        // Parchment — Light Cards
        'parchment': '#E8E4DC',

        // Gray Warm
        'warm-gray': '#8A8A8A',

        // Charcoal
        'charcoal': {
          deep: '#121212',
          soft: '#1A1A1A',
          card: '#1E1E1E',
        },
      },

      // ═══════════════════════════════════════════════════════════════════════
      // 3. LUXURY SPACING
      // ═══════════════════════════════════════════════════════════════════════
      spacing: {
        // Standard spacing continues...
        '18': '4.5rem',
        '22': '5.5rem',
        '128': '32rem',
        '144': '36rem',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // 4. LUXURY SHADOWS
      // ═══════════════════════════════════════════════════════════════════════
      boxShadow: {
        // Subtle luxury shadows
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.15)',
        'subtle-lg': '0 4px 12px rgba(0, 0, 0, 0.2)',

        // Standard shadows
        'luxury': '0 10px 40px rgba(0, 0, 0, 0.25)',
        'luxury-lg': '0 20px 60px rgba(0, 0, 0, 0.35)',

        // Gold shadows
        'gold': '0 4px 20px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 8px 30px rgba(212, 175, 55, 0.35)',
        'gold-glow': '0 0 40px rgba(212, 175, 55, 0.2)',
        'gold-glow-lg': '0 0 60px rgba(212, 175, 55, 0.3)',

        // Card shadows
        'card': '0 10px 40px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.4)',
        'elevated': '0 15px 50px rgba(0, 0, 0, 0.35)',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // 5. LUXURY ANIMATIONS
      // ═══════════════════════════════════════════════════════════════════════
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-down': 'slideDown 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'shimmer': 'shimmer 1.5s infinite',
        'gold-pulse': 'goldPulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        goldPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 20px 5px rgba(212, 175, 55, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },

      // ═══════════════════════════════════════════════════════════════════════
      // 6. LUXURY TRANSITIONS
      // ═══════════════════════════════════════════════════════════════════════
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },

      transitionDuration: {
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // 7. LUXURY BORDER RADIUS
      // ═══════════════════════════════════════════════════════════════════════
      borderRadius: {
        'none': '0',
        'sm': '1px',
        'DEFAULT': '2px',
        'md': '3px',
        'lg': '4px',
        'xl': '6px',
        '2xl': '8px',
        '3xl': '12px',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // 8. LUXURY LETTER SPACING
      // ═══════════════════════════════════════════════════════════════════════
      letterSpacing: {
        'micro': '0.15em',
        'wide-xs': '0.05em',
        'wide': '0.1em',
        'wider': '0.15em',
        'widest': '0.2em',
        'ultra': '0.25em',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // 9. LUXURY LINE HEIGHTS
      // ═══════════════════════════════════════════════════════════════════════
      lineHeight: {
        'none': '1',
        'tight': '1.1',
        'snug': '1.25',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '1.7',
        'xl': '1.8',
        '2xl': '2',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // 10. LUXURY Z-INDEX
      // ═══════════════════════════════════════════════════════════════════════
      zIndex: {
        'dropdown': '100',
        'sticky': '200',
        'fixed': '300',
        'modal-backdrop': '400',
        'modal': '500',
        'popover': '600',
        'tooltip': '700',
        'toast': '800',
        'concierge': '1000',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // 11. LUXURY SCREEN READER
      // ═══════════════════════════════════════════════════════════════════════
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}

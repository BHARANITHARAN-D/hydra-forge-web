import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Enhanced Hydra King custom colors
				'glow-primary': 'hsl(var(--glow-primary))',
				'glow-secondary': 'hsl(var(--glow-secondary))',
				'glow-accent': 'hsl(var(--glow-accent))',
				'terminal-green': 'hsl(var(--terminal-green))',
				'warning-orange': 'hsl(var(--warning-orange))',
				'electric-blue': 'hsl(var(--electric-blue))',
				'neon-pink': 'hsl(var(--neon-pink))',
				'cyber-gold': 'hsl(var(--cyber-gold))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%': { boxShadow: '0 0 20px hsl(var(--glow-primary) / 0.3)' },
					'100%': { boxShadow: '0 0 40px hsl(var(--glow-primary) / 0.6)' }
				},
				'blink': {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 30px hsl(var(--primary) / 0.6)', 
						filter: 'brightness(1) saturate(1)' 
					},
					'50%': { 
						boxShadow: '0 0 60px hsl(var(--primary) / 0.9), 0 0 90px hsl(var(--secondary) / 0.5), 0 0 120px hsl(var(--accent) / 0.3)', 
						filter: 'brightness(1.3) saturate(1.4)' 
					}
				},
				'cyber-spin': {
					'0%': { transform: 'rotate(0deg) scale(1)' },
					'25%': { transform: 'rotate(90deg) scale(1.1)' },
					'50%': { transform: 'rotate(180deg) scale(1)' },
					'75%': { transform: 'rotate(270deg) scale(0.9)' },
					'100%': { transform: 'rotate(360deg) scale(1)' }
				},
				'matrix-rain': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' }
				},
				'neon-flicker': {
					'0%, 100%': { opacity: '1', filter: 'brightness(1)' },
					'10%': { opacity: '0.8', filter: 'brightness(0.8)' },
					'20%': { opacity: '1', filter: 'brightness(1.2)' },
					'30%': { opacity: '0.9', filter: 'brightness(0.9)' },
					'40%': { opacity: '1', filter: 'brightness(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
				'blink': 'blink 1s infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.8s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'cyber-spin': 'cyber-spin 4s ease-in-out infinite',
				'matrix-rain': 'matrix-rain 3s linear infinite',
				'neon-flicker': 'neon-flicker 2s ease-in-out infinite'
			},
			fontFamily: {
				'cyber': ['Orbitron', 'monospace'],
				'code': ['Fira Code', 'monospace']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

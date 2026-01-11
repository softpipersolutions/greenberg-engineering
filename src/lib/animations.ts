// Animation configuration and variants for Framer Motion

export const easings = {
    smooth: [0.25, 0.46, 0.45, 0.94] as const,
    bouncy: [0.68, -0.55, 0.265, 1.55] as const,
    snappy: [0.19, 1, 0.22, 1] as const,
};

export const springConfigs = {
    gentle: { damping: 30, stiffness: 200 },
    bouncy: { damping: 15, stiffness: 300 },
    stiff: { damping: 40, stiffness: 500 },
    floating: { damping: 20, stiffness: 100 },
};

// Stagger variants for container elements
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

// Fade up animation for children
export const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: easings.smooth },
    },
};

// Scale in animation
export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: easings.smooth },
    },
};

// Slide from left
export const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: easings.smooth },
    },
};

// Slide from right
export const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: easings.smooth },
    },
};

// Character stagger for text
export const characterVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.03,
            duration: 0.8,
            ease: easings.smooth,
        },
    }),
};

// Word reveal variants
export const wordVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: easings.smooth,
        },
    }),
};

// Line draw animation for SVG paths
export const drawLine = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: 2, ease: easings.smooth },
    },
};

// Gradient shift animation
export const gradientShift = {
    animate: {
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
        },
    },
};

// Floating animation for cards
export const floating = {
    animate: {
        y: [0, -10, 0],
        rotate: [-1, 1, -1],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

// Pulse glow animation
export const pulseGlow = {
    animate: {
        boxShadow: [
            '0 0 20px rgba(255, 255, 255, 0.1)',
            '0 0 40px rgba(255, 255, 255, 0.2)',
            '0 0 20px rgba(255, 255, 255, 0.1)',
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

// Section reveal animation
export const sectionReveal = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.15,
        },
    },
};

// Magnetic button effect helper
export const magneticEffect = (x: number, y: number, strength: number = 0.3) => ({
    x: x * strength,
    y: y * strength,
    transition: { type: 'spring', ...springConfigs.gentle },
});

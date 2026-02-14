'use client';

import { motion } from 'framer-motion';
import VisualWrapper from '../VisualWrapper';

export default function BIM() {
    return (
        <VisualWrapper gradientFrom="#240046" gradientTo="rgba(123, 44, 191, 0.2)">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute">
                <motion.rect
                    x="30" y="30" width="40" height="40"
                    fill="transparent"
                    stroke="rgba(123, 44, 191, 0.5)"
                    strokeWidth="1"
                    initial={{ rotateX: 0, rotateY: 0 }}
                    animate={{ rotateX: [0, 45, 0], rotateY: [0, 45, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ perspective: 1000 }}
                />
                <motion.rect
                    x="25" y="25" width="50" height="50"
                    fill="transparent"
                    stroke="rgba(123, 44, 191, 0.3)"
                    strokeWidth="0.5"
                    initial={{ rotateX: 0, rotateY: 0 }}
                    animate={{ rotateX: [0, -30, 0], rotateY: [0, 30, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
            </svg>
        </VisualWrapper>
    );
}

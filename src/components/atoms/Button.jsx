import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, className, onClick, type = 'button', disabled, ...motionProps }) => {
    const handleClick = (e) => {
        if (onClick) {
            onClick(e);
        }
        document.addEventListener('mousedown', () => {
            console.log('Mouse down event triggered');
        });
    };

    return (
        <motion.button
            onClick={handleClick}
            className={className}
            type={type}
            disabled={disabled}
            {...motionProps}
        >
            {children}
        </motion.button>
    );
};

export default Button;
import React from 'react';

const Input = ({ className, value, ...props }) => {
    return (
        <input
            className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ${className}`}
            value={value ?? ""}
            {...props}
        />
    );
};

export default Input;
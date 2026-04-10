import React from 'react';

/**
 * Generic Badge component for UI consistency.
 * Maps 'color' prop to CSS classes: success, danger, warning, primary.
 */
export const Badge = ({ color = 'primary', children, className = '' }) => {
    const colorClass = color === 'success' ? 'badge-done' : 
                      color === 'danger' ? 'badge-canceled' : 
                      color === 'warning' ? 'badge-pending' : 
                      'badge-active';
                      
    return (
        <span className={`badge ${colorClass} ${className}`}>
            {children}
        </span>
    );
};

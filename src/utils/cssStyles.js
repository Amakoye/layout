import { rgba } from 'polished';

const cssStyles = {
  glass(options) {
    const blur = 5;
    return {
      background: rgba(options?.bg || '#ffffff', options?.opacity || 0.12),

      ...(options?.saturate > 0
        ? {
            backdropFilter: `blur(${options.blur || blur}px) saturate(${
              options.saturate
            }%)`,
            WebkitBackdropFilter: `blur(${options.blur || blur}px) saturate(${
              options.saturate
            }%)`,
          }
        : {
            backdropFilter: `blur(${options?.blur || blur}px)`,
          }),

      ...(!!options && options?.border !== false
        ? {
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: rgba('#ffffff', options.border?.opacity || 0.6),
          }
        : {
            borderWidth: 0,
          }),
    };
  },
};

export default cssStyles;

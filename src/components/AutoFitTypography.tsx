'use client';

import { Typography, type TypographyProps } from '@mui/material';
import { useLayoutEffect, useRef, useState } from 'react';

interface AutoFitTypographyProps extends TypographyProps {
  minFontSize?: number;
  maxFontSize?: number;
}

export default function AutoFitTypography({
  minFontSize = 10,
  maxFontSize = 26,
  sx,
  children,
  ...props
}: AutoFitTypographyProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState(maxFontSize);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const measure = measureRef.current;

    if (!wrapper || !measure) return;

    const calculate = () => {
      const availableWidth = wrapper.clientWidth;

      if (!availableWidth) return;

      let low = minFontSize;
      let high = maxFontSize;
      let best = minFontSize;

      measure.style.fontSize = `${maxFontSize}px`;

      if (measure.getBoundingClientRect().width <= availableWidth) {
        setFontSize(maxFontSize);
        return;
      }

      for (let i = 0; i < 20; i++) {
        const mid = (low + high) / 2;
        measure.style.fontSize = `${mid}px`;

        if (measure.getBoundingClientRect().width <= availableWidth) {
          best = mid;
          low = mid;
        } else {
          high = mid;
        }
      }

      setFontSize(best);
    };

    const observer = new ResizeObserver(calculate);
    observer.observe(wrapper);

    calculate();

    return () => observer.disconnect();
  }, [children, minFontSize, maxFontSize]);

  return (
    <div
      ref={wrapperRef}
      style={{
        flex: '1 1 0%',
        minWidth: 0,
        position: 'relative',
      }}
    >
      <span
        ref={measureRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          visibility: 'hidden',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          fontFamily: 'inherit',
          fontWeight: props.fontWeight ?? 'inherit',
          letterSpacing: props.letterSpacing ?? 'inherit',
          fontSize: `${maxFontSize}px`,
        }}
      >
        {children}
      </span>

      <Typography
        {...props}
        sx={[
          {
            display: 'block',
            width: '100%',
            minWidth: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: `${fontSize}px`,
          },
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
      >
        {children}
      </Typography>
    </div>
  );
}

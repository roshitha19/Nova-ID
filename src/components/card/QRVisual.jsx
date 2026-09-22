import React, { useMemo } from 'react';

/**
 * QRVisual Component
 * Renders a procedural SVG 2D matrix pattern and linear barcode
 * deterministically generated from the student's ID.
 */
export default function QRVisual({ studentId = 'NOVA-0000', size = 80 }) {
  // Deterministic seed based on student ID characters
  const grid = useMemo(() => {
    const seedStr = studentId || 'NOVA-DEFAULT-2026';
    let hash = 0;
    for (let i = 0; i < seedStr.length; i++) {
      hash = (hash << 5) - hash + seedStr.charCodeAt(i);
      hash |= 0;
    }

    const gridSize = 9;
    const cells = [];

    // Generate 9x9 matrix pattern with fixed finder patterns at corners
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        // Corner 1: Top-Left finder
        if (r < 3 && c < 3) {
          cells.push((r === 0 || r === 2 || c === 0 || c === 2 || (r === 1 && c === 1)));
          continue;
        }
        // Corner 2: Top-Right finder
        if (r < 3 && c >= gridSize - 3) {
          const tc = c - (gridSize - 3);
          cells.push((r === 0 || r === 2 || tc === 0 || tc === 2 || (r === 1 && tc === 1)));
          continue;
        }
        // Corner 3: Bottom-Left finder
        if (r >= gridSize - 3 && c < 3) {
          const tr = r - (gridSize - 3);
          cells.push((tr === 0 || tr === 2 || c === 0 || c === 2 || (tr === 1 && c === 1)));
          continue;
        }

        // Deterministic pseudo-randomness for data blocks
        const bit = Math.abs(Math.sin(hash * (r * gridSize + c + 1))) > 0.48;
        cells.push(bit);
      }
    }
    return { gridSize, cells };
  }, [studentId]);

  const cellSize = size / grid.gridSize;

  return (
    <div className="qr-box-container" title={`Deterministic Identity Matrix: ${studentId}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="qr-matrix-svg"
      >
        <rect width={size} height={size} fill="#FFFFFF" rx="4" />
        {grid.cells.map((isFilled, idx) => {
          if (!isFilled) return null;
          const r = Math.floor(idx / grid.gridSize);
          const c = idx % grid.gridSize;
          return (
            <rect
              key={idx}
              x={c * cellSize + 0.5}
              y={r * cellSize + 0.5}
              width={cellSize - 1}
              height={cellSize - 1}
              rx="1"
              fill="#111413"
            />
          );
        })}
      </svg>
    </div>
  );
}

/**
 * Procedural Barcode Generator
 */
export function BarcodeVisual({ code = 'NOVA-1042' }) {
  const bars = useMemo(() => {
    const clean = code.toUpperCase();
    const result = [];
    for (let i = 0; i < 34; i++) {
      const charCode = clean.charCodeAt(i % clean.length) || 48;
      const width = (charCode % 3) + 1;
      const isSpace = (charCode + i) % 4 === 0;
      result.push({ width, isSpace });
    }
    return result;
  }, [code]);

  return (
    <div className="barcode-strip">
      <svg className="barcode-svg" viewBox="0 0 200 24" preserveAspectRatio="none">
        <rect width="200" height="24" fill="transparent" />
        {bars.map((bar, idx) => {
          if (bar.isSpace) return null;
          const x = idx * 5.8;
          return (
            <rect
              key={idx}
              x={x}
              y="0"
              width={bar.width}
              height="24"
              fill="var(--card-accent)"
              opacity="0.85"
            />
          );
        })}
      </svg>
      <span className="barcode-text">*{code || 'VU26-CSE-1042'}*</span>
    </div>
  );
}

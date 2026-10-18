// A lotus mandala drawn from rings of pointed petals. Used as quiet background ornament only.
const PETAL = 'M0 0C12-20 12-44 0-62C-12-44-12-20 0 0Z';
const RINGS = [
  { count: 24, scale: 1.12, y: -86 },
  { count: 16, scale: 0.95, y: -66 },
  { count: 12, scale: 0.72, y: -44 },
  { count: 8, scale: 0.5, y: -24 },
];

export default function Mandala({ className = '' }) {
  return (
    <svg className={className} viewBox="-200 -200 400 400" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle r="196" />
      <circle r="186" strokeDasharray="2 6" />
      <circle r="172" />
      {RINGS.map(({ count, scale, y }) =>
        Array.from({ length: count }, (_, i) => (
          <path key={`${count}-${i}`} d={PETAL} transform={`rotate(${(i * 360) / count}) translate(0 ${y}) scale(${scale})`} />
        )),
      )}
      <circle r="14" />
      <circle r="5" fill="currentColor" />
    </svg>
  );
}

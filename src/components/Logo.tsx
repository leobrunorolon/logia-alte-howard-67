interface LogoProps {
  size?: number;
  color?: string;
}

export default function Logo({ size = 28, color = 'currentColor' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {/* Compás (las dos piernas abiertas arriba) */}
      <path
        d="M32 4 L14 56"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M32 4 L50 56"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Arco superior del compás */}
      <path
        d="M26 16 A8 8 0 0 1 38 16"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Escuadra (V invertida abajo) */}
      <path
        d="M12 28 L32 52 L52 28"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* G central */}
      <text
        x="32"
        y="40"
        textAnchor="middle"
        dominantBaseline="central"
        fill={color}
        fontSize="14"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="600"
      >
        G
      </text>
    </svg>
  );
}

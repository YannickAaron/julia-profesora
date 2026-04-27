export function LogoDELE() {
  return (
    <svg width="160" height="80" viewBox="0 0 200 100" fill="none">
      <text x="100" y="50" textAnchor="middle"
            fontFamily="Fraunces, serif" fontWeight="700" fontSize="44"
            letterSpacing="6" fill="#8a1c2b">DELE</text>
      <line x1="40" y1="58" x2="160" y2="58" stroke="#8a1c2b" strokeWidth="1.5" />
      <text x="100" y="74" textAnchor="middle"
            fontFamily="Work Sans, sans-serif" fontWeight="500" fontSize="9"
            letterSpacing="1.5" fill="#8a1c2b">DIPLOMAS DE ESPAÑOL</text>
      <text x="100" y="86" textAnchor="middle"
            fontFamily="Work Sans, sans-serif" fontWeight="400" fontSize="8"
            letterSpacing="1" fill="#8a1c2b">INSTITUTO CERVANTES</text>
    </svg>
  );
}

export function LogoSIELE() {
  return (
    <svg width="160" height="80" viewBox="0 0 200 100" fill="none">
      <circle cx="40" cy="50" r="22" fill="#0d4f8b" />
      <circle cx="40" cy="50" r="14" fill="#f08a1c" />
      <text x="76" y="58" fontFamily="Work Sans, sans-serif" fontWeight="800"
            fontSize="34" letterSpacing="1" fill="#0d4f8b">SIELE</text>
      <text x="76" y="78" fontFamily="Work Sans, sans-serif" fontWeight="400"
            fontSize="8" letterSpacing="1.2" fill="#0d4f8b">SERVICIO INTERNACIONAL DE</text>
      <text x="76" y="89" fontFamily="Work Sans, sans-serif" fontWeight="400"
            fontSize="8" letterSpacing="1.2" fill="#0d4f8b">EVALUACIÓN DE LA LENGUA ESPAÑOLA</text>
    </svg>
  );
}

export function LogoCCSE() {
  return (
    <svg width="160" height="80" viewBox="0 0 200 100" fill="none">
      <rect x="20" y="22" width="160" height="56" rx="4" fill="none" stroke="#8a1c2b" strokeWidth="1.5" />
      <text x="100" y="55" textAnchor="middle"
            fontFamily="Fraunces, serif" fontWeight="700" fontSize="32"
            letterSpacing="4" fill="#8a1c2b">CCSE</text>
      <text x="100" y="70" textAnchor="middle"
            fontFamily="Work Sans, sans-serif" fontWeight="500" fontSize="7"
            letterSpacing="0.8" fill="#8a1c2b">CONOCIMIENTOS CONSTITUCIONALES Y SOCIOCULTURALES</text>
    </svg>
  );
}

export const CERT_LOGOS: Record<string, () => React.JSX.Element> = {
  DELE: LogoDELE,
  SIELE: LogoSIELE,
  CCSE: LogoCCSE,
};

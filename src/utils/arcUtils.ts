export function polarToCartesian(
  cx: number,
  cy: number,
  r: number,
  angleInDegrees: number
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(angleInRadians),
    y: cy + r * Math.sin(angleInRadians),
  };
}

export function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(cx, cy, r, startAngle);
  const end = polarToCartesian(cx, cy, r, endAngle);

  // Рассчитываем разницу углов с учётом направления
  const deltaAngle = endAngle - startAngle;

  // Для svg-дуги largeArcFlag нужен по абсолютному значению угла
  const largeArcFlag = Math.abs(deltaAngle) <= 180 ? '0' : '1';

  // sweepFlag определяет направление дуги (1 — по часовой, 0 — против)
  // Если deltaAngle положителен — дуга по часовой (1)
  // Если отрицателен — против часовой (0)
  const sweepFlag = deltaAngle >= 0 ? '1' : '0';

  return [
    'M',
    start.x,
    start.y,
    'A',
    r,
    r,
    0,
    largeArcFlag,
    sweepFlag,
    end.x,
    end.y,
  ].join(' ');
}

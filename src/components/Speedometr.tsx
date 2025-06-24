import type { SpeedometrProps } from '../types';
import { describeArc } from '../utils/arcUtils';

export default function Speedometr({ config }: SpeedometrProps) {
  const [left, right] = config.data;
  const isEqual = left.score === right.score;
  const value = Math.max(left.score, right.score);
  const isRightDominant = right.score >= left.score;

  const cx = 100;
  const cy = 120;
  const radius = 80;

  const arcStart = -126;
  const arcEnd = 126;
  const totalArcDegrees = arcEnd - arcStart;

  const progressDegrees = (value / 100) * totalArcDegrees;

  const backgroundPath = describeArc(cx, cy, radius, arcStart, arcEnd);
  const progressPath = isEqual
    ? undefined
    : isRightDominant
    ? describeArc(cx, cy, radius, arcEnd, arcEnd - progressDegrees)
    : describeArc(cx, cy, radius, arcStart, arcStart + progressDegrees);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-blue-600 mb-2">
          {config.title}
        </h2>
        <svg width="200" height="240" viewBox="0 0 200 240">
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="3"
                floodColor="#0F8AFF"
                floodOpacity="0.8"
              />
            </filter>
          </defs>
          <path
            d={backgroundPath}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d={progressPath}
            fill="none"
            stroke="#007AEF"
            strokeWidth="10"
            strokeLinecap="round"
            filter="url(#shadow)"
          />
          <text
            x={cx}
            y={cy - 10}
            textAnchor="middle"
            fontSize="40"
            fill="#3B82F6"
            fontWeight="bold"
          >
            {isEqual ? '50 на 50' : `${value}%`}
          </text>
          <text
            x={cx}
            y={cy + 10}
            textAnchor="middle"
            fontSize="12"
            fill="#E5E7EB"
          >
            преобладает
          </text>
          <text
            x={cx}
            y={cy + 28}
            textAnchor="middle"
            fontSize="16"
            fill="#3B82F6"
          >
            {isEqual ? 'Никто' : isRightDominant ? right.label : left.label}
          </text>
          <text
            x={0}
            y={cy + 50}
            fontSize="10"
            fill="#E5E7EB"
            textAnchor="start"
          >
            100%
          </text>
          <text x={95} y={25} fontSize="10" fill="#E5E7EB" textAnchor="start">
            0%
          </text>
          <text
            x={200}
            y={cy + 50}
            fontSize="10"
            fill="#E5E7EB"
            textAnchor="end"
          >
            100%
          </text>
          <text
            x={15}
            y={cy + 75}
            fontSize="14"
            fill="#6B7280"
            textAnchor="start"
          >
            {left.label}
          </text>

          <text
            x={175}
            y={cy + 75}
            fontSize="14"
            fill="#6B7280"
            textAnchor="end"
          >
            {right.label}
          </text>

          <line
            x1={cx}
            y1={cy - radius - 10} // Начинаем немного выше радиуса дуги
            x2={cx}
            y2={cy - radius + 10} // Заканчиваем немного ниже радиуса дуги
            stroke="#84C3FF"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  );
}

// import type { SpeedometrProps } from './types';

// function polarToCartesian(cx: number, cy: number, r: number, angleInDegrees: number) {
//   const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
//   return {
//     x: cx + r * Math.cos(angleInRadians),
//     y: cy + r * Math.sin(angleInRadians),
//   };
// }

// function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
//   const start = polarToCartesian(cx, cy, r, endAngle);
//   const end = polarToCartesian(cx, cy, r, startAngle);
//   const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

//   return [
//     "M", start.x, start.y,
//     "A", r, r, 0, largeArcFlag, 0, end.x, end.y
//   ].join(" ");
// }

// export default function Speedometr({ config }: SpeedometrProps) {
//   const [left, right] = config.data;
//   const value = left.score > right.score ? left.score : right.score;

//   const cx = 90;
//   const cy = 90;
//   const radius = 70;

//   // Дуга 70% круга — 252 градуса
//   // Начинаем с -126° и идём до +126°
//   const arcStart = -126;
//   const arcEnd = 126;
//   const totalArcDegrees = arcEnd - arcStart; // 252°

//   // Прогресс — угол в пределах дуги
//   const progressDegrees = arcStart + (value / 100) * totalArcDegrees;

//   // Пути для фона и прогресса
//   const backgroundPath = describeArc(cx, cy, radius, arcStart, arcEnd);
//   const progressPath = describeArc(cx, cy, radius, arcStart, progressDegrees);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold text-blue-600 mb-2">
//           {config.title}
//         </h2>
//         <svg width="180" height="190" viewBox="0 0 180 180" className="relative">
//           {/* Серая дуга */}
//           <path
//             d={backgroundPath}
//             fill="none"
//             stroke="#E5E7EB"
//             strokeWidth="10"
//             strokeLinecap="round"
//           />
//           {/* Синяя дуга */}
//           <path
//             d={progressPath}
//             fill="none"
//             stroke="#3B82F6"
//             strokeWidth="10"
//             strokeLinecap="round"
//           />
//           {/* Текст по центру */}
//           <text
//             x={cx}
//             y={cy - 20}
//             textAnchor="middle"
//             fontSize="20"
//             fill="#3B82F6"
//             fontWeight="bold"
//           >
//             {value}%
//           </text>
//           <text x={cx} y={cy} textAnchor="middle" fontSize="12" fill="#6B7280">
//             преобладает
//           </text>
//           <text x={cx} y={cy + 18} textAnchor="middle" fontSize="16" fill="#3B82F6">
//             {value >= 50 ? left.label : right.label}
//           </text>
//         </svg>
//         <div className="flex justify-between w-full text-sm text-gray-600 mt-2 px-4">
//           <span>{left.label}</span>
//           <span>{right.label}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

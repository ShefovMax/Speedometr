import type { SpeedometrProps } from './types';

export const config: SpeedometrProps['config'] = {
  id: 2,
  type: 'SpeedTwoWays',
  title: 'Предпочитаемый тип управления ',
  data: [
    {
      label: 'Процесс',
      score: 80,
    },
    {
      label: 'Проект',
      score: 20,
    },
  ],
};

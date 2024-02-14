import { FC, memo } from 'react';
import { IconProps } from './IconProps';

const HomeIcon: FC<IconProps> = memo((props) => {
  const { width = '24px', height = '24px', color = '#005253' } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 9V19C5 19.5523 5.44772 20 6 20H10M5 9L11.3492 3.55782C11.7237 3.23683 12.2763 3.23683 12.6508 3.55782L19 9M5 9L2.5 11M19 9V19C19 19.5523 18.5523 20 18 20H14M19 9L21.5 11M10 20V15C10 14.4477 10.4477 14 11 14H13C13.5523 14 14 14.4477 14 15V20M10 20H14"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default HomeIcon;

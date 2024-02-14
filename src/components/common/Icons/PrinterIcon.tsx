import React, { FC } from 'react';
import { IconProps } from './IconProps';

const PrinterIcon: FC<IconProps> = (props) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 5C6.5 4.17157 7.17157 3.5 8 3.5H16C16.8284 3.5 17.5 4.17157 17.5 5V6.5H6.5V5ZM18.5 5V6.5H19C20.3807 6.5 21.5 7.61929 21.5 9V10V15C21.5 16.3807 20.3807 17.5 19 17.5H17.5V19C17.5 20.3807 16.3807 21.5 15 21.5H9C7.61929 21.5 6.5 20.3807 6.5 19V17.5H5C3.61929 17.5 2.5 16.3807 2.5 15V9C2.5 7.61929 3.61929 6.5 5 6.5H5.5V5C5.5 3.61929 6.61929 2.5 8 2.5H16C17.3807 2.5 18.5 3.61929 18.5 5ZM19 16.5H17.5V15C17.5 13.6193 16.3807 12.5 15 12.5H9C7.61929 12.5 6.5 13.6193 6.5 15V16.5H5C4.17157 16.5 3.5 15.8284 3.5 15V9C3.5 8.17157 4.17157 7.5 5 7.5H6H18H19C19.8284 7.5 20.5 8.17157 20.5 9V10V15C20.5 15.8284 19.8284 16.5 19 16.5ZM7.5 15C7.5 14.1716 8.17157 13.5 9 13.5H15C15.8284 13.5 16.5 14.1716 16.5 15V17V19C16.5 19.8284 15.8284 20.5 15 20.5H9C8.17157 20.5 7.5 19.8284 7.5 19V17V15ZM7 9.5C6.72386 9.5 6.5 9.72386 6.5 10C6.5 10.2761 6.72386 10.5 7 10.5H9C9.27614 10.5 9.5 10.2761 9.5 10C9.5 9.72386 9.27614 9.5 9 9.5H7Z"
        fill={color}
      />
    </svg>
  );
};

export default PrinterIcon;

import { memo, FC } from 'react';
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
        d="M13.6036 16.9092C13.3583 16.9321 13.112 16.8767 12.9 16.751C12.7451 16.592 12.6709 16.3713 12.6982 16.151C12.7039 15.9676 12.7258 15.7851 12.7636 15.6055C12.8002 15.3996 12.8475 15.1957 12.9054 14.9946L13.5491 12.7801C13.6154 12.5615 13.6593 12.3367 13.68 12.1091C13.68 11.8637 13.7127 11.6946 13.7127 11.5964C13.7264 11.1589 13.5396 10.7391 13.2054 10.4564C12.7944 10.1409 12.2825 9.98575 11.7654 10.0201C11.3949 10.0256 11.0272 10.0863 10.6745 10.2001C10.289 10.3201 9.88358 10.4637 9.45814 10.631L9.27271 11.351C9.39814 11.3073 9.55091 11.2583 9.72542 11.2037C9.89192 11.1544 10.0645 11.1287 10.2381 11.1273C10.4817 11.101 10.7269 11.1608 10.9309 11.2964C11.0694 11.4618 11.1344 11.6765 11.1109 11.891C11.1103 12.0744 11.0901 12.2573 11.0509 12.4364C11.0127 12.6273 10.9636 12.8291 10.9036 13.0419L10.2545 15.2673C10.2022 15.4742 10.1603 15.6835 10.1291 15.8946C10.1036 16.0753 10.0908 16.2575 10.0909 16.44C10.0882 16.8805 10.2896 17.2974 10.6363 17.5691C11.0537 17.8896 11.5729 18.0484 12.0981 18.0164C12.4679 18.024 12.8365 17.9705 13.189 17.8582C13.4981 17.7527 13.9108 17.6018 14.4272 17.4055L14.6018 16.7182C14.4619 16.7762 14.3179 16.8236 14.1709 16.86C13.985 16.9024 13.7941 16.9189 13.6036 16.9092Z"
        fill={color}
      />
      <path
        d="M14.2855 6.40909C13.9887 6.13647 13.5976 5.98979 13.1946 6.00001C12.7919 5.99092 12.4012 6.13745 12.1037 6.40909C11.5585 6.87925 11.4976 7.70242 11.9678 8.24772C12.0097 8.29632 12.0551 8.34175 12.1037 8.38365C12.7249 8.93926 13.6644 8.93926 14.2855 8.38365C14.8307 7.90886 14.8879 7.08198 14.4131 6.53673C14.3736 6.49131 14.331 6.44865 14.2855 6.40909Z"
        fill={color}
      />
      <path
        d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 22.9091C5.97506 22.9091 1.09092 18.0249 1.09092 12C1.09092 5.97506 5.97506 1.09092 12 1.09092C18.0249 1.09092 22.9091 5.97506 22.9091 12C22.9091 18.0249 18.0249 22.9091 12 22.9091Z"
        fill={color}
      />
    </svg>
  );
});

export default HomeIcon;

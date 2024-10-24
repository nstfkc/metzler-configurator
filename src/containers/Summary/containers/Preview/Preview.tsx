import styles from './Preview.module.scss';
import { observer } from 'mobx-react-lite';
import { useControlsStore } from '../../../../hooks/store/useControlsStore';
import { useEffect, useState } from 'react';
import { useEditorStore } from '../../../../hooks/store/useEditorStore';

const Preview = observer(() => {
  const {
    setMailSizes,
    mailWidth,
    mailDepth,
    mailHeight,
  } = useControlsStore();

  const { previewMailsUrl, isLoadingPreview, isInitialize } = useEditorStore();
  const [imageClass, setImageClass] = useState('');

  const updateSummaryImage = () => {
    const rootElement = document.querySelector(`.${styles.root}`);
    if (rootElement) {
      const { offsetWidth, offsetHeight } = rootElement;
      console.log(offsetWidth, offsetHeight);
      if (offsetWidth > offsetHeight) {
        setImageClass(styles.heightGreater);
      } else {
        setImageClass(styles.widthGreater);
      }
    }
  }

  useEffect(() => {
    updateSummaryImage();
    // Add resize event listener
    window.addEventListener('resize', updateSummaryImage);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', updateSummaryImage);
    };
  }, [previewMailsUrl]);

  useEffect(() => {
    if (isInitialize) setMailSizes();
  }, [isInitialize]);

  return (
    <div className={styles.root}>
      <div className={styles.modelInfo}>
        {mailWidth}
        {' '}
        x&nbsp;
        {mailHeight}
        {' '}
        x&nbsp;
        {mailDepth}
        {' '}
        mm
        <div className={styles.label}>
          Größe
        </div>
      </div>
      {!isLoadingPreview && <img
        className={`${styles.preview} ${imageClass}`}
        src={previewMailsUrl}
      />}
    </div>
  );
});

export default Preview;

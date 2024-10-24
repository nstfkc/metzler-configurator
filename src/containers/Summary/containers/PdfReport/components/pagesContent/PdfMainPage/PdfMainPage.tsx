import { observer } from 'mobx-react-lite';
import { Text, View, Image, Link } from '@react-pdf/renderer';
import styles from './PdfMainPageStyles';
import { useEditorStore } from '../../../../../../../hooks/store/useEditorStore';
import { QR_CODE_ID } from '../../../constants';
import { FC } from 'react';

export interface PdfMainPageProps {
  screenshotData: string;
}

const PdfMainPage: FC<PdfMainPageProps> = observer((props) => {
  const { screenshotData } = props;
  const { configUrl } = useEditorStore();
  const element = document.getElementById(QR_CODE_ID) as HTMLCanvasElement;
  const dataUrl = element.toDataURL();

  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with zero if needed
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-indexed) and pad
  const year = date.getFullYear(); // Get full year

  const formattedDate = `${day}.${month}.${year}`; // Combine into desired format

  return (
    <View style={styles.mainPage}>
      <View style={styles.mainPageHeader}>
        <View style={styles.qrCode}>
          <View style={styles.qrCodeImageWrapper}>
            <Image
              src={dataUrl}
              style={styles.qrCodeImage}
            />
          </View>
          <View style={styles.qrCodeInfo}>
            <Text>{`Datum: ${formattedDate}`}</Text>
            <View style={styles.qrCodeLink}>
              <Text>Link:</Text>
              <Link
                src={configUrl}
                style={styles.qrCodeLinkValue}
              >
                Jetzt öffnen
              </Link>
            </View>
          </View>
        </View>
        {/* <View style={styles.product-price}>
          <Text>Gesamt</Text>
          <Text style={styles.priceValue}>1429,99 €</Text>
          <Text>Inkl. 19% MwSt.</Text>
        </View> */}
      </View>
      <View style={styles.mailboxesWrap}>
        <Image
          src={screenshotData}
          style={styles.mailboxesImage}
        />
      </View>
    </View>
  );
});

export default PdfMainPage;

import { View, Image } from "@react-pdf/renderer";
import styles from "./PdfHeaderStyles";

const PdfFooter = () => {
  return (
    <View fixed style={styles.header}>
      <Image src="/konfigurator/images/pdf-logo.png" />
    </View>
  );
};

export default PdfFooter;

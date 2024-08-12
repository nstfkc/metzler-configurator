import { observer } from "mobx-react-lite";
import { View, Text } from "@react-pdf/renderer";
import styles from "./PdfTableStyles";
import usePanelsStore, {
  useMontagePanelStore,
  useZusatzmodulPanelStore,
  useZusatzmodulErweiterunPanelStore,
  useKlingeltableuPanelStore,
  useLichttasterPanelState,
  useInnestationPanelStore,
  useRFIDPanelStore,
  useBriefkastenPanelStore,
  useTextleistePanelStore,
} from "hooks/store/usePanelsStore";
import { useContext } from "react";
import { Product, ProductsContext } from "context/ProductsContext";
import { calculateProducts } from "helpers/calculateProducts";
import { calculatePrice, formatPrice } from "helpers/calculatePrice";

const PdfFooter = observer(({ products }: { products: Product[] }) => {
  const { getAllStates } = usePanelsStore();

  const rawProducts = calculateProducts(getAllStates());

  const totalPrice = rawProducts.reduce(
    (acc, { configuratorId, amount }) => {
      const product = products.find(
        (product) => product.configuratorId === configuratorId
      );
      if (!product) return acc;
      let [euros, cents] = product.price.split(",");
      let _cents = acc.cents + Number(cents) * amount;
      let _euros = 0;
      while (_cents >= 100) {
        _cents -= 100;
        _euros++;
      }
      return {
        euros: _euros + acc.euros + Number(euros) * amount,
        cents: _cents,
      };
    },
    {
      euros: 0,
      cents: 0,
    }
  );

  const { euros, cents } = totalPrice;

  const priceString = `${euros.toLocaleString("de")},${cents
    .toString()
    .padStart(2, "0")}`;

  const tableData = rawProducts
    .map((product) => {
      const p = products.find(
        (item) => item.configuratorId === product.configuratorId
      );
      if (!p) return;
      return {
        moduleName: p.title,
        dimension: p.dimensions,
        artikelnummer: p.articleNumber,
        amount: product.amount,
        stuckpreis: formatPrice(calculatePrice(p.price, 1)),
        gesamtpreis: formatPrice(calculatePrice(p.price, product.amount)),
      };
    })
    .filter(Boolean);

  return (
    <View>
      <Text style={styles.mainTitle}>Zusammenfassung</Text>

      <View style={styles.table}>
        <View wrap={false} style={[styles.row, styles.darkRow]}>
          <Text style={[styles.headCell, styles.dimensionCell]}>
            Dimension (WxHxD, mm)
          </Text>
          <Text style={[styles.headCell, styles.artikelnummerCell]}>
            Artikelnummer
          </Text>
          <Text style={[styles.headCell, styles.stuckpreisCell]}>
            Stückpreis (€)
          </Text>
          <Text style={[styles.headCell, styles.anzahlCell]}>Anzahl</Text>
          <Text style={[styles.headCell, styles.gesamtpreisCell]}>
            Gesamtpreis (€)
          </Text>
        </View>

        {tableData.filter(Boolean).map((item, index) => {
          if (!item) return null;
          return (
            <View
              key={item.moduleName}
              wrap={false}
              style={[styles.bodyRow, index % 2 !== 0 ? styles.darkRow : {}]}
            >
              <Text style={styles.moduleName}>{item.moduleName}</Text>
              <View style={styles.moduleData}>
                <Text style={[styles.bodyCell, styles.dimensionCell]}>
                  {item.dimension}
                </Text>
                <Text style={[styles.bodyCell, styles.artikelnummerCell]}>
                  {item?.artikelnummer}
                </Text>
                <Text style={[styles.bodyCell, styles.stuckpreisCell]}>
                  {item.stuckpreis}
                </Text>
                <Text style={[styles.bodyCell, styles.anzahlCell]}>
                  {item.amount}
                </Text>
                <Text style={[styles.bodyPriceCell, styles.gesamtpreisCell]}>
                  {item.gesamtpreis}
                </Text>
              </View>
            </View>
          );
        })}
          <View
              key={2323}
              wrap={false}
              style={styles.darkRow}
            >
              <Text style={styles.moduleName}></Text>
              <View style={styles.moduleData}>
                <Text style={[styles.bodyCell, styles.dimensionCell]}>
                </Text>
                <Text style={[styles.bodyCell, styles.artikelnummerCell]}>
                </Text>
                <Text style={[styles.bodyCell, styles.stuckpreisCell]}>
                </Text>
                <Text style={[styles.bodyCell, styles.anzahlCell]}>
                  Gesamt
                </Text>
                <Text style={[styles.bodyPriceCell, styles.gesamtpreisCell]}>
                  {priceString}
                </Text>
              </View>
            </View>
      </View>
    </View>
  );
});

export default PdfFooter;

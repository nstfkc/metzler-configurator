import styles from "./FooterControls.module.scss";
import ConfirmConfiguration from "../../components/ConfirmConfiguration/ConfirmConfiguration";
import { useCallback } from "react";
import { observer } from "mobx-react-lite";
import usePanelsStore from "../../../../hooks/store/usePanelsStore";
import { useAppSnackbar } from "../../../../hooks/useAppSnackbar";
import ModelControls from "../ModelControls/ModelControls";
import { useUndoRedoStore } from "../../../../hooks/store/useUndoRedoStore";
import { useRouter } from "next/router";

const montage = {
  "Freistehend mit Standfuß zum Einbetonieren": {
    url: "Erweiterung-des-StandfuAYes-zum-Einbetonieren",
    id: 22,
  },
  "Freistehend mit Standfuß zum Anschrauben": {
    url: "StandfuAY-zum-Anschrauben",
    id: 21,
  },
};

const briefkasten = {
  "Einsteckschild mit Papiereinleger": {
    url: "Briefkasten-BK212-mit-austauschbarem-Namensschild",
    id: 2,
  },
  "Namensschild mit Gravur": {
    url: "Briefkasten-BK212-mit-graviertem-Namensschild",
    id: 3,
  },
};

const blindModule = {
  url: "Briefkasten-BK212-Blindmodul",
  id: 10,
};

const FooterControls = observer(() => {
  const {
    orderPanelsConfig,
    configId,
    setIsOrderConfig,
    getState,
    activePanelId,
    getAllStates,
  } = usePanelsStore();

  const { enqueueErrorSnackbar } = useAppSnackbar({
    defaultErrorMessage: "",
  });

  const router = useRouter();

  const { cleanUndoRedo } = useUndoRedoStore();

  const confirmConfigurationHandler = useCallback(() => {
    /* orderPanelsConfig(configId)
     *   .then(() => {
     *     setIsOrderConfig(true);
     *     cleanUndoRedo();
     *     alert("Order placed");
     *   })
     *   .catch((error) => {
     *     enqueueErrorSnackbar(error.message);
     *   }); */
  }, [configId]);

  return (
    <div className={styles.root}>
      <div className={styles.modelControls}>
        <ModelControls />
      </div>
      <ConfirmConfiguration
        onConfirm={async () => {
          const states = getAllStates();
          console.log(states);
          const montageProduct = montage[states.montage.montageType];
          const briefcaseAmount = states.montage["mailBoxesCount"];
          const rowAmount = states.zusatzmodule["mailBoxesRanksCount"];
          const blindModuleAmount = briefcaseAmount % rowAmount;
          const briefkastenType = states.briefkasten.briefkasteType;

          let products = [];

          if (montageProduct) {
            products.push({
              url: montageProduct.url,
              amount: 1,
              id: montageProduct.id,
            });
          }

          if (briefcaseAmount > 0) {
            products.push({
              url: briefkasten[briefkastenType].url,
              amount: briefcaseAmount,
              id: briefkasten[briefkastenType].id,
            });
          }

          if (blindModuleAmount > 0) {
            products.push({
              url: blindModule.url,
              amount: blindModuleAmount,
              id: blindModule.id,
            });
          }

          console.log(products);

          function getFormData(id: number, amount: number = 1) {
            const formData = new FormData();
            formData.append("jtl_token", String(router.query["jtl-token"]));
            formData.append("wlPos", "0");
            formData.append("inWarenkorb", "1");
            formData.append("a", id.toString());
            formData.append("wke", "1");
            formData.append("show", "1");
            formData.append("kKundengruppe", "1");
            formData.append("kSprache", "1");
            formData.append("anzahl", amount.toString());
            formData.append("inWarenkorb", "In den Warenkorb");
            return formData;
          }

          const fetches = products.map((product) => {
            const formData = getFormData(product.id, product.amount);
            return fetch(`http://wm-dev.de/${product.url}`, {
              method: "POST",
              body: formData,
            }).then((res) => res.ok);
          });

          const result = await Promise.all(fetches);

          setTimeout(() => {
            window.location.href = `http://wm-dev.de/Warenkorb`;
          }, 2000);
          console.log(result);
        }}
      />
    </div>
  );
});

export default FooterControls;

//Import feather icons
const feather = require("feather-icons");

//Alpine JS and plugins import
import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import Fern from "@ryangjchandler/fern";
import AlpineI18n from "alpinejs-i18n";
window.Alpine = Alpine;
//Init intersect plugin
Alpine.plugin(intersect);
//Init Fern plugin
Alpine.plugin(Fern);
//I18N
Alpine.plugin(AlpineI18n);
//Init Fern persisted store
Alpine.persistedStore("app", {
  isLoggedIn: false,
});

//Start Alpine JS
Alpine.start();
//Import Listkit JS
import { env } from "./libs/utils/constants";
import "./libs/components";
import "./libs/forms";
import "./libs/sections";
import "./libs/custom";
import { initPageLoader } from "./libs/components/pageloader/pageloader";
import { initLazyLoading } from "./libs/utils/lazyload";

import {
  switchDemoImages,
  insertBgImages,
  insertHrefs,
  insertPosters,
  initModals,
  initVideoPlayers,
  initMaskPhone,
  initLocale,
} from "./libs/utils/utils";
import { initQuery } from "./libs/custom/initQery";
//Init pageloader
const showPageloader = initPageLoader();
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    //Switch demo images
    const changeImages = switchDemoImages(env);
    //Lazy Loading
    const lazy = initLazyLoading();
    //Switch backgrounds
    const changeBackgrounds = insertBgImages(env);
    const changeHrefs = insertHrefs(env);
    const changePosters = insertPosters(env);
    //Feather Icons
    const featherIcons = feather.replace();

    //Modals
    const modals = initModals();
    //Video Players
    const players = initVideoPlayers(env);
    const mask = initMaskPhone();
    const query = initQuery();
    const locale = initLocale();
  }
};

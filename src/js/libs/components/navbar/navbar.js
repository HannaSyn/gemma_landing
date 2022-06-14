import {
  searchStartDatepicker,
  searchEndDatepicker,
} from "../../forms/datepicker";

export function initNavbar() {
  return {
    scrolled: false,
    height: 60,
    mobileOpen: false,
    scroll() {
      let scrollValue = window.scrollY;
      if (scrollValue >= this.height) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
      this.searchExpanded = false;
    },

    searchExpanded: false,
    expandSearch() {
      this.searchExpanded = true;
    },

    foldSearch() {
      this.searchExpanded = false;
    },

    searchActive: false,
    disableSearch() {
      this.searchActive = false;
    },

    locationDropOpened: false,
    startDatepicker: searchStartDatepicker,
    endDatepicker: searchEndDatepicker,
    startDateDropOpened: false,
    endDateDropOpened: false,
    typeDropOpened: false,
    accountDropOpened: false,

    openDrop(param) {
      switch (param) {
        case "location-drop":
          this.locationDropOpened = true;
          this.searchActive = true;
          break;
        case "start-date-drop":
          this.searchActive = true;
          this.startDateDropOpened = true;
          break;
        case "end-date-drop":
          this.searchActive = true;
          this.endDateDropOpened = true;
          break;
        case "type-drop":
          this.typeDropOpened = true;
          this.searchActive = true;
          break;
        case "account-drop":
          this.accountDropOpened = true;
          break;

        default:
          console.log(`Sorry, something went wrong.`);
      }
    },

    closeDrop(param) {
      switch (param) {
        case "location-drop":
          this.locationDropOpened = false;
          break;
        case "start-date-drop":
          this.startDateDropOpened = false;
          break;
        case "end-date-drop":
          this.endDateDropOpened = false;
          break;
        case "type-drop":
          this.typeDropOpened = false;
          break;
        case "account-drop":
          this.accountDropOpened = false;
          break;

        default:
          console.log(`Sorry, something went wrong.`);
      }
    },

    megamenuOpened: false,
    openedMegamenu: "megamenu-1",

    logout() {
      this.$store.app.isLoggedIn = false;
      window.location.href = "/";
    },
  };
}

export function initNavbarLight() {
  return {
    scrolled: false,
    height: 60,
    mobileOpen: false,
    scroll() {
      let scrollValue = window.scrollY;
      if (scrollValue >= this.height) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
    accountDropOpened: false,

    openDrop(param) {
      switch (param) {
        case "account-drop":
          this.accountDropOpened = true;
          break;

        default:
          console.log(`Sorry, something went wrong.`);
      }
    },

    closeDrop(param) {
      switch (param) {
        case "account-drop":
          this.accountDropOpened = false;
          break;

        default:
          console.log(`Sorry, something went wrong.`);
      }
    },

    megamenuOpened: false,
    openedMegamenu: "megamenu-1",

    logout() {
      this.$store.app.isLoggedIn = false;
      window.location.href = "/";
    },
  };
}

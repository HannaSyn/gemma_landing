import {
  initMoreListingsGlide,
  initUpcomingListingsGlide,
  initBestRatedListingsGlide,
  initListingCategoriesGlide,
  initSuggestedListingsGlide,
  initFlatCarouselsGlide,
} from "../../components/glider/glider";

export function initMoreListings() {
  return {
    moreGlides: initMoreListingsGlide(),
  };
}

export function initUpcomingListings() {
  return {
    upcomingEvents: initUpcomingListingsGlide(),
  };
}

export function initBestRatedListings() {
  return {
    bestRatedEvents: initBestRatedListingsGlide(),
  };
}

export function initListingCategories() {
  return {
    eventCategories: initListingCategoriesGlide(),
  };
}

export function initSuggestedListings() {
  return {
    suggestedEvents: initSuggestedListingsGlide(),
  };
}

export function initFlatCarousels() {
  return {
    flatCarousels: initFlatCarouselsGlide(),
  };
}

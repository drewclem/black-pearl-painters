export const state = () => ({
  loaded: false,
  isMobileMenuOpen: false,
  pageHasModalOpen: false,
  headerNavigation: [],
  headerLogo: null,
  footerNavigation: [],
  footerLogo: null,
});

export const mutations = {
  isMobileMenuOpen(state, isMenuOpen) {
    state.isMobileMenuOpen = isMenuOpen;
  },
  isModalOpen(state, isModalOpen) {
    state.pageHasModalOpen = isModalOpen;
  },
  isLoaded(state, isLoaded) {
    state.loaded = isLoaded;
  },
  setGlobals(state, globals) {
    state.headerNavigation = globals.headerNavigation[0]?.menuItems ?? [];
    state.headerLogo = globals.headerLogo;

    state.footerNavigation = globals.footerNavigation[0]?.menuItems ?? [];
    state.footerLogo = globals.footerLogo;
  },
  setLoaded(state, loaded) {
    state.loaded = loaded;
  },
};

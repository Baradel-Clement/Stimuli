export const pageview = () => {
  window.analytics && window.analytics.page();
}

export const event = (name, options = {}) => {
  window.analytics && window.analytics.track(name, options);
}

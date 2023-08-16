export default {
  computed: {
    hostURL() {
      return window.mondaychatConfig.hostURL;
    },
    vapidPublicKey() {
      return window.mondaychatConfig.vapidPublicKey;
    },
    enabledLanguages() {
      return window.mondaychatConfig.enabledLanguages;
    },
    isEnterprise() {
      return window.mondaychatConfig.isEnterprise === 'true';
    },
  },
};

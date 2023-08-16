export default {
  methods: {
    useInstallationName(str = '', installationName) {
      return str.replace(/Mondaychat/g, installationName);
    },
  },
};

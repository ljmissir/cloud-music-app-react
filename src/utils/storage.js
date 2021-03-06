export default {
  set: function (key, val) {
    return sessionStorage.setItem(key, JSON.stringify(val));
  },
  get: function (key) {
    const res = JSON.parse(sessionStorage.getItem(key));
    return res;
  },
  clearItem: function (key) {
    sessionStorage.clearItem(key);
  },
  clearAll: function () {
    sessionStorage.clear();
  },
};

export const getUrlParams = (search) => {
  let match = (search && search.match(/([^?=&]+)=([^?&]+)/g)) || [];
  return (
    match &&
    match.reduce(function (a, b) {
      let val = b.split(/([^?=&]+)=([^?&]+)/g);
      a[val[1]] = val[2];
      return a;
    }, {})
  );
};

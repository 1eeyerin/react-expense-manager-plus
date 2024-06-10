const regExp = /\B(?=(\d{3})+(?!\d))/g;

export const numberWithCommas = (num, currency = '') => {
  const intNum = parseInt(num, 10);

  if (Number.isNaN(intNum)) return '';
  if (!intNum) return `0${currency}`;

  const commas = intNum.toString().replace(regExp, ',');
  return commas + currency;
};

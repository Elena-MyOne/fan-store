export const hideDateFromString = (str: string, symbols: number) => {
  const number = Number(`-${symbols}`);
  const stars = new Array(str.length - symbols).fill('*').join('');
  return stars + str.split('').slice(number).join('');
};

export const range = (list, range) => {
  const securedList = list || [];
  if(range === 0) return securedList;
  if(range === 1) return securedList.filter(item => item.price.price_in_cents < 50000);
  if(range === 2) return securedList.filter(item => item.price.price_in_cents >= 50000 && item.price.price_in_cents <= 150000);;
  if(range === 3) return securedList.filter(item => item.price.price_in_cents > 150000);
}
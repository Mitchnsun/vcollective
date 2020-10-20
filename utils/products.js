/**
 * 
 * @param {number} range 
 * range = 0: no range selected, return the whole list
 * range = 1: Price under 500€
 * range = 2: Price between 500€ and 1500€ included
 * range = 3: Price over 1500€
 */
export const range = (list, range) => {
  const securedList = list || [];
  if(!range) return securedList;
  if(range === 1) return securedList.filter(item => item.price.price_in_cents < 50000);
  if(range === 2) return securedList.filter(item => item.price.price_in_cents >= 50000 && item.price.price_in_cents <= 150000);;
  if(range === 3) return securedList.filter(item => item.price.price_in_cents > 150000);
}

export const shipIn = (list, country) => {
  const securedList = list || [];
  if(!country) return securedList;
  return securedList.filter(item => item.shippable_countries.indexOf(country) != -1);
}
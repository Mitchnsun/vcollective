const BRAND_TO_OBFUSC = ['Louis Vuitton'];
export const brand = (brand) => BRAND_TO_OBFUSC.indexOf(brand) != -1 ? brand.split("").reverse().join("") : brand;
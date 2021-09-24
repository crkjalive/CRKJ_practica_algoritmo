const hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

const random=() => {
  let dato = Math.floor(Math.random() * hex.length);
  return dato;
}

export const color = () => {
  let code = `#${hex[random('r')]}${hex[random('a')]}${hex[random('m')]}${hex[random('d')]}${hex[random('o')]}${hex[random('m')]}`;
  return (code)
}

export const random_color = (array) => {
  array.forEach((arr) => {
    arr.style.backgroundColor = color();
  });
}

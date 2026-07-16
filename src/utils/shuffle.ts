// Implementation of the Fisher-Yates shuffle
// Shamelessly stolen from https://bost.ocks.org/mike/shuffle/
export const shuffle = <T>(array: T[]): T[] => {
  let m = array.length;
  let t;
  let i;

  // While there remain elements to shuffle...
  while (m) {
    // ...pick a remaining element...
    i = Math.floor(Math.random() * m--);

    // ...and swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

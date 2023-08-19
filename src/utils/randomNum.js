const genRandNum = (bookArr) => {
  const randos = [];

  while (randos.length < bookArr.length) {
    const rdm = (Math.random() * 100).toFixed();

    if (!randos.includes(rdm)) {
      randos.push(rdm);
    }
  }

  return randos;
};

export default genRandNum;

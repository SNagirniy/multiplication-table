const randomNumber = () => Math.ceil(Math.random() * 10);

const multiplicator = (a, b) => {
  const x = a ? a : randomNumber();
  const y = b ? b : randomNumber();
  const product = x * y;
  return { x, y, product };
};

const shuffle = num => {
  const { x, y, product } = multiplicator(num);
  const answerOptions = [product];

  while (answerOptions.length < 4) {
    const random_answ = multiplicator().product;
    answerOptions.every(i => i !== random_answ) &&
      answerOptions.push(random_answ);
  }
  answerOptions.sort(() => Math.random() - 0.5);
  return {
    x,
    y,
    product,
    answer_options: [...answerOptions],
  };
};

export { shuffle };

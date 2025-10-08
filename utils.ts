export const capitalizeWord = (word: string) => {
  if (word.length === 0) return emptyStringError;
  return word[0].toUpperCase() + word.slice(1);
};

export const emptyStringError = "Input string must have a length of at least 1";

import { alphabetRegex, catKeywordRegex } from "./regex";

export const validateInput = (input: string): string | null => {
  if (!input.trim()) {
    return "Please enter a description";
  }

  if (!alphabetRegex.test(input)) {
    return "Please use only english language!";
  }

  if (!catKeywordRegex.test(input)) {
    return 'If you are here for a cat meme, please use the word "cat" or "kitten"';
  }

  return null;
};

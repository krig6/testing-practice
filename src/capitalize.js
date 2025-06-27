import { validateInput } from './utils/validateInput';

export const capitalize = (str) => {
  validateInput('capitalize', str, 'string');

  const firstChar = str.charAt(0);
  return !/[a-zA-Z]/.test(firstChar)
    ? str
    : firstChar.toUpperCase() + str.slice(1);
};

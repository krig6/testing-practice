import { validateInput } from './utils/validateInput';

export const reverseString = (str) => {
  validateInput('reverseString', str, 'string');

  return str.split('').reverse().join('');
};

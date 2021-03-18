import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countVowels = stringToArray(str).reduce((count, letter) => count + 'aeiouAEIOU'.includes(letter), 0);

/* Question 2 */
export const runLengthEncoding = undefined;

/* Question 3 */
export const isPaired = undefined;


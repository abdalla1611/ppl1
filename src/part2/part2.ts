import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countVowels = (str : string): number => stringToArray(str).filter(chstr=>"aieouAIEOU".includes(chstr)==true).reduce((acc,curr)=>acc+1,0);

/* Question 2 */
export const runLengthEncoding = abdalla;

/* Question 3 */
export const isPaired = undefined;

import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countVowels = (str : string): number => stringToArray(str).filter(chstr=>"aieouAIEOU".includes(chstr)==true).reduce((acc,curr)=>acc+1,0);

/* Question 2 */
export const runLengthEncoding = (str : string) =>{
    const arr =stringToArray(str);
    const output =arr.reduce(function(acc :[string,string,number] ,curr,index :number){

        if(arr[index]==arr[index+1]){
            acc[2]=acc[2]+1;
            return acc;
        }
        else{
            if(acc[2]==1){
                acc[0]= `${acc[0]}${acc[1]}`;
            }
            else {
                acc[0]= `${acc[0]}${acc[1]}${acc[2]}`;
                acc[1]= arr[index+1];
                acc[2]=1 ;
            }
            return acc ;
        }
        
    },["",arr[0],1])

    return output[0] ;
}

console.log(countVowels("aaaabbaa"));
console.log(runLengthEncoding("aaabbaa"));

/* Question 3 */
export const isPaired = undefined ;
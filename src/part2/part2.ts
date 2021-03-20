import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countVowels = (str : string): number => stringToArray(str).filter(chstr=>"aieouAIEOU".includes(chstr)==true).reduce((acc,curr)=>acc+1,0);

/* Question 2 */
export const runLengthEncoding = (str : string) =>{
    const arr =stringToArray(str);
    const output =arr.reduce(function(acc :[string,number] ,curr,index :number){

        if(arr[index]==arr[index+1]){
            acc[1]=acc[1]+1;
            
        }
        else{
            if(acc[1]==1){
                acc[0]= `${acc[0]}${arr[index]}`;
            }
            else {
                acc[0]= `${acc[0]}${arr[index]}${acc[1]}`;
                acc[1]=1 ;
            }
            
        }
        return acc;
        
    },["",1])

    return output[0] ;
}

console.log(runLengthEncoding("aaabbaa"));

/* Question 3 */
export const isPaired = undefined ;
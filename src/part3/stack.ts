import { State, bind } from "./state";

export type Stack = number[];

export const push = (x:number): State<Stack,undefined>=>{
    return st=>{
        const arr = [x].concat(st);
        return [arr,undefined];
}
}
;

export const pop = (st:Stack):[number[],number]=>{
    const _returnedvalue = st[0];
    const _newStack= st.reduce(function(acc:number[],curr:number,index:number){
        if(index!=0){
        acc=acc.concat(curr);
        }
        return acc;
    },[]);
    return [_newStack,_returnedvalue];
}

export const stackManip = (st:Stack) : [number[] ,undefined]=>{

    //    const stackOp = bind(pop,function(x){
    //    const stPush1= push(x*x);
    //    const stPop1 = bind(stPush1,t=>pop); 
    //    const currVal =stPop1(st);
    //   console.log(currVal);
    //   const stPush2 =push(x+currVal[1]);
    //   const outPut =stPush2(currVal[0]);
    //    console.log(outPut);
    //    return pop;
        //return outPut;
        const newq=bind(pop,function(x){
            const enQstate =push(x+x*x);
            //const newQ2=bind(enQstate,t=>push(x*x+x));
           return enQstate;
        });

        return newq(st);
};

console.log(stackManip([4, 5, 6]));
//1. Pops a number x
//2. Pushes x * x
//3. Pops a number y
//4. Pushes x + y
import { State, bind } from "./state";

export type Queue = number[];

export const enqueue =(x:number): State<Queue,undefined>=>{
    return queue=>{
        const arr = queue.concat(x);
        return [arr,undefined];
}
}

export const dequeue = (queue:Queue):[number[],number]=>{
    const _returnedvalue = queue[0];
    const _newQueue= queue.reduce(function(acc:number[],curr:number,index:number){
        if(index!=0){
        acc=acc.concat(curr);
        }
        return acc;
    },[]);
    return [_newQueue,_returnedvalue]
};

export const queueManip = (queue:Queue) : [number[] ,number]=>{

    const newq=bind(dequeue,function(x){
        const enQstate =enqueue(x*2);
        const newQ2=bind(enQstate,t=>enqueue(x/3));
       return newQ2;
    });
    const outPut = newq(queue);
    return dequeue(outPut[0])  ;
};
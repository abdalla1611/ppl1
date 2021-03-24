export type State<S, A> = (initialState: S) => [S, A];

export const bind =<S, A, B>(state: State<S, A>, f: (x: A) => State<S, B>): State<S, B>=>{

        return s=>{
        const [S,A]= state(s) // [S,A]
        const g = f(A) // state <S,B> == "SAD "
        return g(S);
        }
};
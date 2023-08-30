
type InitialState = {
  numPage: number;
};

type Action={
  type:string;
}

const initialState: InitialState = {
  numPage: 1,
};

export default function rootReducer(state = initialState, action:Action){
  switch(action.type){
    case 'RESET_PAGE':
            
            return {
                ...state,
                numPage: 1,
            };
        case 'PREV':
            return {
                ...state,
                numPage: state.numPage - 1,
            };
        case 'NEXT':
            return {
                ...state,
                numPage: state.numPage + 1,
            };
        default:
            return {...state};
  }
}
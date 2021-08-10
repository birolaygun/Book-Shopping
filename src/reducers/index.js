import { data } from '../data'
import { data2 } from '../data2'

const INITIAL_STATE = { data, data2 }

export const reducer = (state= INITIAL_STATE , action) => {

    switch (action.type) {
      case "SEPETE_EKLE":
        return {
          ...state,

          data2: state.data2.find(
            (cardItem) => cardItem.id === action.payload.id
          )
            ? state.data2.map((cardItem) =>
                cardItem.id === action.payload.id
                  ? { ...cardItem, count: cardItem.count + 1 }
                  : cardItem
              )
            : [...state.data2, { ...action.payload, count: 1 }],
        };

      case "SEPETTE_EKSİLT":
        if (action.payload.count > 1) {
          return {
            ...state,

            data2: state.data2.map((cardItem) =>
              cardItem.id === action.payload.id
                ? { ...cardItem, count: cardItem.count - 1 }
                : cardItem
            ),
          };
        } else {
          return {
            ...state,

            data2: state.data2.filter(
              (cardItem) => cardItem.id !== action.payload.id
            ),
          };
        }

      case "SEPETTEN_CIKAR":
          return {
            ...state,

            data2: state.data2.filter(
              (cardItem) => cardItem.id !== action.payload.id
            ),
          };
        

      default:
        return state;
    }

}


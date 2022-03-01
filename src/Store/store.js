import { configure } from "@testing-library/react";
import categoryReducer from '../Store/categorySlice';


export const store = configure({
  reducer: {
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
})

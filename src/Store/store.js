import { configure } from "@testing-library/react";
import categorySlice from "./categorySlice.js"


export const store = configure({
  reducer: {
    category: categorySlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
})

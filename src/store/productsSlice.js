import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading'
});

const initialState = {
  data: [],
  status: STATUS.IDLE
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.IDLE;
      }) // Correctly close the fulfilled case
      .addCase(fetchProducts.rejected, (state) => {
        state.status = STATUS.ERROR;
      });
  }
});


export const { setProducts, setStatus } = productsSlice.actions;
export default productsSlice.reducer;

//Thunks
export const fetchProducts= createAsyncThunk('products/fetch',async()=>{
          const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      return data

})

// export function fetchProducts() {
//   return async function fetchProductsThunk(dispatch) {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const res = await fetch('https://fakestoreapi.com/products');
//       const data = await res.json();
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUS.IDLE));
//     } catch (err) {
//       console.error(err);
//       dispatch(setStatus(STATUS.ERROR));
//     }
//   }
// }

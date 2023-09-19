import { createSlice } from "@reduxjs/toolkit";
// Needed To Renmae
const RecordDataSlice = createSlice({
  name: "RecordData",
  initialState: [],
  reducers: {
    setRecordData: (state, action) => {
      return action.payload;
      // state.recordData = action.payload;
    },
  },
});

// Moust Popular Slice
// const MoustPopularSlice = createSlice({
//   name: "MoustPopularSlice",
//   initialState: {},
//   reducers: {
//     SetMoustPopularSlice: (state, action) => {
//       state.recordData = action.payload;
//     },
//   },
// });
// export const { SetMoustPopularSlice } = MoustPopularSlice.actions;
export const { setRecordData } = RecordDataSlice.actions;
export default RecordDataSlice.reducer;

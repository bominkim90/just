import { createSlice } from "@reduxjs/toolkit";

const initState = {
    cnt: 0
}
const cntSlice = createSlice({
    name: '메 인슬라이드 카운터',
    initialState: initState,
    reducers: {
        setCnt: (state, action)=>{
            // cnt 가 2보다 크면 0으로 설정 그렇지 않으면 1씩 증가
            console.log( "action.payload = " , action.payload)
            state.cnt = state.cnt>=action.payload ? 0 : state.cnt + 1;
        }
    }
});

export default cntSlice.reducer;
export const {setCnt} = cntSlice.actions;
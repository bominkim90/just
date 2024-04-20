import { createSlice } from "@reduxjs/toolkit";

const initState = {
    title: '',
    show: false

}
const popupSlice = createSlice({
    name:'popup',
    initialState: initState,    
    reducers:{
        popupAction: (state, action)=>{  // popup창 열기/닫기 액션
            state.show = action.payload.show;  // 페일로드 => 전달값 true, false
            state.title = action.payload.title
        }
    }
});

export default popupSlice.reducer;
export const {popupAction} = popupSlice.actions;

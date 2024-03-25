import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JobState {
  opportunities: Opportunity[];
  selectedOpportunity: Opportunity | null;
}

const initialState: JobState = {
  opportunities: [],
  selectedOpportunity: null,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setOpportunities(state, action: PayloadAction<Opportunity[]>) {
      state.opportunities = action.payload;
    },
    setSelectedOpportunity(state, action: PayloadAction<Opportunity>) {
      state.selectedOpportunity = action.payload;
    },
  },
});

export const { setOpportunities, setSelectedOpportunity } = jobSlice.actions;

export default jobSlice.reducer;

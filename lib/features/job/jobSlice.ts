import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for your entire Redux state
interface RootState {
  jobs: JobState; // Assuming 'jobs' is the slice name
}

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

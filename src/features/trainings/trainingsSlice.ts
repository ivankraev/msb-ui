import { useAppDispatch } from '@msp/redux/hooks'
import { bindActionCreators, PayloadAction } from '@reduxjs/toolkit'
import { Video } from '@msp/shared/interfaces/training.interface'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import MOCK_DATA from '@msp/mocks/trainings.json'

export interface TrainingsSliceState {
  productName: string
  videos: Video[]
}
export const initialState: TrainingsSliceState = {
  productName: MOCK_DATA.data[0].productName,
  videos: MOCK_DATA.data[0].videos,
}

export const getVideos = createAsyncThunk('trainings/getVideos', async (productName: string) => {
  return MOCK_DATA.data.find((product) => product.productName === productName)?.videos
})

const trainingsSlice = createSlice({
  name: 'trainings',
  initialState,
  reducers: {
    changeProduct: (state, action: PayloadAction<string>): TrainingsSliceState => {
      return { ...state, productName: action.payload }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVideos.fulfilled, (state, action) => {
      state.videos = action.payload || []
      return state
    })
  },
})

export default trainingsSlice.reducer
const actions = trainingsSlice.actions

export const trainingsActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}

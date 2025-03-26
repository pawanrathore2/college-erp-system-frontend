import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import studentApi from '../api/studentApi'
export const fetchStudents = createAsyncThunk("fetchstudents",
    studentApi.getAllStudents
)
export const saveStudent = createAsyncThunk("saveStudent",
    studentApi.createStudent
)
const studentSlice = createSlice({
    name: "student",
    initialState: {
        students: [],
        selectedStudent: null,
        status: "idle",
        message: ""
    },
    reducers: {
        selecteStudent: (state, action) => {
            state.selectedStudent = action.payload
            return state
        }
    },
    extraReducers: (builder) => {
        // fetch student cases
        builder
            .addCase(fetchStudents.pending, (state => {
                state.status = "pending"
                return state
            }))
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.status = "success"
                state.students = action.payload
                return state
            })
            .addCase(fetchStudents.rejected, (state) => {
                state.status = "failed"
                return state
            })
        // save student cases
        builder
            .addCase(saveStudent.pending, (state) => {
                state.status = "pending"
                return state
            })
            .addCase(saveStudent.fulfilled, (state, action) => {
                state.status = "success"
                state.message = "Registration Success"
                state.students.push(action.payload)
                return state
            })
            .addCase(saveStudent.rejected, (state, action) => {
                state.status = "failed"
                console.log("payload",action.payload)
                state.message = action.payload.message
                return state
            })
            
    }
})
export const { selecteStudent } = studentSlice.actions
export default studentSlice.reducer
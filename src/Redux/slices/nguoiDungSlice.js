import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { lauDuLieuLocal } from "../../Utils/localStore";
import { userServ } from "../../Services/userServices";

// nơi tạo các createAsyncThunk để xử lí các bất đồng bộ trước khi bắn dữ liệu lên store bằng redux-thunk
// bên trong createAsyncThunk sẽ có 2 tham số, một là type của hàm, thứ hai sẽ là hàm cần xử lí bất đồng bộ

export const getAllUser = createAsyncThunk("nguoiDung/getAllUser", async () => {
  const res = await userServ.getAllUser();
  // sẽ return về giá trị muốn store lưu trữ
  return res.data.content;
});

//Lần đầu tiên vào trang web
const initialState = {
  hoTen: lauDuLieuLocal("user"),
  users: [],
};

export const nguoiDungSlice = createSlice({
  name: "nguoiDung",
  initialState,
  reducers: {
    setDuLieuHoTen: (state, action) => {
      if (state.hoTen == null) {
        state.hoTen = action.payload;
      }
    },
  },

  //extraReducers: Giúp tách biệt các logic bất đồng bộ ra khỏi reducer vì khi xử lí bất đồng bộ có nhiều trường hợp xảy ra

  extraReducers: (builder) => {
    //Khi xử lí thì bên trong hàm sẽ có 3 phương thức tương ứng với các trường hợp chạy thành công, đang chạy, thất bại
    // pending là đang chạy , reject là thất bại , fulfilled là thành công
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      //Bên trong action thuộc tính payload sẽ chứa các giá trị được trả về từ hàm chạy createAsyncThunk
      state.users = action.payload;
      console.log(state);
      console.log(action);
    });
    builder.addCase(getAllUser.rejected, (state, action) => {
      state.users = [
        {
          hoTen: "Nguyen",
          loaiNguoiDung: "QuanTri",
        },
      ];
    });
  },
});

export const { setDuLieuHoTen } = nguoiDungSlice.actions;

export default nguoiDungSlice.reducer;

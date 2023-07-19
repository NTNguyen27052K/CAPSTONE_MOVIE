import { https } from "./config";

export const cinemaServ = {
  // lấy thông tin hệ thống rạp
  getAllHeThongRap: () => {
    return https.get("/api/QuanLyRap/LayThongTinHeThongRap");
  },
  getAllLichChieuHeThong: (maHeThong) => {
    return https.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThong}&maNhom=GP09`
    );
  },
};

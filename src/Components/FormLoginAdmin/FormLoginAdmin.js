import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { userServ } from "../../Services/userServices";
import { luuXuongLocal } from "../../Utils/localStore";
import { useNavigate } from "react-router-dom";
const FormLoginAdmin = () => {
  const navigate = useNavigate();
  // const [state, setState] = useState({
  //   taiKhoan: '',
  //   matKhau: '',
  // });
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      userServ
        .dangNhap(values)
        .then((res) => {
          // console.log(res);
          //Điều kiện để vào được trang admin, check maLoaiNguoiDung
          if (res.data.content.maLoaiNguoiDung == "QuanTri") {
            luuXuongLocal("user", res.data.content);
            navigate("/admin");
          } else {
            window.location.href = "http://localhost:3000";
          }
        })
        .catch((err) => {
          console.log(err);
          //Tường hợp mật khẩu or tài khoảng sai
          alert("Nhập sai tài khoản và mật khẩu");
          //Clear hết input trong form
          formik.resetForm({
            values: {
              taiKhoan: "Nguyen",
              matKhau: "",
            },
          });
        });
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Không được để trống trường này"),
      matKhau: Yup.string().required("Vui lòng nhập mật khẩu"),
    }),
  });
  console.log(formik.errors.taiKhoan);
  console.log(formik.touched.taiKhoan);

  return (
    <div>
      <h2 className="font-bold text-2xl">Login Admin</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Tài khoản
          </label>
          <input
            type="text"
            id="taiKhoan"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Nhập họ tên"
            //Phương thức formik.values
            value={formik.values.taiKhoan}
          />
          {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
            <p className="text-red-500">{formik.errors.taiKhoan}</p>
          ) : (
            <></>
          )}
        </div>
        <div>
          <label
            htmlFor="matKhau"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Mật khẩu
          </label>
          <input
            type="text"
            id="matKhau"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Nhập mật khẩu"
            value={formik.values.matKhau}
          />
          {formik.errors.matKhau && formik.touched.matKhau ? (
            <p className="text-red-500">{formik.errors.matKhau}</p>
          ) : (
            <></>
          )}
        </div>
        <button
          type="submit"
          className="py-1 px-3 rounded bg-green-700 text-white"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default FormLoginAdmin;

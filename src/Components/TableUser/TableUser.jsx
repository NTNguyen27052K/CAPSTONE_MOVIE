import React, { useRef } from "react";
import { Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { userServ } from "../../Services/userServices";
import { getAllUser } from "../../Redux/slices/nguoiDungSlice";

//id, họ tên, email, sdt, ma loại người dùng, action

const TableUser = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.nguoiDung);
  console.log(users, "usssser");
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      //Custom lại cái hiện thị cột
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "age",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "address",
    },
    {
      title: "SĐT",
      dataIndex: "soDT",
      key: "address",
    },
    {
      title: "Loại người dung",
      key: "tags",
      dataIndex: "maLoaiNguoiDung",
      render: (text, record, index) => {
        // console.log(text);
        // console.log(record);
        // console.log(index);
        //record chứa các phần tử trong mảng data

        // if (text == "KhachHang") {
        //   return <a>Khách hàng</a>;
        // }
        // if (text == "QuanTri") {
        //   return <a>Quản trị</a>;
        // }<Tag color="magenta">magenta</Tag>
        return (
          <Tag color={text == "QuanTri" ? "magenta" : "blue"}>
            {text == "QuanTri" ? "Quản Trị" : "Khách Hàng"}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 duration-500"
            //Sẽ sửa lại thêm một popconfirm vào để hỏi ng dùng có muốn xóa hay không và thêm thông báo khi xóa thành công cũng như thất bại
            onClick={() => {
              userServ
                .deleteUser(record.taiKhoan)
                .then((res) => {
                  alert("Xóa thành công");
                  dispatch(getAllUser());
                })
                .catch((err) => {
                  alert("Error");
                });
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
          <button className="py-2 px-4 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 duration-500">
            <i className="fa-solid fa-pen"></i>
          </button>
        </Space>
      ),
    },
  ];
  // const data = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //     tags: ["nice", "developer"],
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //     tags: ["loser"],
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //     tags: ["cool", "teacher"],
  //   },
  // ];

  let newUser = users.map((item, index) => {
    return { ...item, id: index + 1 };
  });
  return <Table columns={columns} dataSource={users.length > 0 && newUser} />;
};

export default TableUser;

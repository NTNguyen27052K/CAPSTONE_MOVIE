import { json } from "react-router-dom";

export const luuXuongLocal = (ten, data) => {
  const newData = JSON.stringify(data);
  localStorage.setItem(ten, newData);
};

export const lauDuLieuLocal = (ten) => {
  const value = localStorage.getItem(ten);
  //Khi parse xong có 2 trường hợp xảy ra, một là có dữ liệu, hai là null
  if (JSON.parse(value)) {
    return JSON.parse(value);
  } else {
    return null;
  }
};

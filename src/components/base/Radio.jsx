import React, { useState } from "react";

export default function Radio() {
  const listGender = [
    {
      id: 1,
      title: "Nam",
    },
    {
      id: 2,
      title: "Nữ",
    },
    {
      id: 3,
      title: "Khác",
    },
  ];
  const [value, setValue] = useState(1);

  const handleCheck = (id) => {
    console.log(id);
    //   cập nhật lại state để lấy value của checkbox
    setValue(id);
  };

  return (
    <div style={{ margin: 200 }}>
      {listGender.map((gender) => {
        return (
          <div key={gender.id}>
            <label>{gender.title}</label>
            <input
              type="radio"
              checked={value === gender.id}
              onChange={() => handleCheck(gender.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

import React, { useState } from "react";

export default function Checkbox() {
  const listJob = [
    {
      id: 0,
      job: "Java backend dev",
    },
    {
      id: 1,
      job: "Javascript backend dev",
    },
    {
      id: 2,
      job: "C# backend dev",
    },
    {
      id: 3,
      job: "PHP backend dev",
    },
  ];

  //mảng chứa danh sách công việc được chọn
  const [selectJob, setSelectJob] = useState([]);
  console.log("setSelectJob", setSelectJob);

  //hàm sử lý checkbox
  const handleCheck = (id) => {
    if (selectJob.includes(id)) {
      setSelectJob(selectJob.filter((item) => item !== id));
    } else {
      setSelectJob([...selectJob, id]);
    }
  };
  return (
    <div>
      {listJob.map((j) => (
        <>
          <div>
            <input
              type="checkbox"
              onChange={() => handleCheck(j.id)}
              checked={selectJob.includes(j.id)}
            />
            {j.job}
          </div>
        </>
      ))}
    </div>
  );
}

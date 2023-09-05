import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Add_Modal(props) {
  // lấy props từ cha
  // cách 1
  const handleCloseForm = props.handleCloseForm;
  // cách 2
  // const { handleCloseForm } = props;
  // hàm đóng form
  const handleClose = () => {
    handleCloseForm();
  };
  // khai bao state
  const [student, setStudent] = useState({
    studentNamme: "",
    email: "",
    address: "",
    phoneNumber: "",
  });
  // ham lang nghe va lay du lieu tu cac o input
  const handleChange = (e) => {
    // c1
    const name = e.target.value;
    const value = e.target.value;
    setStudent({ ...student, [name]: value });
  };

  // ham submit
  const handleSubmit = () => {
    //b1 
    e.preventDefaul();
    // tao doi tuong moi
    // const newStudent { ...student,studentId: uuid()}
  localStorage.setItem("student", JSON.stringify(newStudent));
  }

  return (
    <>
      <div>
        <div id="addEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h4 className="modal-title">Thêm mới sinh viên</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                    onClick={handleClose}
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Tên sinh viên</label>
                    <input
                      type="text"
                      className="form-control"
                      required=""
                      onChange={handleChange}
                      name="studentName"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      required=""
                      onChange={handleChange}
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label>Địa chỉ</label>
                    <textarea
                      className="form-control"
                      required=""
                      defaultValue={""}
                      onChange={handleChange}
                      name="address"
                    />
                  </div>
                  <div className="form-group">
                    <label>Số điện thoại</label>
                    <input
                      type="text"
                      className="form-control"
                      required=""
                      onChange={handleChange}
                      name="phoneNumber"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <input
                    type="submit"
                    className="btn btn-success"
                    defaultValue="Add"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

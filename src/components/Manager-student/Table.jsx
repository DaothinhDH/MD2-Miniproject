import React, { useState } from "react";
import Add_Modal from "./Add_Modal";


export default function Table() {
  const [show, setShow] = useState(false);
  // hàm hiện form
  const handleShowForm = () => {
    setShow(true); // SET LẠI trạng thái từ false thành true
  };
  //  hàm ẩn form
  const handleCloseForm = () => {
    setShow(false); // SET LẠI trạng thái từ false thành true
  };
  return (
    <>
      {/* component form sẽ nằm ở đây */}
      {show ? <Add_Modal handleCloseForm = {handleCloseForm} /> : <> </>}
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Quản lý <b>sinh viên</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <a
                    href="#addEmployeeModal"
                    className="btn
                              btn-success"
                    data-toggle="modal"
                    onClick={handleShowForm}
                  >
                    <i className="material-icons"></i>
                    <span>Thêm mới sinh viên</span>
                  </a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="selectAll" />
                      <label htmlFor="selectAll" />
                    </span>
                  </th>
                  <th>Tên sinh viên</th>
                  <th>Email</th>
                  <th>Địc chỉ</th>
                  <th>Số điện thoại</th>
                  <th>Lựa chọn</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox5"
                        name="options[]"
                        defaultValue={1}
                      />
                      <label htmlFor="checkbox5" />
                    </span>
                  </td>
                  <td>Nguyễn Văn A</td>
                  <td>anv@mail.com</td>
                  <td>Thanh Xuân, Hà Nội</td>
                  <td>(+84) 631 2097</td>
                  <td>
                    <a
                      href="#editEmployeeModal"
                      className="edit"
                      data-toggle="modal"
                    >
                      <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        
                      </i>
                    </a>
                    <a
                      href="#deleteEmployeeModal"
                      className="delete"
                      data-toggle="modal"
                    >
                      <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                        
                      </i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox5"
                        name="options[]"
                        defaultValue={1}
                      />
                      <label htmlFor="checkbox5" />
                    </span>
                  </td>
                  <td>Nguyễn Văn B</td>
                  <td>bnv@mail.com</td>
                  <td>Thành phố Hồ Chí Minh</td>
                  <td>(+84) 631 2097</td>
                  <td>
                    <a
                      href="#editEmployeeModal"
                      className="edit"
                      data-toggle="modal"
                    >
                      <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        
                      </i>
                    </a>
                    <a
                      href="#deleteEmployeeModal"
                      className="delete"
                      data-toggle="modal"
                    >
                      <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                        
                      </i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">
                Hiển thị <b>5</b>/<b>10 </b>bản ghi
              </div>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a href="#">Trước</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    Sau
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

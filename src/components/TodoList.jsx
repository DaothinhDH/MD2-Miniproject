import React, { useState } from "react";
export default function TodoList() {
  const [jobs, setJobs] = useState(() => {
    return JSON.parse(localStorage.getItem("jobs")) || [];
  });
  const [job, setJob] = useState();
  const [edit, setEdit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const index = JSON.parse(localStorage.getItem("index")) || -1;
    if (index != -1) {
      jobs[index].job = job;
      localStorage.setItem("jobs", JSON.stringify([...jobs]));
      setJobs(jobs);
      return;
    } else {
      const newJob = {
        id: Date.now(),
        status: false,
        name: job,
      };
      setJobs([...jobs, newJob]);
      localStorage.setItem("jobs", JSON.stringify([...jobs, newJob]));
    }
    localStorage.removeItem("index");
    setJob("");
  };

  const handleDelete = (index) => {
    const deleteJobs = jobs.filter((_, i) => i !== index);
    localStorage.setItem("jobs", JSON.stringify(deleteJobs));
    setJobs(deleteJobs);
  };

  const handleUpdate = (index) => {
    setEdit(index);
    setJob(jobs[index].name);
    localStorage.setItem("index", JSON.stringify(index));
  };

  //  hàm check
  const handleCheck = (id) => {
    const updatedJobs = jobs.map((job) => {
      if (job.id === id) {
        return { ...job, status: !job.status };
      }
      return job;
    });

    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
  };

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div
            className="row d-flex justify-content-center align-items-center
              h-100"
          >
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                    MINI PROJECT TODO LIST
                  </h3>
                  <form
                    className="d-flex justify-content-centeralign-items-center mb-4"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-outline flex-fill">
                      <input
                        type="text"
                        id="form2"
                        className="form-control"
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form2">
                        Thêm công việc
                      </label>
                    </div>
                    <button type="submit" className="btn btn-infoms-2">
                      Thêm
                    </button>
                  </form>
                  {/* Tabs navs */}
                  <ul
                    className="nav nav-tabs mb-4 pb-2"
                    id="ex1"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active">Tất cả công việc</a>
                    </li>
                  </ul>
                  {/* Tabs navs */}
                  {/* Tabs content */}
                  <div className="tab-content">
                    <div className="tab-pane fade show active">
                      <ul className="list-group mb-0">
                        {jobs.map((job, index) => (
                          <li
                            key={index}
                            className="list-group-item d-flex align-items-center border-0 mb-2rounded justify-content-between"
                            style={{ backgroundColor: "#f4f6f7" }}
                          >
                            <div>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                checked={job.status === true}
                                onChange={() => handleCheck(job.id)}
                              />
                              {job.status ? (
                                <>
                                  <s>{job.name}</s>
                                </>
                              ) : (
                                <>
                                  <span>{job.name}</span>
                                </>
                              )}
                            </div>
                            <div>
                              <a
                                href="#!"
                                className="text-info"
                                title="Sửa công việc"
                                onClick={() => handleUpdate(index)}
                              >
                                <i className="fas fa-pencil-alt me-3" />
                              </a>
                              <a
                                href="#!"
                                className="text-danger"
                                title="Xóa công việc"
                                onClick={() => handleDelete(index)}
                              >
                                <i className="fas fa-trash-alt" />
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Tabs content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

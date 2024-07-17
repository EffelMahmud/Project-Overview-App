import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../features/projectOverViewSlice";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [checkbox, setCheckbox] = React.useState(false);
  const dispatch = useDispatch();

  const handleAddProject = (e) => {
    e.preventDefault();

    if (name !== "" && title !== "" && description !== "" && checkbox == true) {
      const newNote = {
        id: Date.now().toString(32),
        name,
        title,
        description,
        createdAt: new Date().toString(),
      };
      setName("");
      setTitle("");
      setDescription("");
      dispatch(addNote(newNote));
      toast.success("🚀 Successfully Added Project Note", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    } else {
      toast.error("🦄 Please fill up the empty fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <ToastContainer />
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-1/4 bg-amber-300 shadow-md rounded-md px-4 py-5 box-border">
          <div>
            <h1 className="font-mono text-3xl text-black text-center mb-4">
              Add Your Project Details:
            </h1>
            <input
              placeholder="Your Name"
              value={name}
              className="w-full rounded-md border border-blue-950 p-2 outline-none"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Project Title"
              value={title}
              className="w-full rounded-md border border-blue-950 p-2 mt-2 outline-none"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="">
              <textarea
                placeholder="Project Description"
                value={description}
                maxLength={500}
                rows={7}
                className="w-full rounded-md border border-blue-950 p-2 mt-3 outline-none resize-none"
                onChange={(e) => setDescription(e.target.value)}
              />
              <h3 className="  font-mono  text-blue-400 ">
                {500 - description.length} Charecters Remaining
              </h3>
            </div>

            <label>
              <input
                type="checkbox"
                value={checkbox}
                onChange={(e) => setCheckbox(e.target.checked)}
              />{" "}
              I want to add This Task.
            </label>
            <button
              onClick={handleAddProject}
              className=" bg-blue-950 text-white text-base font-mono px-5 py-2 rounded-md mt-3"
            >
              Save Project OverView
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;

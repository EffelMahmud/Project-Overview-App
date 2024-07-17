import { useState } from "react";
const CONTACT_FORM_INIT_STATE = {
  name: "",
  email: "",
  number: "",
  group: "",
};

export default function ContactForm({ getContact }) {
  const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });
  const { name, email, number, group } = values;

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getContact(values);
    setValues({ ...CONTACT_FORM_INIT_STATE });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/3 bg-amber-300 shadow-md rounded-md px-4 py-5 box-border">
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="font-mono text-xl text-black text-center mb-4"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="w-full rounded-md border border-blue-950 p-2 outline-none"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="font-mono text-xl text-black text-center mb-4"
            >
              E-Mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="w-full rounded-md border border-blue-950 p-2 mt-2 outline-none"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="number"
              className="font-mono text-xl text-black text-center mb-4"
            >
              Phone-Number:
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              value={number}
              className="w-full rounded-md border border-blue-950 p-2 mt-2 outline-none"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="group"
              className="font-mono text-xl text-black text-center mb-4"
            >
              Group:
            </label>
            <select
              type="group"
              id="group"
              name="group"
              value={group}
              className="w-full rounded-md border border-blue-950 p-2 mt-2 outline-none"
              onChange={handleChange}
            >
              <option value="">Select Relationship</option>
              <option value="All">All</option>
              <option value="Home">Home</option>
              <option value="Office">Office</option>
            </select>
          </div>
          <br />
          <input
            type="submit"
            value={"Create-New-Contact"}
            className=" bg-blue-950 text-white text-base font-mono px-5 py-2 rounded-md mt-3"
          />
        </form>
      </div>
    </div>
  );
}

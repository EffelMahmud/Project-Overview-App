import { useState } from "react";

export default function Table({ contacts }) {
  const [filter, setFilter] = useState("All");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const searchCB = (contact) =>
    contact.name.includes(searchTerm) || contact.email.includes(searchTerm);

  let filteredContacts = [];
  if (filter == "All") {
    filteredContacts = searchTerm ? contacts.filter(searchCB) : contacts;
  } else {
    filteredContacts = contacts.filter((contact) => contact.group == filter);
  }

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-1/2 bg-amber-300 shadow-md rounded-md px-4 py-5 box-border">
          <label className="font-mono text-xl text-black text-center mb-4">
            Filter:
          </label>
          <select value={filter} onChange={handleChange}>
            <option value="All">All</option>
            <option value="">None</option>
            <option value="Home">Home</option>
            <option value="Office">Office</option>
          </select>
          <input
            type="search"
            placeholder="Search"
            value={searchTerm}
            className="w-full rounded-md border border-blue-950 p-2 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <table className=" shadow-2xl font-mono borrder-2 border-cyan-200 w-6/12 ">
            <thead className=" text-white ">
              <td>
                <th className="py-3 px-10 bg-cyan-800 ">Name</th>
                <th className="py-3 px-10 bg-cyan-800 ">Email</th>
                <th className="py-3 px-10 bg-cyan-800 ">Number</th>
                <th className="py-3 px-10 bg-cyan-800 ">Group</th>
              </td>
            </thead>
            <tbody className="text-cyan-900 text-center">
              {filteredContacts.map((contact, index) => (
                <tr
                  key={index}
                  className="bg-cyan-200 cursor-pointer duration-300"
                >
                  <td className="py-3 px-6"> {contact.name} </td>
                  <td className="py-3 px-6"> {contact.email} </td>
                  <td className="py-3 px-6"> {contact.number} </td>
                  <td className="py-3 px-6"> {contact.group} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

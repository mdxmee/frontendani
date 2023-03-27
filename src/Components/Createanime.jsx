import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Createanime() {

    const [titleInp, setTitleInp] = useState("");
    const [descInp, setDescInp] = useState("");
    const [rdInp, setRdInp] = useState("");
    const [imageInp, setImageInp] = useState("");
    const [devInp, setDevInp] = useState("");
    const navigate = useNavigate();

    const onCreate = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:3000/anime", {
            title: titleInp,
            description: descInp,
            "release-date": rdInp,
            imageURL: imageInp,
            developer: devInp,
          })
          .then(function (response) {
            navigate(`/anime/${response.data.id}`);
          })
          .catch(function (error) {
            console.log(error);
          });
      };

  return (
    <div className=' relative container mx-auto p-6 '>

        <div className="max-w-6xl mx-auto shadow-lg rounded p-10">

        <h1 className=' text-4xl uppercase '> создать новое аниме </h1>
            
      <form onSubmit={onCreate} className="flex flex-col space-y-4 p-10">
        <input
          value={titleInp}
          onChange={(e) => setTitleInp(e.target.value)}
          className="border p-2"
          type="text"
          placeholder="title"
        />
        <input
          value={descInp}
          onChange={(e) => setDescInp(e.target.value)}
          className="border p-2"
          type="text"
          placeholder="Type"
        />
        <input
          value={rdInp}
          onChange={(e) => setRdInp(e.target.value)}
          className="border p-2"
          type="text"
          placeholder="Genre"
        />
        <input
          value={imageInp}
          onChange={(e) => setImageInp(e.target.value)}
          className="border p-2"
          type="text"
          placeholder="imageURL"
        />
        <input
          value={devInp}
          onChange={(e) => setDevInp(e.target.value)}
          className="border p-2"
          type="text"
          placeholder="Studio"
        />
        <input
          className="border bg-[#2fff2f] p-2"
          type="submit"
          value="СОЗДАТЬ"
        />
      </form>
    </div>

    </div>
  )
}

export default Createanime
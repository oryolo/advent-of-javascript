import React, { useEffect, useState } from "react";
import Select from "react-select";
import ArrowUpAndDown from "../icons/ArrowUpAndDown";
import movieData from "./top-100-christmas-movies.json";

interface Props {}

const DropdownIndicator: React.FC = () => {
    return <ArrowUpAndDown />
  };

const MovieSearch = (props: Props) => {
  const [movies, setMovies] = useState([]);

  const formattedLabel = (text, year, img) => (
    <div style={{ display: "flex" }}>
      <div>
        <img src={img} />
      </div>
      <div><p>{text}</p><p>{year}</p></div>
    </div>
  );

  useEffect(() => {
    const options = movieData.map((m) => ({
      label: formattedLabel(m["Title"], m['Year'], m["Image"]),
      value: m["Title"],
    }));
    setMovies(options);
  }, []);

  return <Select options={movies} components={{ DropdownIndicator }}/>;
};

export default MovieSearch;

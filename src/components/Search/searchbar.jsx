import React,{useState} from "react";
import { SearchDiv, SearchInput, SearchIcon,dataResult,dataItem } from "./Search.style";
import Data from "./data.json";
import CloseIcon from "@material-ui/icons/Close";
import {Link,Redirect} from 'react-router-dom';
import Button from "@restart/ui/esm/Button";
import Searchresult from "./Searchresult";



function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = Data.filter((value) => {
      return value.CourseName.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div>
    <SearchDiv>
        <SearchInput placeholder="Search"  value={wordEntered}
          onChange={handleFilter} />    
          <Button className="bg-transparent border-0" ><SearchIcon /></Button>
    </SearchDiv>
    
      
        <div>
          {filteredData.length === 0 ? (
            null
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      {filteredData.length != 0 && (
        <dataResult>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link to={value.CourseURL} className="text-decoration-none overflow-scroll" >
                <p>{value.CourseName} </p>
              </Link>
            );
          })}
        </dataResult>
      )}
    </div>
  );
}

export default SearchBar;





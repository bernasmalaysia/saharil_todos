// import React, { useContext } from 'react';
import { FaLaptop, FaTabletAlt, FaMobileAlt} from "react-icons/fa";
// import DataContext from "./context/DataContext"
import useWindowSize from "./hooks/useWindowSize";
import "./header.css"

export default function Header({title}) {

  // const {width} = useContext(DataContext);
  const { width } = useWindowSize();
  return (
    <header className="header">

    <div className="headerTitle">{title}</div>
    {width < 768 ? <FaMobileAlt /> : width < 992 ? <FaTabletAlt /> : <FaLaptop />}
    </header>
  )
}

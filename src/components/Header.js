import React from "react";
import NavTabs from "./NavTabs";  

function Header({ currentPage, handlePageChange}) {
    return (
        <header className="header">
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    );
}
export default Header; 

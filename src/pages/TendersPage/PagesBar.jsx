import React, {useEffect, useState} from 'react';
import Bar from "./Bar";
import {range} from "../../functions_helpers/range";


const PagesBar = ({pagesCount, setCurrentPage}) => {

    const [currentPages, setCurrentPages] = useState([])
    const [activePage, setActivePage] = useState(0)
    useEffect(() => setCurrentPages(range(pagesCount).slice(0, 3)), [])

    return (
        <React.Fragment>
            {currentPages.map((pageNumber, index) => <Bar number={pageNumber}
                                                          setCurrentPage={setCurrentPage}
                                                          isActive={
                                                              index % 3 === activePage
                                                          }
                                                          setActivePage={setActivePage}
            />)}
        </React.Fragment>
    );
};

export default PagesBar;
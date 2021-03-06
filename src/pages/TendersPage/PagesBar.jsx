import React, {useContext, useEffect, useState} from 'react';
import Bar from "./Bar";
import {range} from "../../functions_helpers/range";
import {PaginationContext} from "../../contexts";


const PagesBar = () => {
    const {currentPage, pagesCount, setCurrentPage, status} = useContext(PaginationContext)
    const [currentPages, setCurrentPages] = useState([])
    useEffect(() => {
        if (currentPage % 3 === 1) {
            setCurrentPages(range(pagesCount).slice(currentPage - 1, currentPage + 2))

        }
        else if (currentPage % 3 === 0){
            setCurrentPages(range(pagesCount).slice(currentPage - 3, currentPage))
        }

    }, [currentPage, status])

    return (
        <React.Fragment>
            {currentPages.map((pageNumber, index) => <Bar number={pageNumber}
                                                          setCurrentPage={setCurrentPage}
                                                          currentPage={currentPage}
                                                    key={index}

            />)}
        </React.Fragment>
    );
};

export default PagesBar;
import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {getTendersPaginated} from "../../constants/rest_requests";
import Tenders from "./Tenders";
import Pagination from "./Pagination";
import {PaginationContext} from "../../contexts";

const TendersPage = () => {
    const [tenders, setTenders] = useState([])
    const [pagesCount, setPagesCount] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchTenders = async () => {
            const response = await axios.get(getTendersPaginated, {params:
                    {page: currentPage, limit: 2},
            headers: {'Content-Type': "application/json"}
            })
            const resp = response.data
            setTenders(resp.tenders)
            setPagesCount(resp.pageCount)
            setLoading(false)

        }
        fetchTenders()
    }, [])

    return (
        <PaginationContext.Provider value={{
            pagesCount: pagesCount,
            currentPage: currentPage,
            setCurrentPage: setCurrentPage,
        }}>
            <div>
                <Tenders tenders={tenders} loading={loading}/>
                <Pagination/>
            </div>
        </PaginationContext.Provider>
    );

};

export default TendersPage;
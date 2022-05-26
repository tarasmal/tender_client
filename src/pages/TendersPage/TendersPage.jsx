import React, {useEffect, useState} from 'react';
import axios from "axios";
import {getTendersPaginated} from "../../constants/rest_requests";
import Tenders from "./Tenders";
import Pagination from "./Pagination";
import {PaginationContext} from "../../contexts";
import SearchBar from "./SearchBar";
import Checkbox from "./Checkbox";

const TendersPage = () => {
    const [tenders, setTenders] = useState([])
    const [pagesCount, setPagesCount] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [isPaginate, setIsPaginate] = useState(true)
    const [checkBoxStatus, setCheckBoxStatus] = useState(false)
    const [firstLoaded, setFirstLoaded] = useState(true)
    useEffect(() => {
        const fetchTenders = async () => {
            let response
            let headers
            if (search === ""){
                headers = {'Content-Type': "application/json", 'Search': 'false'}
                setIsPaginate(true)
            }
            else{
                headers = {'Content-Type': "application/json", 'Search': 'true'}
                setIsPaginate(false)
            }
            response = await axios.get(getTendersPaginated, {params:
                    {page: currentPage, limit: 2, searchReq: search, status: checkBoxStatus},
                headers: headers
            })


            const resp = response.data
            setTenders(resp.tenders)
            setPagesCount(resp.pageCount)
            setLoading(false)
            setFirstLoaded(false)

        }
        fetchTenders()
    }, [currentPage, search])

    return (
        <PaginationContext.Provider value={{
            pagesCount: pagesCount,
            currentPage: currentPage,
            setCurrentPage: setCurrentPage,
        }}>
            <div>
                <Checkbox checkBoxStatus={checkBoxStatus} setCheckBoxStatus={setCheckBoxStatus}/>
                <SearchBar setSearch={setSearch}/>
                <Tenders tenders={tenders} loading={loading}/>
                {isPaginate && !firstLoaded? <Pagination pagesCount={pagesCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/> : null }
            </div>
        </PaginationContext.Provider>
    );

};

export default TendersPage;
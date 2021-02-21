import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import CryptoList from './CryptoList'

function Pagination() {
    const LIMIT = 1657; // total data size //fetch total ?
    const PAGE_SIZE = 10; //page size
    const DATA_SIZE = 100; // fetch data size

    const [pageNumber,setPageNumber] = useState(0);
    const [pageData, setPageData] = useState([]);
    const [lastPage, setLastPage] = useState(0);
    const [fetchData, setFetchData] = useState([]);
    const [pageCount] = useState(Math.ceil(LIMIT / PAGE_SIZE));

    const getData = async() => {
        const selectedPageWindow = Math.floor(lastPage/PAGE_SIZE);
        const currentPageWindow = Math.floor(pageNumber/PAGE_SIZE);
        if(selectedPageWindow != currentPageWindow || (lastPage == 0 && pageNumber == 0)){
            const pageOffset = Math.floor((pageNumber*PAGE_SIZE)/DATA_SIZE)*DATA_SIZE;
            const res = await axios.get('https://api.coincap.io/v2/assets',{ params: { offset: pageOffset, limit:DATA_SIZE }});
            setFetchData(res.data.data);
        } 
    };

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setLastPage(pageNumber);
        setPageNumber(selectedPage);
    };
    
     useEffect(() => {
        getData();
        const offset = (pageNumber%PAGE_SIZE)*PAGE_SIZE;
        const slice = fetchData.slice(offset, offset + PAGE_SIZE);
        setPageData(slice);
     }, [pageNumber])

     useEffect(() => {
       const offset = (pageNumber%PAGE_SIZE)*PAGE_SIZE;
       const slice = fetchData.slice(offset, offset + PAGE_SIZE);
       setPageData(slice);
    }, [fetchData])

     useEffect(() => {
        getData();
     }, [])


     //console.log(data);
     return (
        <div className="Pagination">
            
          <CryptoList data={pageData}/>
          <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
        </div>
      );
}

export default Pagination

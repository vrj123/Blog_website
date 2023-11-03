import React from 'react'

const Pagination = ({pageChange, currentPage, blogs, pageSize, category}) => {

    const filteredBlogs=blogs.filter((blog)=>category=="All"?true:blog.category===category)

    const renderPageNumbers=()=>{
        const totalPages=Math.ceil(filteredBlogs.length/pageSize);
        return(
            Array.from({length:totalPages}, (_, i)=>i+1).map((pageNumber)=>
                <li key={pageNumber} className={`${pageNumber==currentPage?"bg-orange-500":""} w-8 text-center border border-1 border-black`}>
                    <a href="#" onClick={()=>pageChange(pageNumber)}>{pageNumber}</a>
                </li>
            )
        )
    }
    let totalpages=Math.ceil(filteredBlogs.length/pageSize);
  return (
      
    <ul className='flex gap-4 my-10 items-center justify-center'>
        <li>
            <button href="#" onClick={()=>pageChange(currentPage-1)} disabled={currentPage===1} className={currentPage===1?"text-gray-400":""}>Previous</button>
        </li>
        <>{renderPageNumbers()}</>
        <li>
            <button href="#" onClick={()=>pageChange(currentPage+1)} disabled={currentPage===totalpages} className={currentPage===totalpages?"text-gray-400":""}>Next</button>
        </li>
    </ul>
  )
}

export default Pagination;
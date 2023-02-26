import React from "react";
import { Button } from "@chakra-ui/react";
function Pagination({totalPages,currentPage,handlePageChange}) {
  let pages = new Array(totalPages).fill(0).map((a,i) => {
 return   <Button m={3} data-testid="page-btn" disabled={currentPage===i+1}  onClick={()=>handlePageChange(i+1)}>{i+1}</Button>;
  });
  // console.log(pages)
  return <div>
    {pages}
  </div>;
}

export default Pagination;

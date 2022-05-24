import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled from "styled-components";

const Paginacion = (props) => {
  const [page, setPage] = useState(props.page);
  const [selectedItem, setselecteditem] = React.useState();
  const [filtrados, setFiltrado] = useState(props.datos);
  const [rowsPerPage, setRowsPerPage] = React.useState(3)

  const handleChangePage = (e, newPage) => {
    if (props.onChange) {
      props.onChange(newPage)
    }
    
    setPage(newPage);
  }

  return (
    <>
      
        <Pagination
          count={filtrados.length % rowsPerPage ? Math.floor(filtrados.length / rowsPerPage) + 1 : Math.floor(filtrados.length / rowsPerPage)}
          color={props.color}
          size={props.size}
          page={page}
          onChange={handleChangePage} />
      
    </>
  )
}

export default Paginacion
import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';


let paginationConfig = {
  size: "lg",
};

function PaginatonComponent() {
  const [page, setPage] = useState(1);

  return (
    <Pagination className="mt-4 justify-content-end" {...paginationConfig}>
      <Pagination.Prev onClick={() => setPage(page - 1)} disabled={page <= 1} />
      <Pagination.Item disabled>{page} / 30</Pagination.Item>
      <Pagination.Next onClick={() => setPage(page + 1)} disabled={page >= 30 } />
    </Pagination>
  );
}

export default PaginatonComponent;
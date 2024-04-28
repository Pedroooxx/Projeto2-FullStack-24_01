import React, { useState, useEffect } from "react";
import { Table, TableContainer, TableHead, TableRow, TableCell, TablePagination, Paper, ThemeProvider } from "@mui/material";
import { useAppContext } from "../AppContext";
import theme from "./theme";
import "./stylesheets/main.css";

const Main = () => {
  const { characterList } = useAppContext();
  const [page, setPage] = useState(0);

  useEffect(() => {
    // Aqui você pode fazer qualquer operação com a lista de personagens, se necessário
  }, [characterList]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const columns = [
    { id: "id", name: "Id" },
    { id: "fullName", name: "Full Name" },
  ];

  const showCharacterList = () => {
    const rowsPerPage = 14;
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const slicedCharacterList = characterList.slice(startIndex, endIndex);

    return slicedCharacterList.map((character, index) => (
      <TableRow key={index} className={index % 2 === 0 ? "evenRow" : "oddRow"}>
        <TableCell className="whiteText">{character.id}</TableCell>
        <TableCell className="whiteText">{character.fullName}</TableCell>
      </TableRow>
    ));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="main">
        <h1 className="titleType1">Lista de Personagens</h1>
        <div className="characterListBox">
          <Paper sx={{ width: "100%"}}>
            <TableContainer sx={{ overflow: "hidden"}}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow sx={{color: theme.palette.primary.main}}>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        sx={{
                          color: theme.palette.secondary.main, borderRadius: "7px",
                          backgroundColor: theme.palette.primary.main
                        }}
                      >
                        {column.name}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <tbody>
                  {showCharacterList()}
                </tbody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
        <TablePagination
          sx={{ color: theme.palette.secondary.main }}
          rowsPerPageOptions={[]}
          component="div"
          count={characterList.length}
          rowsPerPage={14}
          page={page}
          onPageChange={handleChangePage}
        />
      </div>
    </ThemeProvider>
  );
};

export default Main;
import React from 'react';
import { Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

const GetTable = ({title, content, onBlankAltText}) => (
    <TableContainer component={Paper}>
        <Table aria-label="simple table">
        { content.length ?
                <>
                <TableHead>
                    <TableRow>
                        {
                            title.map( (t, idx) => <TableCell key={idx} align="center"> {t} </TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {content.map((row, idx) => (
                        <TableRow key={idx}>
                            { row.map( (c, idx) => (
                                    <TableCell key={idx} component="th" scope="row" align="center">{c}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
                </>
            :
                <TableBody>
                    <TableRow>
                        <TableCell align="center">{onBlankAltText}</TableCell>
                    </TableRow>
                </TableBody>
            }
        </Table>
    </TableContainer>
)

export default GetTable;
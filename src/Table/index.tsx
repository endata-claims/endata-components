import React from 'react'
import { Paper, Table as MuiTable, TableContainer, TableHead, TableRow, TableCell, TableBody, makeStyles, Typography, CircularProgress } from '@material-ui/core'
import { useTable, useExpanded } from 'react-table'

interface TableWrapperProps extends TableProps {
  loading?: boolean
  loadingMore?: boolean
}
const TableWrapper: React.FC<TableWrapperProps> = ({ loading, loadingMore, data, ...props }) => {
  const classes = useStyles({})
  const loadingComponent = React.useMemo(() => (
    <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress />
    </div>
  ), [])


  if (loading) return (
    <Paper className={classes.container}>
      {loadingComponent}
    </Paper>
  )

  if (!data) return null

  return (
    <Paper className={classes.container}>
      {!loadingMore ? null : (
        <div style={{ position: 'absolute', top: 33, bottom: 0, left: 0, right: 0, zIndex: 10, background: 'rgba(255, 255, 255, 0.5)' }}>
          {loadingComponent}
        </div>
      )}
      <Table {...props} data={data} />
    </Paper>
  )
}

interface TableProps {
  data?: any
  columns?: any
  totalCount?: number | null

  onRowClick?: any
  onScroll?: any

  renderRowSubComponent?: any
}
const Table: React.FC<TableProps> = ({
  columns, data, totalCount,
  onRowClick, onScroll,
  renderRowSubComponent,
}) => {
  const classes = useStyles({})

  const hiddenColumns = React.useMemo(() => {
    return columns?.filter(({ show }: any) => show === false)
      .map(({ accessor, id }: any) => id ? id : accessor)
  }, [columns])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    flatColumns,
  } = useTable({
    columns,
    data,
    initialState: { hiddenColumns },
  }, useExpanded)

  return (
    <>
      {totalCount && totalCount !== 0 ? (
        <Typography variant='subtitle1'>
          Found {totalCount}
        </Typography>
      ) : null}
      <Paper className={classes.paper}>
        <TableContainer className={classes.tableContainer} onScroll={onScroll}>
          <MuiTable stickyHeader {...getTableProps()}>
            <TableHead>
              {headerGroups.map((headerGroup: any) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column: any) => {
                    return (
                      <TableCell {...column.getHeaderProps()} className={classes.tableHeaderCell}>
                        {column.render('Header')}
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
              {rows.length
                ? (
                  rows.map((row: any) => {
                    prepareRow(row)
                    // @ts-ignore
                    const { isExpanded } = row

                    return (
                      <React.Fragment {...row.getRowProps()}>
                        <TableRow onClick={onRowClick ? () => onRowClick(row) : () => { }} className={classes.tableRow}>
                          {row.cells.map((cell: any) => {
                            return (
                              <TableCell {...cell.getCellProps()} className={classes.tableBodyCell}>
                                {cell.value !== undefined ? cell.render('Cell') : '-'}
                              </TableCell>
                            )
                          })}
                        </TableRow>
                        {isExpanded && (
                          <TableRow>
                            <TableCell colSpan={flatColumns.length}>
                              {renderRowSubComponent({ row })}
                            </TableCell>
                          </TableRow>
                        )}
                      </React.Fragment>
                    )
                  })
                )
                : (
                  <TableRow>
                    <TableCell colSpan={flatColumns.length}>
                      No item found
                    </TableCell>
                  </TableRow>
                )
              }
            </TableBody>
          </MuiTable>
        </TableContainer>
      </Paper>
    </>
  )
}

export default TableWrapper

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    height: 'calc(100% - 28px)',
    padding: 2
  },
  paper: {
    height: '100%'
  },
  tableContainer: {
    maxHeight: '100%'
  },
  tableHeaderCell: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    minWidth: 150
  },
  tableBodyCell: {
    textAlign: 'center',
    padding: theme.spacing(1),
  },
  tableRow: {
    '&:nth-child(even)': {
      background: theme.palette.grey[100],
    },
    '&:hover': {
      background: theme.palette.grey[300],
    },
    flexWrap: 'nowrap'
  }
}))
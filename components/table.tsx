import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import NameCell from '@/components/nameCell'
import {GamerProps} from '@/components/types'

const tableHeaders = ['Nickname', 'Scores', 'States', '']

type Props = {
  gamers: GamerProps[]
  titleTable: string
}

const ScreenTable = ({gamers, titleTable}: Props) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant={'h5'}>{titleTable}</Typography>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHeaders.map((column) => (
                <TableCell key={column}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {gamers?.map((gamer) => (
              <TableRow key={gamer?.id} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                <TableCell component="th" scope="row">
                  <NameCell
                    nickname={gamer?.nickname}
                    totalKills={gamer?.totalKills}
                    totalDeaths={gamer?.totalDeaths}
                  />
                </TableCell>
                <TableCell>{gamer?.score}</TableCell>
                <TableCell>
                  <Typography variant="body1">{gamer?.isAlive ? 'alive' : 'dead'}</Typography>
                </TableCell>
                <TableCell>
                  <Button variant="outlined" startIcon={<PersonAddOutlinedIcon />}>
                    Send a friend request
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default ScreenTable

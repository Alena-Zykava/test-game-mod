import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IntoTooltip from '@/components/intoTooltip'

type Props = {
  nickname: string
  totalKills: number
  totalDeaths: number
}

const NameCell = ({nickname, totalKills, totalDeaths}: Props) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Typography variant="h6">{nickname}</Typography>
      <IntoTooltip totalKills={totalKills} totalDeaths={totalDeaths} />
    </Box>
  )
}

export default NameCell

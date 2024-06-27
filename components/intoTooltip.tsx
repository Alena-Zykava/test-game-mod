import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

type Props = {
  totalKills: number
  totalDeaths: number
}

const TitleTooltip = ({totalKills, totalDeaths}: Props) => (
  <Box>
    <Box display="flex" alignItems="center" gap={1}>
      <Typography variant="caption">Total kills</Typography>
      <Typography variant="caption">{totalKills}</Typography>
    </Box>
    <Box display="flex" alignItems="center" gap={1}>
      <Typography variant="caption">Total deaths</Typography>
      <Typography variant="caption">{totalDeaths}</Typography>
    </Box>
  </Box>
)

const IntoTooltip = (props: Props) => (
  <Tooltip title={<TitleTooltip {...props} />}>
    <InfoOutlinedIcon />
  </Tooltip>
)

export default IntoTooltip

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ScreenTable from '@/components/table'
import {ResponseProps} from '@/pages/api/types'
import {getScore} from '@/utils/fetch'

type HomeProps = {
  score: ResponseProps
}

export default function Home({score}: HomeProps) {
  return (
    <>
      <main>
        <Container maxWidth="xl">
          <Box display="flex" alignItems="center" justifyContent="space-around" marginTop={3}>
            <ScreenTable gamers={score.winners} titleTable={'Winning team'} />
            <ScreenTable gamers={score.losers} titleTable={'Loser team'} />
          </Box>
        </Container>
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  let score = {}

  try {
    score = await getScore()
  } catch (error) {
    console.log('Error in fetch', error)
  }

  return {props: {score}}
}

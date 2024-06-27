import uuid from 'react-uuid'
import {GamerProps} from '@/components/types'

export const generateGamers = (count: number): GamerProps[] =>
  Array(count)
    .fill({})
    .map(() => {
      const id = uuid()

      return {
        id,
        nickname: `nickname_${id.slice(-4)}`,
        totalKills: Math.floor(Math.random() * 10),
        totalDeaths: Math.floor(Math.random() * 10),
        score: Math.floor(Math.random() * 100),
        isAlive: Math.random() < 0.5,
      }
    })

export const deadGamer = {
  id: uuid(),
  nickname: 'nickname1',
  totalKills: 2,
  totalDeaths: 8,
  score: 100,
  isAlive: false,
}

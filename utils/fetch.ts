export const getScore = async () => {
  const score = await fetch('http://localhost:3000/api/score')
  debugger
  if (!score.ok) {
    throw new Error()
  }

  return score.json()
}

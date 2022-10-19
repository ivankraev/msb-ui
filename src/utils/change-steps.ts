export const changeStepHandler = (
  handler: (value: number) => void,
  step: number,
  stepsLength: number,
  direction: 'increment' | 'decrement',
) => {
  if (direction === 'increment') {
    handler(Math.max(stepsLength, step))
  } else {
    handler(Math.min(0, step))
  }
}

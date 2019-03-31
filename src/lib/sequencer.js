export default class Sequencer {
  constructor (audioContext, sequencerData, stepChangeCallback) {
    this.audioContext = audioContext
    this.sequencerData = sequencerData
    this.stepChangeCallback = stepChangeCallback

    // ----- t i m i n g

    // beats per minute
    this.bpm = 120

    // a sixteenth note at the given bpm
    this.stepLength = this.bpm / 60 * (1 / 16)

    // 40ms expressed in seconds
    this.lookahead = 0.04

    // 25ms expressed in milliseconds
    this.intervalTime = 25

    // when the next step is happening
    this.nextStepTime = null

    // the index of the current step
    this.step = 0

    // the number of steps in a pattern
    this.steps = 16

    // the id of the setInterval lookahead
    this.intervalId = null
  }

  scheduleSequence () {
    while (
      this.nextStepTime < this.audioContext.currentTime + this.lookahead) {
      this.stepChangeCallback(this.step)

      // schedule the next step
      const trigger = this.sequencerData
        .tracks[0]
        .patterns[0]
        .smp_trg[this.step]

      // advance the time
      this.nextStepTime += this.stepLength

      // keep track of which step we're on
      this.step = ++this.step % this.steps
    }
  }

  start () {
    this.nextStepTime = this.audioContext.currentTime
    this.scheduleSequence()
    this.intervalId = setInterval(this.scheduleSequence.bind(this), this.intervalTime)
  }

  stop () {
    this.intervalId = clearInterval(this.intervalId)
  }

  rewind () {
    this.step = 0
  }
}

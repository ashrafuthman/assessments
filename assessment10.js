class StopWatch {
  #startTime = null;
  #endTime = null;
  #running = false;
  #duration = 0;

  start() {
    if (this.#running) throw new Error("Stopwatch has already started.");
    this.#running = true;
    this.#startTime = new Date();
  }

  stop() {
    if (!this.#running) throw new Error("Stopwatch has not started yet.");
    this.#endTime = new Date();
    this.#duration += (this.#endTime - this.#startTime) / 1000;
    this.#running = false;
  }

  reset() {
    this.#startTime = null;
    this.#endTime = null;
    this.#running = false;
    this.#duration = 0;
  }

  get duration() {
    return this.#running
        ? this.#duration + ((new Date() - this.#startTime) / 1000)
        : this.#duration;
  }
}

class AdvancedStopWatch extends StopWatch {
  log() {
    console.log(`Elapsed time: ${this.duration.toFixed(2)}s`);
  }
}

const timer = new AdvancedStopWatch();
timer.start();

setTimeout(() => {
  timer.stop();
  timer.log();
}, 1000);

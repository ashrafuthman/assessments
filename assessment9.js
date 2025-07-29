function StopWatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running) {
            throw new Error("Stopwatch has already started.");
        }
        running = true;
        startTime = new Date();
    }

    this.stop = function() {
        if (!running) {
            throw new Error("Stopwatch has not started yet.");
        }
        endTime = new Date();

        duration += (endTime - startTime) / 1000; // convert milliseconds to seconds
        running = false;
    }

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
          if (running) {
            return duration + ((new Date() - startTime) / 1000); // add current running time
          }
          return duration; // return total duration when not running
        },
        
      });
  }
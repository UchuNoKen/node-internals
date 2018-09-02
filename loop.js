// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// new timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue(){
  // check one: pending setTimeout, setInterval, setImmediate
  // check two: any pending OS tasks (server listening to port)
  // check three: any pending long running operations (like fs module)
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}


// entire body executes in one 'tick'
while(shouldContinue()){

  // 1) Node looks at pending timers and sees if any functions are ready 
  //  to be called (setTimeout, setInterval)

  // 2) Node looks at pending OS tasks and pending OS operations and calls relevent callbacks

  // 3) Pause execution. Continue when events occur..
  //  - new pending ostask is done (request on port)
  //  - a new pending Operation is done (file system access)
  //  - a timer is about to complete (setTimeout, setInterval)

  // 4) Look at pending Timers. Call any setImmediate

  // 5) Handle any 'close' events
}

// exit back to terminal

onmessage = function(e) {
  console.log(`${new Date().toISOString()} - Worker - Message received from client: '${e.data.msg}'`);
    this.setTimeout(() => {
      console.log('Worker: Posting message back to main script');
      e.data["endTime"] = new Date().toISOString()
      postMessage(e.data);
    }, 2000)
  }
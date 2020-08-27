class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callBack) {
    if (!this.events) {
      this.events = {};
    }
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callBack);
  }

  addListener(eventName, callBack) {
    this.on(eventName, callBack);
  }

  removeListener(eventName, callBack) {
    if (!this.events[eventName]) return;
    this.events[eventName] = this.events[eventName].filter((item) => {
      return item !== callBack;
    });
  }

  emit(eventName, ...args) {
    if (this.events[eventName]) {
      // for (var i = 0; i < this.events[eventName].length; i++) {
      //   this.events[eventName][i](...args);
      // }
      this.events[eventName].forEach((callBack) => {
        callBack.apply(this, args);
      });
    }
  }
}

const event = new EventEmitter();
event.addListener("some_event", (num) => {
  console.log("some_event 事件触发:" + num);
});
let num = 0;
setInterval(() => {
  event.emit("some_event", num++);
}, 1000);

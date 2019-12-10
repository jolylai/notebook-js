# 观察者模式

## 订阅-发布

```js
class Subject {
  constructor() {
    this.state = 0;
    this.observers = [];
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
    this.notifyAllObservers();
  }

  notifyAllObservers() {
    this.observers.forEach(observer => observer.update());
  }

  attch(observer) {
    this.observers.push(observer);
  }
}

class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attch(this);
  }
  update() {
    console.log(`name: ${this.name}, state: ${this.subject.getState()}`);
  }
}

const s = new Subject();
const o1 = new Observer("o1", s);
const o2 = new Observer("o2", s);

s.setState(1);
```

## Promise

只有当`Promise`的状态改变的时候，`Promise`中的`then` 和`catch`才会执行，这也是一个观察者模式

```js
const p = new Promise(resolve => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

// 订阅
p.then(function() {
  console.log("then");
});
```

## 点击事件

```html
<button id="btn">butt</button>
```

```js
const btn = document.getElementById("btn");
btn.onclick = e => console.log(e);
```

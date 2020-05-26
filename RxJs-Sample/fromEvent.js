/*
1. UI Events
2. Http Requests
3. File Systems
4. Arrary Like Objects
5. Memory/Cache
*/

const {
  fromEvent,
  from
} = rxjs;

const btn = $("#btn");
const inputName = $("#name");
const output = $("#output");

const btnStream$ = fromEvent(btn, "click");

btnStream$.subscribe(
  function (e) {
    console.log(e.target.innerHTML);
  },
  function (err) {
    console.log(err);
  },
  function () {
    console.log("Completed");
  }
);

const inputStream$ = fromEvent(inputName, "keyup");

inputStream$.subscribe(
  (e) => {
    console.log(e.target.value);
  },
  (err) => {
    console.log(err);
  },
  () => {
    console.log("Completed");
  }
);

const moveStream$ = fromEvent(document, "mousemove");

moveStream$.subscribe(
  (e) => {

    output.html("<h1> X: " + e.clientX + " Y: " + e.clientY + "  </h1>");
  },
  (err) => {
    console.log(err);
  },
  () => {
    console.log("Completed");
  }
);


const numbers = [33, 45, 24, 15, 10];
let counterElement = document.querySelector(".counter");

const promiseCheck = new Promise((resolve, reject) => {
  let Timer = setInterval(() => {
    var runner = parseInt(document.querySelector(".counter").innerText);
    counterElement.innerText = runner - 1;
    if (runner === 0) {
     clearInterval(Timer);
     resolve((counterElement.innerText = "Happy Morning"));
    }else{
      reject("wht going wrong")
    }
    // console.log(runner)
  }, 1000);
});
console.log(promiseCheck);


promiseCheck
  .then((data) => console.log(data))
  .catch((errData) => console.log(errData));


   
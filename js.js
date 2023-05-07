let counterElement = document.querySelector(".counter");

const promiseCheck = new Promise((resolve, reject) => {
  let Timer = setInterval(() => {
    var runner = parseInt(document.querySelector(".counter").innerText);
    counterElement.innerText = runner - 1;
    if (runner === 0) {
     clearInterval(Timer);
     document.body.style.backgroundColor="red";
     resolve((counterElement.innerText = "Happy Independance Day"));
    }else{
      reject("Failed")
    }
  }, 1000);
});
console.log(promiseCheck);


promiseCheck
  .then((data) => console.log(data))
  .catch((errData) => console.log(errData));


   
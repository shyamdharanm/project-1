function square(num){
  return new Promise((resolve, reject) => {
setTimeout(()=>resolve(5*num),3000);    
  })
}
square(4).then((data)=>{
  console.log(data);
  return square(data);
})

const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// // callback hell promise issue
// function aliceAnimate(){
//   const animateFinished1 = alice1.animate(aliceTumbling, aliceTiming).finished

//   animateFinished1.then(()=>{
//   const animateFinished2 = alice2.animate(aliceTumbling, aliceTiming).finished
//     animateFinished2.then(()=>{
//       const animateFinished3 = alice3.animate(aliceTumbling, aliceTiming).finished
//   })
// });
// }

// aliceAnimate();


// // promise chain
// const animateFinished1 = alice1.animate(aliceTumbling, aliceTiming).finished

// animateFinished1
//   .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
//   .then(() => alice3.animate(aliceTumbling, aliceTiming).finished);


// async and await

async function animateAll() {
  await alice1.animate(aliceTumbling, aliceTiming).finished;
  
  await alice2.animate(aliceTumbling, aliceTiming).finished;

  await alice3.animate(aliceTumbling, aliceTiming).finished;
}

animateAll();





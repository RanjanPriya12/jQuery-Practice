console.log('A');
setTimeout(() => console.log('B'), 0);
const promise = new Promise((resolve, reject) => {
  console.log('C');
  resolve();
});
promise.then(() => console.log('D'));
console.log('E');
(async () => {
  console.log('F');
  await promise;
  console.log('G');
})();
console.log('H');


// A->C->E->F->H->D->G->B





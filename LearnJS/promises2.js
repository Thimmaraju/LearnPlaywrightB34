


// const p = new Promise((resolve, reject) => {

//     let x = 4

//     if(x==2 ){

//         resolve("Raju")
//     }
//     else{

//         reject("Naveen")
//     }
// })


// //console.log(p)  // Promise { 'Raju' }

// // .then
// // .catch
// // .finally 

// p.then( text => console.log(text))
//  .catch(text => console.log(text))


//  p1 = Promise.resolve("Anitha")

//  p1.then( text => console.log(text))


//   p2 = Promise.reject({firname : "Raju", lastname : "G"})

//   p2.catch(obj => console.log(obj))


  //page.close()


  function abc(){

       return Promise.resolve("Raju")
  }

  abc().then(message => console.log(message))

// Playwright Test framework 

// Grouping 
// Annotations 
// Hooks 
// Tags 
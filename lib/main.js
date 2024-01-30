const content = document.querySelector("p") 
let alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];


function myNameIs(name) {
   name = name.toLowerCase()
  let result = ' '
   for (let i = 0 ; i < name.length ; i++){
    result += alphabet.indexOf(name[i])

   }




                return result





  
}

export { myNameIs}
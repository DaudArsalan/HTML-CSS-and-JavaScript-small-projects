let paraArray = [
  "Nullam mattis mollis justo, congue tempus est molestie cursus. Donec faucibus commodo dolor. Aenean quis eros ante. Sed ornare sed diam sit amet venenatis. Phasellus feugiat mi augue, sed varius ex elementum nec. Integer vel leo eu est placerat imperdiet vel a velit. Ut sollicitudin enim ut lorem iaculis, a vulputate nulla tristique.",

  "Pellentesque cursus mollis sagittis. Donec in ullamcorper massa. Fusce vitae mi vel est laoreet gravida. Proin consectetur nisl sit amet imperdiet pulvinar. Mauris ornare purus in tristique imperdiet. Vivamus ac volutpat tortor. Aenean suscipit fermentum diam, at pretium lectus vehicula tristique. Nulla molestie nisl et purus finibus tincidunt.",

  "In vitae imperdiet sapien. Maecenas cursus commodo lectus quis sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut magna sit amet risus vulputate gravida eget ut felis. Aliquam erat volutpat. Suspendisse potenti. Pellentesque nec mauris aliquam, commodo orci et, lacinia sapien. Praesent diam elit, dapibus et semper vitae, gravida quis enim. Aenean vitae gravida felis, sit amet eleifend tellus.",

  "Aliquam erat volutpat. Sed sapien mi, tincidunt congue condimentum vel, auctor vitae leo. Nam lectus urna, mollis vel felis eu, placerat auctor est. Integer id luctus nunc. Nulla vel urna vel ipsum placerat venenatis in non mauris. Phasellus sed ipsum efficitur, consequat turpis eget, volutpat nunc. Ut posuere urna sem, at lobortis orci ullamcorper id. Duis dictum orci ac odio ullamcorper, a tempor ipsum vehicula. Phasellus ultricies enim a diam euismod malesuada.",

  "Etiam rhoncus nunc ac enim convallis, vel gravida eros dictum. Donec aliquet vehicula felis, id posuere dui ultrices vel. Aliquam sit amet commodo enim. Praesent quis lacus nec nulla porta sodales a at tellus. Quisque vitae venenatis augue. Aliquam erat volutpat. Ut venenatis sed lectus ornare rutrum. Nunc consequat eros et varius iaculis. Curabitur posuere lectus ac ante facilisis malesuada.",

  "Nunc ut mi maximus, consequat nulla in, lacinia elit. Curabitur scelerisque quam nec lacus pulvinar, non gravida ipsum ornare. Nunc neque neque, vestibulum ut malesuada et, scelerisque congue ipsum. Donec nisl quam, sollicitudin sed lacus congue, finibus volutpat leo. Proin velit tellus, efficitur quis porta sed, convallis id libero. Aliquam a velit non dui semper interdum a non augue. Curabitur varius erat sed massa maximus pharetra.",

  "Maecenas nec quam libero. Mauris bibendum arcu eu tellus scelerisque, eget egestas ante maximus. Quisque tristique fermentum enim, a placerat massa ultricies ac. Nullam eu lobortis eros, a lobortis ante. Aliquam erat volutpat. Duis vel magna posuere, semper nibh sodales, vestibulum leo. Sed aliquet quis tellus a placerat. Praesent id congue quam. Nam ullamcorper vestibulum ex quis ullamcorper. Proin mollis diam ut sodales viverra. Donec volutpat nibh et tortor blandit, vitae tempus mi condimentum. Nunc eget vehicula ipsum.",

  "Vestibulum in fringilla tortor. Cras hendrerit tincidunt sem, sed convallis eros egestas convallis. Sed quis nibh eleifend, vehicula felis nec, egestas quam. Duis congue mauris orci, at auctor libero aliquam maximus. Etiam mattis lacinia velit sit amet imperdiet. Sed sit amet luctus risus. Sed pharetra leo vel pellentesque molestie. Nulla quis ligula ipsum. Donec at lacinia tellus. Quisque elit ipsum, lobortis eu mauris sit amet, tristique lobortis augue. Praesent ac pretium felis. Nam pulvinar diam leo, sed luctus nisi pellentesque nec. Nam egestas, metus aliquam facilisis laoreet, ante purus placerat magna, vel sodales eros lorem ac sem.",

  "Aenean consequat volutpat lacinia. Integer ac risus tristique, interdum arcu sed, efficitur dui. Vestibulum convallis tempus risus a blandit. Etiam eget sapien vitae ex maximus dapibus non in quam. Phasellus vestibulum a urna nec laoreet. Vestibulum placerat elit sit amet facilisis aliquam. Proin elementum ligula lorem, ac ultricies metus cursus eu. Ut fermentum consectetur elit, id facilisis velit tincidunt quis. Curabitur facilisis id leo ac tincidunt. In ac mi vel urna ullamcorper placerat.",

  "Mauris et massa nec nibh sollicitudin varius. Aenean varius, odio nec dapibus laoreet, risus sem iaculis lacus, dapibus lobortis mauris est in nunc. Proin quis mi in neque sagittis scelerisque. Phasellus luctus vel odio imperdiet facilisis. Nam ullamcorper vulputate aliquam. Etiam finibus convallis erat a dapibus. Pellentesque eget imperdiet nulla. Donec et mauris a nunc scelerisque sodales. Vivamus dictum ante ac lorem consectetur tincidunt. Proin placerat, est eu malesuada aliquam, risus nisl pharetra sem, eu ultrices dui dolor vel tortor. Nam sem mi, pulvinar et orci ut, sollicitudin viverra odio.",
];

let input = document.getElementById("input");
let paraContainer = document.querySelector(".para");
let generateButton = document.getElementById("generateBtn");
generateButton.addEventListener("click", generateParagraph);



function generateParagraph(e) {
  let value = Number.parseInt(input.value);
  if (isNaN(value) || value <=0 || value > 10) {
    let random = Math.floor(Math.random() * paraArray.length);
    paraContainer.innerHTML = `<p>${paraArray[random]}</p>`;
  } else {
    randomParagraph();
  }
}

function randomParagraph() {
  let shuffleArray = shuffle(paraArray);
  let data = shuffleArray.slice(0, input.value);
  let paras = data.map((element) => {
    return `<p>${element}\n</p><br>`;
  });

  paraContainer.innerHTML = paras.join("");
}

function copyParagraph() {
  navigator.clipboard.writeText(paraContainer.textContent);

  let mainDiv = document.getElementById("message");
  let message = document.createElement("div");
  message.classList.add("div");
  message.innerText = `Copy to Clipboard`;
  mainDiv.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 2000);
}

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

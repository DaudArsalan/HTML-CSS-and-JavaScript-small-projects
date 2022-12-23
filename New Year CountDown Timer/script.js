let endDate = "31 December 2023 11:59:59 PM";
let input = document.querySelectorAll("input");

function countDown() {
  let end = new Date(endDate);
  let now = new Date();
  let diff = (end - now) / 1000;

  if (diff < 0) {
    let message = document.getElementById("message");
    message.innerHTML = `HAPPY NEW YEAR`;

    return;
  }

  input[0].value = Math.floor(diff / 86400);
  input[1].value = Math.floor((diff / 3600) % 24);
  input[2].value = Math.floor((diff / 60) % 60);
  input[3].value = Math.floor(diff % 60);
}

setInterval(() => {
  countDown();
});

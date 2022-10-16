const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

const generateSubmit = (e) => {
  e.preventDefault();
  clearUi();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;

  const generateQrCode = (url, size) => {
    const qrCode = new QRCode("qrcode", {
      text: url,
      width: size,
      height: size,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  };

  showSpinner();

  setTimeout(() => {
    hideSpinner();
    generateQrCode(url, size);

    setTimeout(() => {
      const saveUrl = qr.querySelector("img").src;
      createSaveBtn(saveUrl);
    }, 50);
  }, 1000);
};

form.addEventListener("submit", generateSubmit);

const clearUi = () => {
  qr.innerHTML = ``;
  const saveLink = document.getElementById("save-link");
  if (saveLink) {
    saveLink.remove();
  }
};

const showSpinner = () => {
  document.getElementById("spinner").style.display = "block";
};

const hideSpinner = () => {
  document.getElementById("spinner").style.display = "none";
};

const createSaveBtn = (saveUrl) => {
  const link = document.createElement("a");
  link.id = "save-link";
  link.classList =
    "bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5";
  link.href = saveUrl;
  link.download = "qrcode";
  link.innerHTML = "Save Image";
  document.getElementById("generated").appendChild(link);
};

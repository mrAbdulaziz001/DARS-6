function generateQR() {
    const text = document.getElementById("text").value;
    const qrColor = document.getElementById("qrColor").value;
    const bgColor = document.getElementById("bgColor").value;
    const canvas = document.getElementById("qrcode");
  
    if (!text) {
      alert("Iltimos, matn yoki URL kiriting!");
      return;
    }
  
    QRCode.toCanvas(canvas, text, {
      width: 200,
      margin: 2,
      color: {
        dark: qrColor,
        light: bgColor
      }
    }, function (error) {
      if (error) console.error(error);
    });
  }
  
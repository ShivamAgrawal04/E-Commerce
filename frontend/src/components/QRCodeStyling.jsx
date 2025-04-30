import React, { useEffect, useRef } from "react";
import QRCode from "qrcode.react"; // Using qrcode.react for QR code generation

const BurgerDotsQRCode = ({ value, imageUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Step 1: Generate the QR code using qrcode.react
    const qrCode = new QRCode(canvas, {
      text: value,
      render: "canvas",
      width: 256,
      height: 256,
      colorDark: "#000000", // Color for the QR code dots
      colorLight: "#ffffff", // Background color
      correctLevel: "H", // High error correction level
    });

    // Step 2: Overlay the custom image on the QR code's dots
    const qrImage = new Image();
    qrImage.src = imageUrl;

    qrImage.onload = () => {
      // Get the QR code's image data from the canvas
      const qrCodeData = context.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );
      const qrModuleSize = canvas.width / 21; // Each module size (standard QR code has 21x21 modules)

      qrImage.width = qrModuleSize * 0.4; // Adjust image size to fit on QR code modules
      qrImage.height = qrImage.width;

      // Loop through each pixel in the QR code's image data and replace dark modules with the image
      for (let rowIndex = 0; rowIndex < 21; rowIndex++) {
        for (let colIndex = 0; colIndex < 21; colIndex++) {
          const x = colIndex * qrModuleSize;
          const y = rowIndex * qrModuleSize;
          const pixelIndex = (rowIndex * canvas.width + colIndex) * 4;

          // Check if the module is dark (QR dot)
          if (qrCodeData.data[pixelIndex] === 0) {
            // Draw custom image in place of the QR module
            context.drawImage(
              qrImage,
              x + qrModuleSize * 0.3,
              y + qrModuleSize * 0.3,
              qrImage.width,
              qrImage.height
            );
          }
        }
      }
    };
  }, [value, imageUrl]);

  return <canvas ref={canvasRef} width={256} height={256} />;
};

export default BurgerDotsQRCode;

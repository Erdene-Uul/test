const { faRightToBracket } = require("@fortawesome/free-solid-svg-icons");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "black-t-50": "rgba(0,0,0,0.5)",
      },
      fontFamily: {
        Roboto: ["Roboto"],
        "Nunito-Sans": ["Nunito Sans"],
        Montserrat: ["Montserrat"],
      },
      spacing: {
        34: "136px",
        112: "28rem",
        120: "30rem",
        "300px": "324px",
        "100px": "100px",
        0.1: "1px",
      },
      colors: {
        blueMain: "#33A0FF",
        OrangeMain: "#FFF3E4",
        btnOrange: "#F48c06",
        btnYagaan: "#ff6f4f",
        btnSmColor: "#f4c467",
        bgServiceColor: "#f8fbfb",
        BigTextColor: "#515577",
        // Gradient Color
        Zaryellow1: "#F8EF7E",
        Zaryellow2: "#f8cf7e",
        ZarGreen1: "#84DB7E",
        ZarGreen2: "#BDDB7E",
<<<<<<< HEAD
        DogColor1: "#E5F1F7",
        DogColor2: "#CCE3EC",
        DogTextColor:"#C1DFEC",
        CatColor1: "#FCF5D1",
        CatColor2: "#FBF2B9",
        CatTextColor: "#FBEEA6",
        RabbitColor1: "#F7f6f9",
        RabbitColor2: "#f4f6fa",
        RabbitTextColor: "#e9ecf2",
        BirdColor1: "#f7f9e1",
        BirdColor2 : "#e9f4c6",
        BirdTextColor: "#dbe5bb",
        HedgehogColor1: "#FBF0F2",
        HedgehogColor2: "#F9EBEC",
        HedgehogTextColor: "#F9EBEC",
        FishColor1: "#F0FBFD",
        FishColor2: "#E2ECFA",
        FishTextColor: "#D4E3FB",
        TurtleColor1: "#EBEEFB",
        TurtleColor2: "#DFE4F9",
        TurtleTextColor: "#D2D9F9",
        MouseColor: "#E9F7F6",
        MouseColor2:"#CEECEB",
        MouseTextColor: "#C0E7E5",
         

=======
        footerTop1: "#EFAB3E",
        greengradient: "rgba(180deg, #36BC49 0%, #03A21A 100%)",
>>>>>>> 26f19c854f7409dcea06d3891f7e1db062f9aa9b
      },
      borderRadius: {
        coverRadius: "5rem",
      },
      minHeight: {
        custom: "400px",
      },
    },
  },
  plugins: [],
};

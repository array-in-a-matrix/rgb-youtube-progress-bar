// const CSS = `
// .ytp-play-progress,
// .ytp-swatch-background-color {
//   animation: RGB 25s ease-in-out infinite;  
// }

// @keyframes RGB {
//   from {
//       background-color: #FF0000;
//   }

//   7% {
//       background-color: #FF7700;
//   }

//   14% {
//       background-color: #FFDD00;
//   }

//   21% {
//       background-color: #00FF00;
//   }

//   28% {
//       background-color: #0000FF;
//   }

//   35% {
//       background-color: #8A2BE2;
//   }

//   42% {
//       background-color: #C77DF3;
//   }

//   49% {
//       background-color: #C77DF3;
//   }

//   56% {
//       background-color: #8A2BE2;
//   }

//   63% {
//       background-color: #0000FF;
//   }

//   70% {
//       background-color: #00FF00;
//   }

//   77% {
//       background-color: #FFDD00;
//   }

//   84% {
//       background-color: #FF7700;
//   }

//   91% {
//       background-color: #FF0000;
//   }
// }
// `;

pageMod.PageMod( {
    include: '*',
    contentStyleFile: [
      data.url( 'style.css' )
    ]
  })
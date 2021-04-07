module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
};

// O Babel é um transcompilador JavaScript gratuito e de código aberto usado
//principalmente para converter o código ECMAScript 2015+ em uma versão compatível
//com versões anteriores do JavaScript que pode ser executada por mecanismos JavaScript mais antigos.

import { initScrollReveal } from "./scrollReveal.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
);
hoverChangeDescription(
  ".python",
  "Python é uma linguagem de programação de alto nível, dinâmica, interpretada, modular, multiplataforma e orientada a objetos"
);
hoverChangeDescription(
  ".java",
  "A linguagem de programação Java foi criada para resolver problemas que surgiriam com a crescente conectividade entre dispositivos e com a necessidade de linguagens mais portáteis."
);
hoverChangeDescription(
  ".R",
  "R é uma linguagem de programação multi-paradigma orientada a objetos, programação funcional, dinâmica, fracamente tipada, voltada à manipulação, análise e visualização de dados."
);
hoverChangeDescription(
  ".c",
  "A linguagem de programação C++ foi criada para ser uma extensão da linguagem C, com o objetivo de adicionar recursos de programação orientada a objetos (POO)."
);
hoverChangeDescription(
  ".sql",
  "O MySQL foi criado para atender à crescente necessidade de um sistema de gerenciamento de banco de dados relacional (SGBD) que fosse eficiente, robusto, fácil de usar e gratuito."
);
import Parser from '../../utils/parser.js';
//import fs from "fs";
describe('Parser', () => {
  let parser;

  beforeAll(() => {
    const html = `
    <html>
      <head>
        <title>Test</title>
      </head>
     <body>
      <div id="root">
        <a href="www.google.com"></a>
        <a href="www.facebook.com"></a>
        <img src="image1.png"></img>
        <img src="image2.png"></img>
        <p>Hello</p>
        <p>World</p>
      </div>
     </body>
    </html>`;
    parser = new Parser(html);
  });
  
  it('Debería obtener el título de la página', () => {
    const title = parser.getTitle();
    expect(title).toBe('Test');
  });

  it('Debería obtener correctamente una array de links', () => {
    const links = parser.getLinks();
    expect(links).toEqual(['www.google.com', 'www.facebook.com']);
  });

  it('Debería obtener los párrafos de la página', () => {
    const paragraphs = parser.getParagraphs();
    expect(paragraphs).toEqual(['Hello', 'World']);
  });

  it('Debería obtener correctamente una array de imágenes', () => {
    const images = parser.getImages();
    expect(images).toEqual(['image1.png', 'image2.png']);
  });

  

  

});
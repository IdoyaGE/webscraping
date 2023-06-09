import jsdom from 'jsdom';
//Objeto parse sin funcionalidad

/**
 * Clase que se encarga de parsear el html de una página web
 * @class 
 */
class Parser {
    /**
     * 
     * Constructor de la clase
     * @constructor 
     * @param {string} html -html de la página web 
     */
    constructor(html){
        /**
         * @property {string} html -html de la página web
         * @private
         */
        this.html = html;   
        this.loadDocument();
    }
    /**
     * Carga el html en un objeto de tipo document
     * @method 
     * @private
     * @returns {void}
          */

loadDocument(){
    const JSDOM =jsdom.JSDOM;
    const dom =new JSDOM(this.html);
    this.document = dom.window.document;
   
    }
    /**
     * Devuelve el título de una página web
     * @method
     * @returns {string[]} -Links de la página
     */
    getTitle(){
        return this.document.querySelector("title").textContent;
    }
    /**
     * Devuelve el array de Links
     * @method
     * @returns {string[]} -Links de la página web
     */
    getLinks(){
        const links = Array.from(this.document.querySelectorAll("a"));
        return links.map((link)=> link.href.replace(/\/$/, '')); // remove last slash

    }
    /**
     * Devuelve el array de parrafos
     * @method
     * @returns {string[]} -Párrafos de la página web
     */
    getParagraphs() {
        const paragraphs = Array.from(this.document.querySelectorAll("p"));
        return paragraphs.map((p) => p.textContent);
    }
    /**
     * Devuelve las imágenes de una página web
     * @method
     * @returns {string[]} -Imágenes de la página web
     * @example 
     * const hmtl = "<html><body><img src='http://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Collage_of_Six_Cats-02.jpg/250px-Collage_of_Six_Cats-02.jpg"
     * const parser = new Parser(html);
     * const images = parser.getImages()
     * // returns ["http://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Collage_of_Six_Cats-02.jpg/250px-Collage_of_Six_Cats-02.jpg"]
     */
    getImages() {
        const images = Array.from(this.document.querySelectorAll("img"));
        return images.map((img) => img.src);
    }
}

export default Parser;
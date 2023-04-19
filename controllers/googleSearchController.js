import Scraper from "../utils/scraper.js";
import Parser from "../utils/parser.js";

async function searchLinks(query) {
    
    //scraper
    const scraper = new Scraper();
    await scraper.init();
    const url = `https://www.google.com/search?q=${query}`;
    const html = await scraper.getPageContent(url);
    //parser
    const parser = new Parser(html);
    const links = parser.getLinks();
    await scraper.close();
    return links; 

}

export default {
    searchLinks
}


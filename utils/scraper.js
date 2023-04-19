import puppeteer from "puppeteer";
//antes de llamar al scraper llamar al init
class Scraper{
    constructor(){
        this.browser = null;
        this.page = null;
        }
    async init(){
        this.browser = await puppeteer.launch();
        this.page = await this.browser.newPage();
    }
    async getPageContent(url){
        await this.page.goto(url);
        return await this.page.content();
    }
    async close(){
        await this.browser.close();
    }
}
export default Scraper;
import Scraper from "../../utils/scraper.js";

//Parser en may porque es una clase
describe('Scraper', () => {
    let scraper;
//para inicializar el scraper, asíncrono tiene que hacer el init
    beforeAll(async () => {
        scraper =new Scraper();
        await scraper.init();
        });

    afterAll(async () => {
        await scraper.close();
    });
    it("Debería obtener el contenido de una página", async() => {
        const url ="https://www.google.com";
        const content = await scraper.getPageContent(url);
        expect(content).toContain("<title>Google</title>");
    });


});
import googleSearchController from "../../controllers/googleSearchController.js";


describe("Google search controller", () => {

it("Debería conseguir los link de una búsqueda de Google", async() => {
    const query ="wikipedia"
    const links =await googleSearchController.searchLinks(query);
    expect(links).toContain("https://www.wikipedia.org");
    }) 
})



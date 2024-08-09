class _Page {

    page_content_node = "";
    page_notFound = "./page/404/index.html";

    constructor() {}

    open(pageId = "business") {
        const url_page = `./page/${pageId}/index.html`;
        this.apply_html(this.page_notFound);
        
        fetch(url_page)
            .then(et => { 
                if(et.ok){ 
                    // et.text().then(ex => { this.apply_html(ex); }); 
                    this.apply_html(url_page);
                }
                else{ this.apply_html(this.page_notFound); }
            })
            .catch(et => { this.apply_html("./page/404/index.html"); })
    }

    apply_html(link_page) {
        $("iframe.content-page").src = link_page;
        
        // if(window["setup_page"] != undefined){ window.setup_page(); }
    }
}
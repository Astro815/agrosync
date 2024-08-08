class _Page {

    page_content_node = "";
    page_notFound = "";

    constructor() {
        fetch("./page/404/index.html").then(et => { et.text().then(ex => { this.page_notFound = ex; }); });
    }

    open(pageId = "business") {
        this.apply_html(this.page_notFound);
        
        fetch(`./page/${pageId}/index.html`)
            .then(et => { 
                if(et.ok){ et.text().then(ex => { this.apply_html(ex); }); }
                else{ this.apply_html(this.page_notFound); }
            })
            .catch(et => { this.apply_html(this.page_notFound); });
        // this.page_content_node.innerHTML = name_papageIdge;
    }

    apply_html(html) {
        $("div.content-page").innerHTML = html;
    }
}
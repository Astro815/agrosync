const App = new _App();
const Page = new _Page();

window.onload = () => {
    // OnClick to Footer Buttons
    $$("footer > label > input").forEach(e => {
        e.onclick = () => {
            Page.open(e.dataset.page);
        }
    });

    Page.open("business");
};
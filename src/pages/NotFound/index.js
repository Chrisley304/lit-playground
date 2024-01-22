// src/index.js
import { LitElement, html } from "lit";
import "@components/General/Layout";

class NotFound extends LitElement {
    render() {
        return html`<div>
            <layout-app>
                <h1>Error 404</h1>
                <p>Page not found</p>
                <a href="/">Go to home</a>
            </layout-app>
        </div>`;
    }
}

customElements.define("not-found-app", NotFound);

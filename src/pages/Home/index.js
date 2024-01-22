// src/index.js
import { LitElement, html } from "lit";
import "@components/General/Layout";

class Home extends LitElement {
    render() {
        return html`
            <layout-app>
                <h1>Home Page</h1>
            </layout-app>
        `;
    }
}

customElements.define("home-app", Home);

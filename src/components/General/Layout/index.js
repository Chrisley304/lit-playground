import { LitElement, html, css } from "lit";
import "@components/General/NavBar";

class Layout extends LitElement {
    static styles = css`
        .page_container {
            /* width: 100%; */
            margin: 20px 10px;
        }
    `;

    render() {
        return html`<div class="layout">
            <navbar-app></navbar-app>
            <div class="page_container"><slot></slot></div>
        </div>`;
    }
}

customElements.define("layout-app", Layout);

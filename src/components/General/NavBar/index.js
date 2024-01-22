import { LitElement, html, css } from "lit";

class NavBar extends LitElement {
    static styles = css`
        .navbar_container {
            display: flex;
            background-color: #283198;
            color: white;
            align-items: center;
            justify-content: space-between;
            padding: 5px 20px;
        }

        .navbar_links {
            display: flex;
            list-style: none;
        }

        .navbar_links li {
            margin: 0 10px;
            cursor: pointer;
        }

        a {
            text-decoration: none;
            color: white;
        }
    `;

    render() {
        return html`<div class="navbar_container">
            <h3><a href="/">Lit Playground</a></h3>
            <ul class="navbar_links">
                <li><a href="/">Home</a></li>
                <!-- <li>About</li>
                <li>Contact</li> -->
            </ul>
        </div>`;
    }
}

customElements.define("navbar-app", NavBar);

import { Router } from "@vaadin/router";

function initRouter() {
    const router = new Router(document.querySelector("#app"));

    router.setRoutes([
        {
            path: "/",
            component: "home-app",
            action: () => import("@pages/Home"),
        },
        {
            path: "(.*)",
            component: "not-found-app",
            action: () => import("@pages/NotFound"),
        },
    ]);
}

window.addEventListener("load", () => initRouter());

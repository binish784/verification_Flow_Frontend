import SuccessPage from "../pages/success.page";
import VerifyPage from "../pages/verify.page";

const routes = [
    {
        "label" : "Success",
        "path" : "/success",
        "component" : SuccessPage,
    },
    {
        "label" : "Verify",
        "path": "/",
        "component": VerifyPage
    }
]

export default routes;


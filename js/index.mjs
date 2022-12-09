import { validatedForms } from "./form/validate-form.mjs";
import { offlineFeedback } from "./display/signup-feedback/display-logout-feedback.mjs";
import { findPostsHandlers, postHandlers, signupHandlers } from "./handlers/index.mjs";
import { displayProfileData } from "./display/post/display-profile-data.mjs";
import { getRequest } from "./api/api-requests/request-type/get-request.mjs";

const path = location.pathname;

validatedForms();
if (path === "/profile/index.html" || path === "/profile/") {
   postHandlers();
   getRequest();
   displayProfileData();
} else if (path === "/home/index.html" || path === "/home/") {
   postHandlers();
   getRequest();
   findPostsHandlers();
} else if (path === "/post/index.html" || path === "/post/") {
   getRequest();
} else {
   offlineFeedback();
   signupHandlers();
}

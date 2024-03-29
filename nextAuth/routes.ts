export const privateRoutes: string[] = ["/job"];

export const authRoutes: string[] = ["/signup"];

// When the user is not logged in and tries to access protected routes, redirect to the login page
export const DEFAULT_REDIRECT_LOGIN_URL: string = "/signup";

// When the user is logged in and tries to access the login page, redirect to the dashboard
export const DEFAULT_REDIRECT_HOME_URL: string = "/job";

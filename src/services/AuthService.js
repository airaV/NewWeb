const Authservice = {
    isAuthenticated: false,
    authenticate() {
        Authservice.isAuthenticated = true;
    },
    signout() {
        Authservice.isAuthenticated = false;
    }
    };
    export default Authservice

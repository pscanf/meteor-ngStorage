Package.describe({
    summary: "localStorage and sessionStorage done right for AngularJS"
});

Package.on_use(function (api, where) {
    api.use("ngMeteor", "client");

    // ngStorage files.
    api.add_files("lib/ngStorage-v0.3.0.js", "client");

    // Client files.
    api.add_files("init.js", "client");
});

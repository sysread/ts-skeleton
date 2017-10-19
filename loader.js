require.config({baseUrl: 'dist/'});
requirejs(['app'], (app) => {app.main()});

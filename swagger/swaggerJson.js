const swaggerJSDoc =require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Blog Analytics",
            version: "1.0.0",
            description: "Blog analytics APIs",
            license: {
                name: "Licensed Under MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "JSONPlaceholder",
                url: "https://jsonplaceholder.typicode.com",
            },
        },
        
        
        servers: [
            {
                url: "https://blog-analytics-kncc.onrender.com/",
                description: "Development server",
            },
        ],
    },
    apis: ["./swagger/*.js"],
};
const specs = swaggerJSDoc(options);
module.exports =specs;

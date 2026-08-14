const projects = [
    {
        id: 1,
        slug: "simple-ecommerce",

        featured: true,

        title: "Simple E-Commerce",

        shortDescription:
            "Full Stack E-Commerce application built using Django REST Framework and React.",

        description:
            "A complete full stack e-commerce application with JWT authentication, product management, protected routes and PostgreSQL database integration.",

        github: "https://github.com/siddarthasubedi1",

        demo: "",

        image:
            "https://images.unsplash.com/photo-1556740749-887f6717d7e4",

        technologies: [
            "Python",
            "Django",
            "DRF",
            "React",
            "PostgreSQL",
            "JWT",
        ],

        features: [
            "User Authentication",
            "JWT Login System",
            "Product CRUD",
            "Protected Routes",
            "Responsive Design",
            "REST APIs",
        ],
    },

    {
        id: 2,
        slug: "electro-ecommerce",

        featured: true,

        title: "Electro E-Commerce",

        shortDescription:
            "Electronics e-commerce platform built with Django templates.",

        description:
            "An online electronics store developed using Django templates, models and views with product management and shopping cart functionality.",

        github: "https://github.com/siddarthasubedi1",

        demo: "",

        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c",

        technologies: [
            "Python",
            "Django",
            "HTML",
            "CSS",
            "Bootstrap",
        ],

        features: [
            "Product Listings",
            "Shopping Cart",
            "Checkout Flow",
            "Responsive Layout",
        ],
    },
    {
        id: 3,
        slug: "jwt-authentication",

        featured: true,

        title: "Jwt Authentication Django Rest Framework",

        shortDescription:
            "JWT authentication implementation for Django REST Framework.",

        description:
            "A secure JWT authentication system built with Django REST Framework, including user registration, login, and token management.",

        github: "https://github.com/siddarthasubedi1",

        demo: "",

        image:
            "/images/jwt-authentication.png",

        technologies: [
            "Python",
            "Django-REST-Framework",
            "PostgreSQL",
            "Postman",
            "JWT",
            "React"

        ],

        features: [
            "Register User",
            "Login User",
            "User Listings",
            "Password change",
            "Reset Password",
            "JWT Token",
            "Refresh Token",

        ],
    },
];

export default projects;
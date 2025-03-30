//navigation//

document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("navbarNav").classList.toggle("hidden");
});

//framework//

const ts = [
    {
        name: "Node JS",
        item: "Library",
        photo:
            "https://imgs.search.brave.com/3s62TQnB8XHcVwVnh_FRqYt4AyELLrpWxXrEXPYKxSs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q5L05vZGUuanNf/bG9nby5zdmc",
        text:
            "Node.js is a runtime environment that allows developers to execute JavaScript on the server side, built on Chrome’s V8 engine. Its event-driven, non-blocking I/O model makes it lightweight and efficient, perfect for building scalable, high-performance applications like APIs, real-time chat apps, or streaming services. Node.js has transformed full-stack development by unifying the language across the frontend and backend.",
    },
    {
        name: "React",
        item: "Framework",
        photo: "https://media.istockphoto.com/id/902738024/vector/atom-icon.webp?a=1&b=1&s=612x612&w=0&k=20&c=McIWvhzNxxYx6At2GrP81260k0dvCMImSb6Vy-EUxCo=",
        text:
            "React is a popular JavaScript library developed by Facebook for building dynamic and interactive user interfaces. It follows a component-based architecture, allowing developers to create reusable UI elements that efficiently update when data changes, thanks to its virtual DOM. React’s declarative approach simplifies the process of designing complex, responsive frontends, making it a go-to choice for single-page applications and modern web development.",
    },
    {
        name: "MongoDB",
        item: "Database",
        photo: "https://imgs.search.brave.com/O30EpwNsW3bPSfuHALBS1WjQRW-019H8s2l8KGlHExM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL3Rh/bmRwZnVuL3NraWxs/LWljb25zL21haW4v/aWNvbnMvTW9uZ29E/Qi5zdmc",
        text:
            "MongoDB is a leading NoSQL database that stores data in flexible, JSON-like documents rather than traditional tables. This schema-less design makes it ideal for handling unstructured or semi-structured data, enabling rapid development and scalability. With its ability to manage large datasets and support for horizontal scaling, MongoDB is widely used in applications requiring real-time analytics, content management, or evolving data structures.",
    },
    {
        name: "Express JS",
        item: "Framework",
        photo: "https://imgs.search.brave.com/DZqhRgeja0LEjMFzA0X2-Qs5Ak3QhrSO28PvuhFRmvg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9ub2RlLWpz/LWljb24tNDU0eDUx/Mi1uenRvZngxNy5w/bmc",
        text:
            "Express is a minimalist and flexible web framework for Node.js that simplifies server-side development. It provides robust tools for routing, middleware integration, and handling HTTP requests, making it easy to build RESTful APIs or web applications. Known for its simplicity and extensibility, Express serves as the backbone for many Node.js projects, streamlining backend logic with minimal overhead.",
    },
    {
        name: "Tailwind CSS",
        item: "Designing",
        photo: "https://imgs.search.brave.com/yn7q6BEBtw-3Ddjp1pJPVoJuBeKlYLg54DYcC-BTqLI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/LmljZXBhbmVsLmlv/L1RlY2hub2xvZ3kv/c3ZnL1RhaWx3aW5k/LUNTUy5zdmc",
        text:
            "Tailwind CSS is a utility-first CSS framework that accelerates styling by offering a set of pre-designed, composable classes. Unlike traditional frameworks like Bootstrap, Tailwind avoids opinionated components, giving developers fine-grained control over design while promoting rapid prototyping. Its responsive utilities and customization options make it a favorite for crafting modern, mobile-friendly interfaces efficiently.",
    },
    {
        name: "Git",
        item: "Version Control",
        photo:
            "https://imgs.search.brave.com/ujGNF_z7JHq1Kj-bJ_Df7y6GIRgb6c7AMpgmU_HsTpQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FiL0dpdC1pY29u/LXdoaXRlLnN2Zw",
        text:
            "Git is a distributed version control system designed to track changes in source code during software development. It enables multiple developers to collaborate seamlessly, manage project history, and revert to previous states if needed. With features like branching and merging, Git supports agile workflows and is an essential tool for maintaining code integrity in both solo and team projects.",
    }
];

let index = 1;

const updateTs = () => {
    const { name, item, photo, text } = ts[index];
    document.getElementById("techstack").innerHTML = text;
    document.getElementById("tech-image").src = photo;
    document.getElementById("techname").innerHTML = name;
    document.getElementById("role").innerHTML = item;
    index++;
    if (index > ts.length - 1) index = 0;
};

setInterval(updateTs, 5000);

//intro//

function init() {
    const slides = document.querySelectorAll(".slide");
    const pages = document.querySelectorAll(".page");
    const portfolio = document.querySelector(".portfolio");
    const frameworks = document.querySelector(".frameworks");
    const backgrounds = [
        `radial-gradient(#2B3760,rgb(83, 255, 112))`,
        `radial-gradient(#4E3022,rgb(48, 203, 255))`,
        `radial-gradient(#4E4342,rgb(90, 255, 167))`,
    ];
    let current = 0;
    let scrollSlide = 0;

    pages[0].style.opacity = 1;
    pages[0].style.pointerEvents = "auto";

    slides.forEach((slide, index) => {
        slide.addEventListener("click", () => {
            changeDots(slide);
            nextSlide(index);
            scrollSlide = index;
        });
    });

    function changeDots(dot) {
        slides.forEach(slide => slide.classList.remove("active"));
        dot.classList.add("active");
    }

    function nextSlide(pageNumber) {
        const nextPage = pages[pageNumber];
        const currentPage = pages[current];

        const tl = new TimelineMax({
            onStart: () => slides.forEach(slide => slide.style.pointerEvents = "none"),
            onComplete: () => slides.forEach(slide => slide.style.pointerEvents = "all"),
        });

        tl.to(portfolio, 0.5, { backgroundImage: backgrounds[pageNumber], ease: "power2.inOut" })
            .fromTo(currentPage, 0.5, { opacity: 1, pointerEvents: "all" }, { opacity: 0, pointerEvents: "none", ease: "power2.inOut" })
            .fromTo(nextPage, 0.5, { opacity: 0, pointerEvents: "none" }, { opacity: 1, pointerEvents: "all", ease: "power2.inOut" }, "-=0.5");

        current = pageNumber;

        if (pageNumber === 3) {
            document.addEventListener("wheel", handleScrollAfterThirdSlide);
            document.addEventListener("touchmove", handleScrollAfterThirdSlide);
        }
    }

    function handleScrollAfterThirdSlide(e) {
        if (e.deltaY > 0 || e.touches) {
            if (scrollSlide === 3) {
                TweenMax.to(portfolio, 0.5, {
                    opacity: 0, onComplete: () => {
                        portfolio.style.display = "none";
                        TweenMax.to(frameworks, 0.5, { opacity: 1 });
                    }
                });

                document.removeEventListener("wheel", handleScrollAfterThirdSlide);
                document.removeEventListener("touchmove", handleScrollAfterThirdSlide);

                document.addEventListener("wheel", handleScrollBackToThirdSlide);
                document.addEventListener("touchmove", handleScrollBackToThirdSlide);
            }
        }
    }

    function handleScrollBackToThirdSlide(e) {
        if (e.deltaY < 0 || e.touches) {
            TweenMax.to(frameworks, 0.5, {
                opacity: 0, onComplete: () => {
                    portfolio.style.display = "block";
                    TweenMax.to(portfolio, 0.5, { opacity: 1 });
                    nextSlide(2);
                }
            });

            document.removeEventListener("wheel", handleScrollBackToThirdSlide);
            document.removeEventListener("touchmove", handleScrollBackToThirdSlide);
        }
    }

    document.addEventListener("wheel", throttle(scrollChange, 1500));
    document.addEventListener("touchmove", throttle(scrollChange, 1500));

    function scrollChange(e) {
        scrollSlide += e.deltaY > 0 ? 1 : -1;
        scrollSlide = Math.min(Math.max(scrollSlide, 0), 3);
        changeDots(slides[scrollSlide]);
        nextSlide(scrollSlide);
    }
}

function throttle(func, limit) {
    let inThrottle;
    return function () {
        if (!inThrottle) {
            func.apply(this, arguments);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

init();

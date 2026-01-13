import { useEffect } from "react";

const useNavbarAutoClose = () => {
    useEffect(() => {
        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
        const navbarCollapse = document.querySelector(".navbar-collapse");

        const handleClick = () => {
            if (window.innerWidth < 992 && navbarCollapse?.classList.contains("show")) {
                const bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapse);
                bsCollapse?.hide();
            }
        };

        navLinks.forEach((link) => link.addEventListener("click", handleClick));

        return () => {
            navLinks.forEach((link) =>
                link.removeEventListener("click", handleClick)
            );
        };
    }, []);
};

export default useNavbarAutoClose;

//function to handle the view of the resume
export const handleViewPDF = (url) => {
    window.open(url, "_blank");
};
//Function to handle the download of the resume
export function handleDownload() {
    const link = document.createElement("a");
    link.href = "../Static/Resume/res.pdf"; //resume file path
    link.download = "Nicholas_Kiplimo_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

//Function to handle the mobile menu
export const handleSmoothNavigate = (section, setIsOpen) => {
    setIsOpen(false);

    let id = "";

    switch (section) {
        case "home":
            id = "home";
            break;
        case "experience":
            id = "experience";
            break;
        case "skills":
            id = "skills";
            break;
        case "contact":
            id = "contact";
            break;
        default:
            return;
    }

    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

export const nav_links = [
    { id: "#skills", label: "Skills" },
    { id: "#experience", label: "Experience" },
    { id: "/projects", label: "Projects" },
    { id: "#contact", label: "Get In Touch" },
];



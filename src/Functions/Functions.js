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

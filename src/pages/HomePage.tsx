import { useState } from "react";
import NavBar from "../components/NavBar";
import HeaderSection from "../components/HeaderSection";
import ProjectSection from "../components/ProjectSection";
import { Project } from "../types/Project";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";


// TODO:
// 1) Fix menu height on mobile. Should be 100%.
// 2) Fix menu not being on top.
// 3) Fix reponsivness of projects on mobile to always have two by two.
// 4) Fix breakpoints (Desktop >= 1200px, Laptop < 1200px AND >= 800px, Mobile <= 400px)


const theme: DefaultTheme = {
    backgroundColor: '#242424',
    containerColor: '#484A47',
    textColorPrimary: '#ffffffde',
    accentColor: '#C851FF',
    borderColor: '#4D4B4B',
};


const pages = ['Home', 'Portfolio', 'Blog', 'About Me', 'Contact Me']

const projects: Project[] = [
    {
        title: 'Quick Inventory',
        summary: 'A software for mass updating inventory numbers on Commerce7.',
        image: 'https://marsbytesapps.com/wp-content/uploads/2023/09/upload.png',
        link: 'https://marsbytesapps.com/quick-inventory/',
    },
    {
        title: 'ShipStation Custom Store',
        summary: 'Pulls orders from Commerce7 in JSON format, and converts to XML for ShipStation, then pushes tracking notifications back.',
        image: 'https://marsbytesapps.com/wp-content/uploads/2023/09/shipstation-logo-dark-1024x241.png',
        link: 'https://marsbytesapps.com/shipstation/',
    },
    {
        title: 'Bulk Product Update',
        summary: 'UI interface for mass updating products on the Commerce7 platform.',
        image: 'https://marsbytesapps.com/wp-content/uploads/2023/09/shipstation-logo-dark-1024x241.png',
        link: 'https://marsbytesapps.com/bulk-product-update/',
    }
]

export default function HomePage() {
    //TODO: Build other pages, use this to route.
    const [activePage, setActivePage] = useState('Home')
    return (
        <ThemeProvider theme={theme}>
            <NavBar
                pages={pages}
                activePage={activePage}
                setActivePage={setActivePage}
            />
            <HeaderSection />
            <ProjectSection Projects={projects} />
        </ThemeProvider>
    )
}

"use client";

import { useState } from "react";
import { HamburgerButton } from "../HamburgerButton/HamburgerButton";
import { Logo } from "../Logo/Logo";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = (isOpen) => {
        setMenuOpen(isOpen);
    };
    
    return (
        <header className={styles.header}>
            <Logo />
            <Navbar menuOpen={menuOpen}/>
            <HamburgerButton onToggle={handleToggle}/>
        </header>
    )
}
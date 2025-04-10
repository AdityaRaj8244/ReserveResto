import React from "react";

function Footer() {
    return (
        <footer style={styles.footer}>
            <p>&copy; {new Date().getFullYear()} ReserveResto. All rights reserved.</p>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: "black", // Matching the landing page
        color: "white",
        textAlign: "center",
        padding: "15px",
        fontSize: "16px",
        // position: "",
        bottom: "0",
        width: "100%",
    },
};

export default Footer;

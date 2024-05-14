import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <div style={{ marginBottom: "20px" }}>
                <FontAwesomeIcon icon={faBan} style={{ fontSize: "48px", color: "red" }} />
            </div>
            <h4 style={{ fontSize: "24px", color: "#333", marginBottom: "20px" }}>Error 404 - Page Not Found</h4>
            <button style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={() => navigate('/')}>Back to home</button>
        </div>
    );
}

export default NotFound;

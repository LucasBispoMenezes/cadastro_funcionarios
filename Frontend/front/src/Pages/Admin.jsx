import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../helpers/isAuthenticated";

export const Admin = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = isAuthenticated();
        if (!token) return navigate("/");
    });
    return (
        <nav>
            <Link to="/admin/Cadastro">Users</Link>
        </nav>
    );
};

import React, { useState, useEffect } from "react";
import AdminLayoutPage from "./Layout";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "antd";
const AdministratorPage = () => {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get("/user")
            .then((res) => {
                setSession(res.data.branch_name);
                setLoading(false);
                if (window.location.pathname === "/") {
                    navigate("/administrator/dashboard");
                }
            })
            .catch((err) => {
                setSession("error");
                if (window.location.pathname !== "/") {
                    navigate("/");
                    setLoading(false);
                }
            });
    }, []);

    return (
        <Skeleton loading={loading}>
            <AdminLayoutPage />
        </Skeleton>
    );
};
export default AdministratorPage;

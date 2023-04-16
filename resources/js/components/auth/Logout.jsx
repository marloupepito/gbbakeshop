import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Modal } from 'antd';
function LogoutSession(props) {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
 
      const handleOk = () => {
        setLoading(true)
        axios.post('/logout')
        .then(res=>{
          localStorage.clear();
           navigate("/");
           setIsModalOpen(false);
           setLoading(false)
        })
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      useEffect(() => {
        setIsModalOpen(props.show)
      }, [props.show]);

    return ( 
        <>
        <Modal title="Logout Session" open={isModalOpen} onCancel={handleCancel}>
            <p>Are you sure you wanna logout?</p>
            <Button type="primary" loading={loading} onClick={handleOk} className="offset-md-9" danger>
            Logout
            </Button>
        </Modal>
        </>
     );
}

export default LogoutSession;
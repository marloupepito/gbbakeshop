import React, { useState, useEffect } from 'react';
import {  Checkbox, Form, InputNumber ,Button, Modal } from 'antd';
import { AppNotification } from '../../../../components/Notification';
import { BranchNameParams } from '../../../../routes/Params';
import { useNavigate } from "react-router-dom";
function AcceptRequestIngredients(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notify,setNotify] =useState(false)
    const branchname = BranchNameParams().props.children
    const navigate = useNavigate();
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    useEffect(() => {
        if(props.show !== false){
            axios.post('/get_ingredients_list',{
                branchid:props.show[2],
                requestid:props.show[3],
            })
            .then(res=>{
                setIsModalOpen(props.show[1])
                setData(res.data.status)
            })
        }
    }, [props.show[0]]);

  
    return ( 
        <>
        {
      notify ==='success'?<AppNotification type="success" message="Received successfully!"/>:notify ==='error'?<AppNotification type="error" message="Error!"/>:""
    }
        <Modal title="Delivery Received" open={isModalOpen} onCancel={handleCancel}>


        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Ingredients</th>
      <th scope="col">Quantity</th>
      <th scope="col">Bind</th>
    </tr>
  </thead>
  <tbody>

        {
            data.map(res=>(
                <tr key={res.key}>
                <td>{res.ingredients_name}</td>
                <td>{res.ingredients_quantity}</td>
                <td>{res.ingredients_bind}</td>
              </tr>
            ))
        }
   
  </tbody>
</table>
     

        </Modal>
        </>
     );
}

export default AcceptRequestIngredients;
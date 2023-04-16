import React, { useState, useEffect } from 'react';
import { Button, Modal,Input } from 'antd';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { BranchNameParams } from '../../../../../routes/Params';
import { SearchBranchId } from '../../../../../routes/Search';
import { AppNotification } from '../../../../../components/Notification';
import moment from 'moment'
const { TextArea } = Input;
const ModalBakers = (props) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data,setData] = useState([])
  const [production,setProduction] = useState(props.data[2])
   const [key,setKey] = useState(props.data[0])
   const [charge,setCharge] = useState(props.data[4])
  const branch = BranchNameParams().props.children
  const branchid = SearchBranchId().props.children
  const [notify,setNotify] =useState(false)
  const [remarks,setRemarks] =useState(null)

//this is the calculation of grams to kilo -> res.bind === 'Grams'?res.ingredients_quantity-(parseInt(res.quantity) / 1000):res.ingredients_quantity-res.quantity
  const showModal = () => {
    setIsModalOpen(true); 
     setLoading(false)
     // setData(props.data)
     // alert(props.data[0])
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  function handleSubmit(event){
    if(production === null || production === '' || charge === null || charge === ''){
      setNotify('error')
       function myGreeting() {
           setNotify(false)
           setLoading(false)
          }
          setTimeout(myGreeting, 1500);
    }else{
       setLoading(true)
        // axios.post('/goto_bread_report',{
        //   charges:charge - (production-props.data[3]) <= 0?0:charge - (production-props.data[3]),
        //   charge:production-props.data[3],
        //   branchid:branchid,
        //   production:production,
        //   remarks:remarks,
        //   id:key,
        //   date:moment().format('MMMM DD, YYYY A')
        // })
         axios.post('/goto_bread_report',{
          charge:charge,
          branchid:branchid,
          production:production,
          remarks:remarks,
          id:key,
          assigned:JSON.parse(localStorage.getItem("user")).name,
          userid:JSON.parse(localStorage.getItem("user")).id,
          date:moment().format('MMMM DD, YYYY A')
        })
        .then(res=>{
      //    console.log('waa',res.data.status)
          setNotify('success')
          setLoading(false)
          setIsModalOpen(false);
           navigate('/administrator/'+branch.replace(/ /g,'_')+'/loading')
        })
        .catch(err=>{
          setNotify('error')
           function myGreeting() {
           setNotify(false)
           setLoading(false)
          }
          setTimeout(myGreeting, 1500);
        })
    }
   
  }

 const breadQuantityHandler =(e)=>{
  setProduction(e.target.value)
  }

  const remarksHandler =(e)=>{
    setRemarks(e.target.value)
  }
 const chargeHandler =(e)=>{
  setCharge(e.target.value)
  }


  
  return (
    <>
    {
      notify ==='success'?<AppNotification type="success" message="Production has been added!"/>:notify ==='error'?<AppNotification type="error" message="Please input current pieces!"/>:""
    }
      <Button  block type="dashed" size="small" danger onClick={showModal}>
        Check
      </Button>
      <Modal title={props.data[1]} open={isModalOpen} onOk={handleOk} maskClosable={false} onCancel={handleCancel}
      >
        <b>Target pieces per kilo: {props.data[3]}</b><br />
        Current piece
        <Input
          onChange={breadQuantityHandler}
            defaultValue={props.data[2]}
           style={{
            width:'100%'
                }} placeholder="Current pieces" />
                Charge
                <Input
          onChange={chargeHandler}
           style={{
            width:'100%'
                }} placeholder="Charge" defaultValue={props.data[4]} />
                 <TextArea rows={3} className="mt-2" onChange={remarksHandler} placeholder="Remarks" maxLength={191} />
      
      <Button key="submit" type="primary" block className='mt-3' loading={loading} onClick={(e)=>handleSubmit(data)}>
          Approved
        </Button>
      </Modal>
    </>
  );
};
export default ModalBakers;
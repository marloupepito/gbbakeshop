import React, { useState, useEffect } from 'react';
import { Button, Modal,Input,Dropdown } from 'antd';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { BranchNameParams } from '../../../../routes/Params';
import { SearchBranchId } from '../../../../routes/Search';
import { AppNotification } from '../../../../components/Notification';
import moment from 'moment'
const { TextArea } = Input;
const CodeModal = (props) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data,setData] = useState([])
  const [quantity,setQuantity] = useState(1)
  const branch = BranchNameParams().props.children
  const branchid = SearchBranchId().props.children
  const [notify,setNotify] =useState(false)
  const [target,setTarget] =useState(props.data.production_quantity*quantity)
  const [actualTarget,setActualTarget] =useState(props.data.production_quantity)
  const [remarks,setRemarks] =useState(null)


//this is the calculation of grams to kilo -> res.bind === 'Grams'?res.ingredients_quantity-(parseInt(res.quantity) / 1000):res.ingredients_quantity-res.quantity
  const showModal = () => {
    setIsModalOpen(true); 
      axios.post('/get_production_code',{
        randomid:props.data.random_id
        })
        .then(res=>{
          
          setData(res.data.status)
          const values =res.data.status.map(res=>res.bind === 'Grams'?res.ingredients_quantity-(parseInt(res.quantity) / 1000):res.ingredients_quantity-res.quantity)
          let hasNegative = values.some(v => v < 0);
          if(!hasNegative){
            setLoading(false)
          }else{
            setLoading(true)
          }
        
        })  
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  function handleSubmit(event){

    if(quantity === null || quantity === '' || quantity === '0' || quantity === 0){
      setNotify('error')
       function myGreeting() {
           setNotify(false)
           setLoading(false)
          }
          setTimeout(myGreeting, 1500);
    }else{
      setLoading(true)
      console.log(event)
        axios.post('/add_bread_list',{
          data:event,
          branchid:branchid,
          quantity:quantity,
          remarks:remarks,
          target:props.data.production_quantity*quantity,
          actualTarget:actualTarget,
          baker:JSON.parse(localStorage.getItem("user")).name,
          date:moment().format('MMMM DD, YYYY A')
        })
        .then(res=>{
          setIsModalOpen(false);
          setNotify('success')
           setLoading(true)
           function myGreeting() {
           setNotify(false)
           setLoading(false)
          }
          setTimeout(myGreeting, 1500);
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
  setQuantity(e.target.value)
  }

  const remarksHandler =(e)=>{
    setRemarks(e.target.value)
  }
   const actualTargetHandler =(e)=>{
    setActualTarget(e.target.value)
  }

const items = [
  {
    key: '1',
    label: 'Delete',
  },
  // {
  //   key: '2',
  //   label: '2nd item',
  // },
  // {
  //   key: '3',
  //   label: '3rd item',
  // },
];
  
  const onMenuClick = (e) => {
  setLoading(true)
  axios.post('/delete_production_code',{
    id:e
  })
  .then(res=>{
     setIsModalOpen(false);
          setNotify('deleted')
           setLoading(true)
           function myGreeting() {
           setNotify(false)
           setLoading(false)
           setLoading(false)
            navigate('/administrator/'+branch+'/loading')
          }
          setTimeout(myGreeting, 1500);
  })
  .catch(err=>{
     setLoading(false)
  })
};
  return (
    <>
    {
      notify ==='success'?<AppNotification type="success" message="Production has been added!"/>:
      notify ==='delete'?<AppNotification type="success" message="Deleted successfully!"/>:
      notify ==='error'?<AppNotification type="error" message="Please input current quantity!"/>:""
    }
    

       <Dropdown.Button
       block size="medium" danger onClick={showModal}
      menu={{
        items,
        onClick: ()=>onMenuClick(props.data.random_id),
      }}
    >
       {props.data.code_name}
    </Dropdown.Button>
      <Modal title={props.data.code_name} open={isModalOpen} onOk={handleOk} maskClosable={false} onCancel={handleCancel}
      >
        <b>Bread Name: {props.data.bread_name}</b><br />
        <b>Target quantity per kilo: {props.data.production_quantity}</b><br />
        <b>Main Target: {props.data.production_quantity * quantity}</b><br />
        Quantity
        <Input
        type="number"
        defaultValue={1}
          onChange={breadQuantityHandler}
           style={{
            width:'100%'
                }} placeholder="quantity" />
                Actual Target
                <Input
                className=""
        type="number"
        defaultValue={props.data.production_quantity * quantity}
          onChange={actualTargetHandler}
           style={{
            width:'100%'
                }} placeholder="Actual Target" />
                 {/*<TextArea rows={3} className="mt-2" onChange={remarksHandler} placeholder="Remarks" maxLength={191} />*/}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Ingredients</th>
              <th scope="col">Quantity</th>
              <th scope="col">Current Remaining</th>
              <th scope="col">Calculation</th>
            </tr>
          </thead>
          <tbody>
          {data.map(res=>    
            <tr key={res.id+Math.random()}>
              <th scope="row">{res.ingredients_name}</th>
              <td>{res.bind === 'Grams'? ((parseInt(res.quantity) *quantity)/ 1000):
              parseInt(res.quantity)*quantity}{res.bind === 'Grams'?'kg':res.bind === 'Kilo'?'kg':'pcs'}</td>
              <td>{res.ingredients_quantity}kg</td>
              <td className={(res.bind === 'Grams'?res.quantity-(((parseInt(res.quantity)) / 1000)*quantity):
                (res.ingredients_quantity-res.quantity)*quantity) > 0?'':
              'text-danger'}>{res.bind === 'Grams'?(res.ingredients_quantity-(parseInt(res.quantity) / 1000)*quantity):
              (res.ingredients_quantity-(res.quantity*quantity))}kg</td>
            </tr>
          )}
          </tbody>
        </table>
      <Button key="submit" type="primary" block className='mt-3' loading={loading} onClick={(e)=>handleSubmit(data)}>
          Create Beginning
        </Button>
      </Modal>
    </>
  );
};
export default CodeModal;
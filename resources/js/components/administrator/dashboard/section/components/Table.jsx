import React, { useState, useEffect } from 'react';
import { Space, Table, Tag,Button,message, Popconfirm } from 'antd';
import { Link } from "react-router-dom";
import {DeleteTwoTone} from '@ant-design/icons';
import moment from 'moment'
import { useNavigate } from "react-router-dom";
import { BranchNameParams } from '../../../../routes/Params'
import Swal from 'sweetalert2'
function DashboardTable() {
  const [branches,setBranches] = useState([])
  const [loading,setLoading] = useState(true)
  const branchname = BranchNameParams().props.children
  const navigate = useNavigate();
  function deleteBranch(id){
    Swal.fire({
      title: 'Enter Your Password',
      input: 'password',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Delete it!',
      confirmButtonColor: '#d33',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        axios.post('/confirm_password',{
          username:localStorage.getItem("username"),
          password:login
        })
        .then(res=>{
          console.log(res.data.status)
          if(res.data.status === 'success'){
            setLoading(true)
            axios.post('/delete_branch',{
              id:id
            })
            .then(res=>{
              Swal.fire({
                icon: 'success',
                title: 'Your work has been deleted',
                showConfirmButton: false,
                timer: 1500
              })
              window.location='/administrator/dashboard';
            })
          }else{  
            Swal.fire({
              icon: 'error',
              title: 'Incorrect Password',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
 
  }
  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  };
  const columns = [
    {
      title: 'Branches',
      dataIndex: 'branch_name',
      key: 'branch_name',
      // width:'20%',
      // render: (text) => <Link type="link" to={"/administrator/dashboard/charts/"+text.replace(/ /g,'_')} >{text}</Link>,
    },
    // {
    //   title: 'Assigned Person',
    //   dataIndex: 'branch_assigned_person',
    //   key: 'branch_assigned_person',
    // },
    // {
    //   title: 'Branch Position',
    //   dataIndex: 'branch_position',
    //   key: 'branch_position',
    // },
    // {
    //   title: 'Username',
    //   dataIndex: 'username',
    //   key: 'username',
    // },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (text) => <div href="#">{moment(text).format('L')}</div>,
    },
  
    {
      title: '',
      key: 'action',
      render: (_, { id }) => (
          <Popconfirm
            title="Delete the Branch"
            description="Are you sure to delete this Branch?"
            onConfirm={()=>deleteBranch(id)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
          <DeleteTwoTone  twoToneColor="#eb2f96"  />
          </Popconfirm>
      ),
    },
  ];
  
  useEffect(() => {
    axios.post('/get_all_branch')
    .then(res=>{
      setBranches(res.data.status)
      setLoading(false)
    })
  }, []);
  return ( 
    <Table loading={loading} columns={columns} dataSource={branches} />
   );
}

export default DashboardTable;
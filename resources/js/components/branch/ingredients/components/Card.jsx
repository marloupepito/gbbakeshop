import React,{useState} from 'react';
import { CheckCircleOutlined, AlertOutlined } from '@ant-design/icons';
import { Card, Statistic,Button,message, Popconfirm } from 'antd';
import { DownOutlined, EditOutlined,DeleteTwoTone } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Edit from './Edit'
import { useNavigate } from "react-router-dom";
import { BranchNameParams } from '../../../routes/Params';


export default function IngredientsCard(props) {
 const [loadings, setLoadings] = useState([]);
 const navigate = useNavigate();
 const branchName = BranchNameParams().props.children.replace(/_/g,' ')

const confirm = (e) => {
  console.log(e);
   axios.post('/delete_branch_ingredients',{
    id:e
  })
  .then(res=>{
      setTimeout(() => {
            navigate('/branch/'+branchName+'/loading')
            message.success('Click on Yes');
          }, 1000);
  })

};
const cancel = (e) => {
  console.log(e);
  // message.error('Click on No');
};


// const items = [
//   {
//     key: '1',
//     label: (
//       <Button type="link" >
//        <Edit />
//       </Button>
//     ),
//      icon: <EditOutlined />,
//   },
//   {
//     key: '2',
//     label: (
//        <Popconfirm
//         title="Delete the task"
//         description="Are you sure to delete this task?"
//         onConfirm={confirm}
//         onCancel={cancel}
//         okText="Yes"
//         cancelText="No"
//       >
//        <Button type="link" >
//        Delete
//      </Button>
//      </Popconfirm>
//     ),
//     icon: <DeleteTwoTone />,
//   },
// ];


  return ( 
    <>
      <div className="site-statistic-demo-card">  
          <Card
             title={props.title}
          size="small"
          //  extra={<div><Edit data={props}/>
          //   <Popconfirm
          //       title="Delete the task"
          //       description="Are you sure to delete this task?"
          //       onConfirm={()=>confirm(props.id)}
          //       onCancel={cancel}
          //       okText="Yes"
          //       cancelText="No"
          //     >
          //         <DeleteTwoTone twoToneColor="red"/>
          //          </Popconfirm>
          //      </div>}
               >

       {/*    <Edit />
            <a href="#">
       Delete
      </a>*/}
       {/*    <Dropdown
          className="offset-md-11"
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <DownOutlined/>
                </Space>
              </a>
            </Dropdown>*/}

            <Statistic
           
              value={props.quantity}
              // precision={0}
              valueStyle={{
                color: parseInt(props.quantity) >= parseInt(props.notify)?'#3f8600':'#cf1322',
              }}
              prefix={parseInt(props.quantity) >= parseInt(props.notify)?<CheckCircleOutlined />:<AlertOutlined />}
              // suffix="%"
            />
            {props.bind}

         

          </Card>
        </div>
    </>
   );
}


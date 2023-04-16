import React, { useRef, useState,useEffect  } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table,Tag } from 'antd';
import Highlighter from 'react-highlight-words';
import AcceptRequestIngredients from './Modal3'
import {SearchBranchId} from '../../../../routes/Search';
import moment from 'moment'
const DeliveryTable3 = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const searchInput = useRef(null);
  const branchid = SearchBranchId().props.children
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  useEffect(() => {
    axios.post('/get_request_from_branch',{
      current:1,
      pageSize:10,
      branchid:branchid,
      status:'Received'
    })
    .then(res=>{
      setData(Object.values(res.data.status))
      setLoading(false)
    })
  }, []);


function acceptDelivery(request_id){
  setModal([Math.random(),true,branchid,request_id])
}
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'ID Request',
      dataIndex: 'request_id',
      key: 'request_id',
      width: '40%',
      ...getColumnSearchProps('request_id'),
    },
   
   
    {
        title: 'Status',
        key: 'ingredients_status',
        dataIndex: 'ingredients_status',
        render: (_, { ingredients_status }) => (
            <Tag color={ingredients_status === 'nice'?'green':'volcano'} key={ingredients_status}>
                 {ingredients_status}
               </Tag>
        ),
      
          width: '20%',
      },
      {
        title: 'Requested At',
        dataIndex: 'created_at',
        key: 'created_at',
        width: '20%',
        render: (_, { created_at }) => (
          <>
           {moment(created_at).format('L')+' '+moment(created_at).format('LT')}
           </>
      ),
      },
      {
        title: '',
        dataIndex: 'created_at',
        key: 'created_at',
        width: '5%',
        render: (_, { created_at,request_id }) => (
          <>
           <Button block type="primary" ghost onClick={(e)=>acceptDelivery(request_id)}>SHOW</Button>
           </>
        ),
      },
      // {
      //   title: '',
      //   dataIndex: 'created_at',
      //   key: 'created_at',
      //   width: '5%',
      //   render: (_, { created_at }) => (
      //     <>
      //      <Button block danger>DELETE</Button>
      //      </>
      //   ),
      // }
  ];
  function PaginateNext (e){
    setLoading(true)
    axios.post('/get_bread_every_branch',{
      current:e.current,
      pageSize:e.pageSize,
      branchid:branch_id
    })
    .then(res=>{
      setData(res.data.status)
      setLoading(false)
    })
  }
  return (
    <>
    <AcceptRequestIngredients show={modal}/>
  <Table columns={columns}
     loading={loading} onChange={(e)=>PaginateNext(e)} dataSource={data} />
  </>);
};
export default DeliveryTable3;
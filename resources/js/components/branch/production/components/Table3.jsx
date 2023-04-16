import React, { useRef, useState,useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table,Tag,Popover  } from 'antd';
import Highlighter from 'react-highlight-words';
import {ModalSoldOut} from '../section/components/Modal';
import { SearchBranchId } from '../../../routes/Search';
import moment from 'moment'
const BreadReport = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchInput = useRef(null);
const branch_id=SearchBranchId().props.children


useEffect(() => {

  axios.post('/get_bread_every_branch',{
    current:1,
    pageSize:10,
    branchid:branch_id,
    status:'breads'
  })
  .then(res=>{
    setData(res.data.status.data)
    setLoading(false)
  })

}, []);


  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };


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
      title: 'ID',
      dataIndex: 'key',
      key: 'key',
      width: '2%',
    },
    {
      title: 'Bread Name',
      dataIndex: 'bread_name',
      key: 'bread_name',
      width: '15%',
      ...getColumnSearchProps('bread_name'),
    },
     {
      title: 'Beginning(pcs)',
      dataIndex: 'beginning',
      key: 'beginning',
      width: '15%',
      ...getColumnSearchProps('beginning'),
    },
    {
      title: 'New Production(pcs)',
      dataIndex: 'production',
      key: 'production',
      width: '15%',
      ...getColumnSearchProps('production'),
       render: (_, { production }) => (
        <Tag color={production === null?'volcano':'green'} key={production}>
             {production === null?'None New production':production}
           </Tag>
    ),
    },
    {
      title: 'Overdone',
      dataIndex: 'overs',
      key: 'overs',
      width: '15%',
      ...getColumnSearchProps('overs'),
    },
    {
      title: 'Charge(pcs)',
      dataIndex: 'charge',
      key: 'charge',
      width: '10%',
      ...getColumnSearchProps('charge'),
      sorter: (a, b) => a.charge.length - b.charge.length,
      sortDirections: ['descend', 'ascend'],
       render: (_, { charge,charge_remarks,key,total }) => (
       <Popover content={
      <table className="table">
          <tbody>
            <tr>
              <td className="p-0" scope="row">Target pieces:</td>
              <td className="p-0"><b>{parseInt(total)+parseInt(charge)}</b></td>
            </tr>
            <tr>
              <td className="p-0" scope="row">New production:</td>
              <td className="p-0"><b>{parseInt(total)}</b></td>
            </tr>
            <tr>
              <td className="p-0" scope="row">Charge: </td>
              <td className="p-0"> <b> {charge}</b></td>
            </tr>
             <tr>
              <td className="p-0" colSpan="2"><b> {charge_remarks}</b></td>
            </tr>
          </tbody>
        </table>
        } title="Remark Charges">
            <Tag color='volcano' key={key}>
             {charge}
           </Tag>
      </Popover>
     ),
    },
    // {
    //     title: 'Total Amount',
    //     dataIndex: 'price',
    //     key: 'total',
    //     width: '10%',
    //     render: (_, { price,total }) => (
    //       <b >
    //     {price * total}
    //     </b>
    //   ),
    //   },
       {
      title: 'Total(pcs)',
      dataIndex: 'total',
      key: 'total',
      width: '10%',
      ...getColumnSearchProps('total'),
      render: (_, { total }) => (
        <Tag color={total <= 10?'volcano':'green'} key={total}>
             {total}
           </Tag>
     ),
    },
    {
        title: '',
        key: 'sold',
        dataIndex: 'sold',
        render: (_, { total,bread_name,key,price,branchid,production,created_at }) => (
         // <div>
         // {moment().format('A') === moment(created_at).format('A')?'Unavailable':<ModalSoldOut data={[key,bread_name,total,price,branchid]}/>}
         //      {/*  {moment(created_at).add(12, 'hours').format('LLL')  < moment(new Date(created_at)).format('LLL')?
         // <ModalSoldOut data={[key,bread_name,total,price,branchid]}/>:'Unavailable'}
         //    */}
         //    </div>
          <ModalSoldOut data={[key,bread_name,total,price,branchid,production]}/>
        ),
          width: '5%',
      },
     
  ];
  function PaginateNext (e){
    setLoading(true)
    axios.post('/get_bread_every_branch',{
      current:e.current,
      pageSize:e.pageSize,
      branchid:branch_id,
      status:'breads'
    })
    .then(res=>{
      setData(res.data.status.data)
      setLoading(false)
    })
  }
  return  <Table loading={loading} onChange={(e)=>PaginateNext(e)} columns={columns} dataSource={data} />;
};
export default BreadReport;
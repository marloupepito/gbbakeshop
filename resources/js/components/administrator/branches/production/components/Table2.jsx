import React, { useRef, useState,useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table,Tag } from 'antd';
import Highlighter from 'react-highlight-words';
import moment from 'moment'
import { SearchBranchId } from '../../../../routes/Search';
const BreadOutTable = () => {
  const branch_id=SearchBranchId().props.children
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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
    axios.post('/get_branch_bread_out',{
      current:1,
    pageSize:10,
      branchid:branch_id
    })
    .then(res=>{
      setData(res.data.status.data)
      setLoading(false)
    })
    .catch(err=>{
      
    })
  }, []);

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
      title: 'Bread Name',
      dataIndex: 'bread_name',
      key: 'bread_name',
      width: '15%',
      ...getColumnSearchProps('bread_name'),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      width: '10%',
      ...getColumnSearchProps('quantity'),
      render: (_, { quantity }) => (
        <Tag color={quantity <= 10?'green':'green'} key={quantity}>
             {quantity}
           </Tag>
    ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: '10%',
      ...getColumnSearchProps('price'),
      sorter: (a, b) => a.price.length - b.price.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Total Amount',
        dataIndex: 'total',
        key: 'total',
        width: '10%',
        ...getColumnSearchProps('total'),
        sorter: (a, b) => a.total.length - b.total.length,
        sortDirections: ['descend', 'ascend'],
        render: (_, { sold,price,quantity }) => (
          <>
          {price * quantity}
          </>
      ),
      },
    {
        title: 'Bread Sold At',
        key: 'created_at',
        dataIndex: 'created_at',
        ...getColumnSearchProps('price'),
      sorter: (a, b) => a.price.length - b.price.length,
        render: (_, { created_at }) => (
           <>
           {moment(created_at).format('L')+' '+moment(created_at).format('LT')}
           </>
        ),
          width: '10%',
      },
     
  ];
  function PaginateNext (e){
    setLoading(true)
    axios.post('/get_branch_bread_out',{
      current:e.current,
      pageSize:e.pageSize,
      branchid:branch_id
    })
    .then(res=>{
      setData(res.data.status.data)
      setLoading(false)
    })
  }
  return <Table onChange={(e)=>PaginateNext(e)} loading={loading} columns={columns} dataSource={data} />;
};
export default BreadOutTable;
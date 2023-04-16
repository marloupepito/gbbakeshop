import React, { useState, useEffect } from 'react';
import { Image } from 'antd';
import { Button, Tooltip, Space } from 'antd';
import { FileImageTwoTone } from '@ant-design/icons';
import { SearchBranchId } from "../../../routes/Search";
import { useParams } from 'react-router-dom';
function Images(props) {
    let { dates } = useParams();
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState([]);
    const [path, setPath] = useState('');
    const branch_id = SearchBranchId().props.children;
    useEffect(() => {
        axios.get('/api/get_branch_images/'+branch_id+'/'+dates.replace(/-/g,' ').replace('.',',')+'/'+props.imageid)
        .then(res=>{
            setData(res.data.status)
        })
        setPath(window.location.origin)
        console.log(path)
    }, []);


    return ( 
        <>
        
        <Button type="link"  onClick={() => setVisible(true)} icon={<FileImageTwoTone
        twoToneColor="red"
         style={{
        fontSize: '24px',
      }}/>}  />

      <div
        style={{
          display: 'none',
        }}
      >
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
            {
                data.map(res=>    
                (<Image key={res.key} src={path+'/'+res.images.replace('public','storage')} />)
                )
            }
        </Image.PreviewGroup>
      </div>
   
    </>
     );
}

export default Images;
import React, { useState, useEffect } from "react";
import { SearchBranchId } from "../../../routes/Search";
import { DatePicker, Button, Popover } from "antd";
import moment from "moment";
import Menus from "../components/Menus";
import { useParams } from 'react-router-dom';
function ProductionRecords() {
    const branch_id = SearchBranchId().props.children;
    const [data, setData] = useState([]);
    let { dates } = useParams();
   // const [date, setDate] = useState(dates.replace(/-/g,' ').replace('.',','));
    const [dateSearch, setDateSearch] = useState(null);
    
    useEffect(() => {
      //  window.location.pathname.split('/')[5].replace(/-/g,' ')
     // setDate(dates.replace(/-/g,' ').replace('.',','))
        axios
            .post("/get_branch_record", {
                current: 1,
                pageSize: 200,
                branchid: branch_id,
                date: dates.replace(/-/g,' ').replace('.',','),
            })
            .then((res) => {
                setData(res.data.status);
            });
    }, [dates]);

    const onChange = (date, dateString) => {
        setDateSearch(dateString);
    };

    const searchDate = () => {
        setDate(dateSearch);
    };
    const branch = window.location.pathname.split("/")[2].replace(/_/g, " ");

    return (
        <div className="row">
            {/* <div className="row">
            <div className="col-md-3">
             <DatePicker showTime = {{ user12hours: true, format: "a" }} 
             allowClear={false}  
             format="MMMM DD, YYYY A"  
            onChange={onChange} 
            // defaultValue={moment()}
            className="mb-3 w-100"/>

            </div>
             <div className="col-md-2">
             <Button type="primary" onClick={searchDate} className="w-100">Search</Button>
            </div>
         </div> */}
         <div className="col-md-2">
         <Menus />
         </div>
            
            <div className="col-md-10">
                {data.length !== 0 ? (
                    <table className="table">
                        <thead>
                            <tr>
                                <th width="10%">Cashier : </th>
                                <th width="20%">{data[0].assigned2}</th>
                                <th width="10%">Shift :</th>
                                <th width="20%">{moment().format("A")}</th>
                                <th width="10%">Branch :</th>
                                <th width="20%">{branch}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th width="8%">Sales Clerk:</th>
                                <th width="24%">{data[0].assigned1}</th>
                                <th width="8%">Trainee:</th>
                                <th width="24%">{data[0].assigned3}</th>
                                <th width="8%">Date :</th>
                                <th width="24%">{data[0].date}</th>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    ""
                )}

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Name of Bread</th>
                            <th scope="col">
                                Beginning<small>(pcs)</small>
                            </th>
                            <th scope="col">New Production</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                            <th scope="col">Bread Out</th>
                            <th scope="col">
                                Charge<small>(pcs)</small>
                            </th>
                            <th scope="col">
                                Remaining<small>(pcs)</small>
                            </th>
                            <th scope="col">Sold Bread</th>
                            <th scope="col">Sales</th>
                            {/*<th scope="col">Date</th>*/}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((res) => (
                            <tr key={res.key}>
                                <th>{res.bread_name}</th>
                                <td>{res.beginning}</td>
                                <td>{res.production}</td>
                                <td>{res.price}</td>
                                <th>
                                    {res.production === null
                                        ? res.beginning
                                        : parseInt(res.beginning) +
                                          parseInt(res.production)}
                                </th>
                                <td>{res.breadout}</td>
                                <td>
                                    <Popover
                                        content={
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            className="p-0"
                                                            scope="row"
                                                        >
                                                            Target pieces:
                                                        </td>
                                                        <td className="p-0">
                                                            <b>
                                                                {parseInt(
                                                                    res.total
                                                                ) +
                                                                    parseInt(
                                                                        res.charge
                                                                    )}
                                                            </b>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            className="p-0"
                                                            scope="row"
                                                        >
                                                            New production:
                                                        </td>
                                                        <td className="p-0">
                                                            <b>
                                                                {parseInt(
                                                                    res.total
                                                                )}
                                                            </b>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            className="p-0"
                                                            scope="row"
                                                        >
                                                            Charge:{" "}
                                                        </td>
                                                        <td className="p-0">
                                                            {" "}
                                                            <b> {res.charge}</b>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            className="p-0"
                                                            colSpan="2"
                                                        >
                                                            <b>
                                                                {" "}
                                                                {
                                                                    res.charge_remarks
                                                                }
                                                            </b>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        }
                                        title="Remark Charges"
                                    >
                                        <a href="#"> {res.charge}</a>
                                    </Popover>
                                </td>
                                <td>{res.remaining}</td>
                                <td>{res.soldout}</td>
                                <td>
                                    {res.remaining === null
                                        ? 0
                                        : parseInt(res.price) *
                                          parseInt(res.soldout)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductionRecords;

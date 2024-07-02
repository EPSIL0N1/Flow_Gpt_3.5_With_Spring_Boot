import React, { useEffect, useState } from 'react'
import {deleteReport, listReports} from '../services/ReportService.js'
import { useNavigate } from 'react-router-dom';

export default function ListReport() {

    // const dummyData = [
    //     {
    //         "id" : "1",
    //         "disease": "Blood Pressure",
    //         "level": "Normal",
    //         "addinfo": "Taking Medication"
    //     },
    //     {
    //         "id" : "2",
    //         "disease": "Thyroid",
    //         "level": "Average",
    //         "addinfo": "Not Taking Medication"
    //     },
    //     {
    //         "id" : "3",
    //         "disease": "Sleepiness",
    //         "level": "Normal",
    //         "addinfo": "Null"
    //     }
    // ]

    const [report, setReport] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {

        getAllReports();

    }, [])

    function getAllReports() {
        listReports().then((response) =>{
            setReport(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    function addNewReport(){
        navigator('/add-report');
    }

    function updateReport(id){
        navigator(`/edit-report/${id}`);
    }

    function removeReport(id)
    {
        deleteReport(id).then((response)=>
        {
            console.log(response.data);
            getAllReports();
        }).catch((error)=>{
            console.error(error);
        });

    }

    function openChatbot()
    {
        // navigator('/flow-gpt');
        window.location.href = 'http://localhost:8501/flow-gpt/';
    }

  return (
    <div className='container'>
      <br/><br/>

      <h2 className='text-center'>List of Reports</h2>
      <button className='btn btn-primary mb-2' onClick={addNewReport}>Add New Report</button>
      <table className='table table-hover table-bordered'>
        <thead>
            <tr>
                <th>Report Id</th>
                <th>Disease</th>
                <th>Level</th>
                <th>Additional Information</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                report.map(report => 
                    <tr key={report.id}>
                        <td>{report.id}</td>
                        <td>{report.disease}</td>
                        <td>{report.range}</td>
                        <td>{report.addinfo}</td>
                        <td>
                            <button className='btn btn-info' onClick={() => updateReport(report.id)}>Update</button>
                            <button className='btn btn-danger' onClick={() => removeReport(report.id)} style={{marginLeft: '10px'}}>Delete</button>
                        </td>
                    </tr>
                )
            }
        </tbody>
      </table>

            {/* <button className='btn btn-info' onClick={() => openChatbot(report)}> Talk to FlowGPT-3.5 💖 </button> */}
            <button className='btn btn-info' onClick={openChatbot}> Talk to FlowGPT-3.5 💖 </button>

    </div>
  )
}

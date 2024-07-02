import React, { useEffect, useState } from 'react'
import { createReport, getReportById, updateReport } from '../services/ReportService';
import { useNavigate, useParams } from 'react-router-dom';

export default function ReportComponent() {

    const {id} = useParams();

    const [disease, setDisease] = useState('');
    const [range, setRange] = useState('');
    const [addinfo, setAddinfo] = useState('');

    const [error, setError] = useState({
        disease:'',
        range:'',
        addinfo:''
    }); 

    function validateForm(error) {
        let valid = true;

        const errorCopy = {...error};
        
        if(disease.trim())
            {
                errorCopy.disease = ''
            }
        else{
            errorCopy.disease = 'Disease name is not specified';
            valid = false;
        }

        if(range.trim())
            {
                errorCopy.range = '';
            }
        else{
            errorCopy.range = 'Range name is not specified';
            valid = false;
        }

        if(addinfo.trim())
            {
                errorCopy.addinfo = '';
            }
        else{
            errorCopy.addinfo = 'Additional information is not specified';
            valid = false;
        }

        setError(errorCopy);
        return valid;

    }

    useEffect(() => {
        if(id)
        {
            getReportById(id).then((response) =>{
                setDisease(response.data.disease);
                setRange(response.data.range);
                setAddinfo(response.data.addinfo);
            }).catch(error => {
                console.log(error);
            })
        }

    }, [id])

    const navigator = useNavigate();

    function saveOrUpdateReport(e)
    {
        e.preventDefault();

        if(validateForm())
        {
            const report = {disease, range, addinfo};

            if (id)
                {
                    updateReport(id, report).then((response) =>
                    {
                        console.log(response.data);
                    }).catch((err)=>{
                        console.error(err);
                    })
                }

            else{

                createReport(report).then((response)=>{
                    console.log(response.data);
                }).catch(err=>{
                    console.error(err);
                })

            }

            navigator('/');
        }
    }

    function pageTitle()
    {
        if(id)
            {
               return  <h2 className="text-center"> Update Report </h2>
            }
        else
        {

           return <h2 className="text-center"> Add Report </h2>
        }
    }

    return (

    <div className='container'>
        <br /><br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
        <br /><br />
            {
                pageTitle()
            }
            <div className="card-body">
                <form action="#">
                    <div className="form-group mb-2">
                        <label className="form-label"> Disease </label>
                        <input type="text"
                        placeholder='Enter Disease Name'
                        name='disease'
                        value={disease}
                        className = {`form-control ${error.disease ? 'is-invalid' : ''}`}
                        onChange={(e) => {setDisease(e.target.value)}}
                        />

                        {error.disease && <div className='invalid-feedback'>{error.disease}</div>}
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label"> Range </label>
                        <input type="text"
                        placeholder='Enter High, Medium or Low'
                        name='range'
                        value={range}
                        className = {`form-control ${error.range ? 'is-invalid' : ''}`}
                        onChange={(e) => {setRange(e.target.value)}}
                        />
                        {error.range && <div className='invalid-feedback'>{error.range}</div>}
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label"> Additional Information </label>
                        <input type="text"
                        placeholder='Enter additional information'
                        name='addinfo'
                        value={addinfo}
                        className = {`form-control ${error.range ? 'is-invalid' : ''}`}
                        onChange={(e) => {setAddinfo(e.target.value)}}
                        />
                        {error.addinfo && <div className='invalid-feedback'>{error.addinfo}</div>}
                    </div>
                </form>
            </div>

            <button className='btn btn-success' onClick={saveOrUpdateReport}>saveReport</button>

        </div>
      </div>
    </div>
  )
}

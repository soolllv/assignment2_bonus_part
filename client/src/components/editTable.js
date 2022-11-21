import React, {Fragment, useState} from "react";
import { UpdateData } from "../backendAPI/updateData";

const EditTable = ({country}) => {
    const [cntr, setCountry] = useState(country);

    const updateCntr = async(e) =>{
        e.preventDefault();
        try {
            const data = {cntr};
            console.log(data.cntr);
            await UpdateData.updateDataFromCountry(data.cntr, cntr.cname)
        } catch (err) {
            console.error(err);
        }
    }
    return(
        <Fragment>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#cname_${country.cname}`}>
            Edit
            </button>

            <div className="modal fade" id={`cname_${country.cname}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Update Country</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>setCountry(country)}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <label htmlFor="cname">Country:</label>
                    <input type="text" className="form-control" name="cname" defaultValue={cntr.cname} readOnly/>
                    <label htmlFor="ppl">Population:</label>
                    <input type="text" className="form-control" name="ppl" defaultValue={cntr.population} onChange={(e)=> cntr.population = e.target.value}/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={(e) => updateCntr(e)}>Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default EditTable
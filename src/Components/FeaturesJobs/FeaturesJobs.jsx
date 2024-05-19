import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturesJobs = () => {
    const [job, setJob] = useState([]);
    const [dataLentgth, setDataLength]=useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl font-bold">Featured Jobs:{job.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-2 gap-6">
                    {
                        job.slice(0, dataLentgth).map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>
                <div className={dataLentgth === job.length && 'hidden'}>
                    <button onClick={()=>setDataLength(job.length)} className="btn btn-primary">Show All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturesJobs;
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

const handleJobFilter = filter => {
if(filter === 'all'){
    setDisplayJobs(appliedJobs)
}
else if(filter === 'remote'){
    const remotejobs = appliedJobs.filter(job=>job.remote_or_onsite === 'Remote')
    setDisplayJobs(remotejobs)
}
else if(filter ==='onsite'){
    const onsiteJobs = appliedJobs.filter(job=>job.remote_or_onsite ==='Onsite')
    setDisplayJobs(onsiteJobs)
}

}

    useEffect(() => {
        const storeJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job=>storeJobIds.includes(job.id))
            // console.log(jobsApplied);
            const jobsApplied = [];
            for (const id of storeJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs]);
    return (
        <div>
            <h2 className="text-2xl">Applied jobs here: {appliedJobs.length}</h2>
            <div>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content y-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=>handleJobFilter('all')}><a>All</a></li>
                    <li onClick={()=>handleJobFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=>handleJobFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            </div>
            <div>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <span>{job.job_title}-{job.company_name}: {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
            </div>
        </div>
    );
};

export default AppliedJobs;
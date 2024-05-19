
import { MdLocationOn } from "react-icons/md";
import { AiTwotoneDollar } from "react-icons/ai";
const Job = ({ job }) => {
    const {
        logo, job_title, company_name, remote_or_onsite,
        location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-blue-500 mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-blue-500 mr-4">{job_type}</button>
                </div>
                <div className="flex text-xl items-center mt-4">
                    <h2 className="flex mr-4"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{location}</h2>
                    <h2 className="flex"><AiTwotoneDollar className="text-2xl mr-2"></AiTwotoneDollar>{salary}</h2>

                </div>
                <div>
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;
import { useEffect, useState } from "react";
import "./app.scss";
import Job from "./components/Job";

import data from "./data.json";

function App() {
    const [jobs, setJobs] = useState(data);

    const [filters, setFilters] = useState([]);

    const removeFilter = (keyword) => {
      setFilters(filters.filter((filter) => filter !== keyword))
    }

    useEffect(() => {
        if (filters.length === 0) {
            setJobs(data);
            return;
        }

        const filteredJobs = data.filter((job) => {
            const { role, level, languages, tools } = job;
            const tags = [role, level, ...languages, ...tools];

            return filters.every((filter) => tags.includes(filter));
        });

        setJobs(filteredJobs);
    }, [filters])

    return (
        <>
            <header></header>
            <main>
                {filters.length > 0 && (
                    <div className="filters-container">
                      <div className="filters">
                        {filters.map((filter, i) => (
                            <div key={i} className="filter">
                                <span>{filter}</span>
                                <span onClick={() => removeFilter(filter)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                    >
                                        <path
                                            fill="#FFF"
                                            fillRule="evenodd"
                                            d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        ))}
                      </div>
                      <div className="clear-filters">
                        <span className="clear-all" onClick={() => setFilters([])}>Clear</span>
                      </div>
                    </div>
                )}
                <ul className="container">
                    {jobs.map((job, i) => (
                        <li key={i}>
                            <Job
                                filters={filters}
                                setFilters={setFilters}
                                jobDetails={job}
                            />
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}

export default App;

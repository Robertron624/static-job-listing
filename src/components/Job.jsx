/* eslint-disable react/prop-types */

import './index.scss'
const Job = ({jobDetails}) => {
  const {company, logo, featured, new: isNew, position, role, level, postedAt, contract, location, languages, tools} = jobDetails
  return (
    <div className={`job-container ${featured ? 'featured-job': ''}`}>
      <div className="desktop-left">
        <div className="desktop-company-image">
          <img src={logo} alt={company} />
        </div>
        <div className="desktop-left-text">
          <div className="job-header">
            <img src={logo} alt={company} />
            <span className="company-name">{company}</span>
            {isNew && <span className="new">New!</span>}
            {featured && <span className="featured">Featured</span>}
          </div>
          <span className="job-position">{position}</span>
          <div className="job-misc">
            <span className="long-ago">{postedAt}</span>
            <span className="contract">· {contract}</span>
            <span className="location">· {location}</span>
          </div>
        </div>

      </div>
      <div className="job-keywords">
        {languages.map((language, i) => (<span key={i} className="keyword">{language}</span>))}
        <span className="keyword">{role}</span>
        <span className="keyword">{level}</span>
        {tools.map((tool, i) => (<span key={i} className="keyword">{tool}</span>))}
      </div>
    </div>
  )
}

export default Job
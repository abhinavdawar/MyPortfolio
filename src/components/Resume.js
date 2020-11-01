import React from 'react'
import white_dot from '../assets/icons/react.svg'
import Bar from './Bar'

const languages = [
    {
        icon: white_dot,
        name: 'Java',
        level: '80'
    },
    {
        icon: white_dot,
        name: 'JavaScript',
        level: '60'
    },
    {
        icon: white_dot,
        name: 'HTML',
        level: '70'
    }
]

const tools = [
    {
        icon: white_dot,
        name: 'Ecllipse',
        level: '80'
    },
    {
        icon: white_dot,
        name: 'MySql',
        level: '60'
    },
    {
        icon: white_dot,
        name: 'Visual Studio Code',
        level: '70'
    }
]

const Resume = () => {
    return(
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card_heading">
                        Education
                    </h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title">
                            Information Technology
                        </h5>
                        <p className="resume-card_name">
                            GTBIT Affiliated to GGSIPU
                        </p>
                        <p className="resume-card_details">Currently a student at Guru Tegh Bahadur Institute of Technology of batch 2017-2021 with an aggregate of 7.9 CGPA.</p>
                    </div>
                </div>

                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card_heading">
                        Experience
                    </h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title">
                            Java Developer
                        </h5>
                        <p className="resume-card_name">
                            Evelyn Learning pvt ltd.
                        </p>
                        <p className="resume-card_details">Had a great experience working with this organization, developed my skills in Java and backend(Hibernate).</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language_heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language_body mt-3">
                        {
                            languages.map(Language =>
                                <Bar value={Language} />
                            )
                        }
                    </div>
                </div>

                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language_heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language_body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;
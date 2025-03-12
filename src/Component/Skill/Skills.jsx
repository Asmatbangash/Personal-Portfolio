import React from 'react'
import './Skills.css'

function Skills() {
  let skill_arr = [
    {lang :'HTML', percent : '90%'},
    {lang :'CSS', percent : '80%'},
    {lang :'JavaScript', percent : '75%'},
    {lang :'Boostrap', percent : '95%'},
    {lang :'Tailwind', percent : '70%'},
    {lang :'Reactjs', percent : '75%'},
    {lang :'Nodejs', percent : '75%'},
    {lang :'Expressjs', percent : '70%'},
    {lang :'MongoDB', percent : '80%'},
    {lang :'Git_and_GitHub', percent : '60%'},
  ]
  return (
<div className="skill-container">
  <h1 className='text-center'>our skills</h1>
  {skill_arr.map((skill) =>(
  <div className="skill-box">
    <span className="title">{skill.lang}</span>

    <div className="skill-bar">
      <span className={`skill-per ${skill.lang}`}>
        <span className="atooltip">{skill.percent}</span>
      </span>
    </div>
  </div>
  ))}
</div>

  )
}

export default Skills
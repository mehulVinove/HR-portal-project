import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the projects!', error);
        setError('Failed to fetch projects.');
      });
  }, []);

  return (
    <div className='centered-text '>
      <h2>Project List</h2>
      {error && <p>{error}</p>}
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            {project.name} - {project.description} - {project.status} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

import React from 'react';
import { converTitleToFilename } from '../../utils/helpers';
import { FaGithub } from 'react-icons/fa';

function Portfolio() {

  const projects = [
    {
      title: 'The Tech Blog',
      application: 'https://mlhamoy-tech-blog.herokuapp.com/',
      BfaBaby: 'https://github.com/mikhaelhamoy/challenge-week-14'
    },
    {
      title: 'Just Tech News',
      application: 'https://mhamoy-just-tech-news.herokuapp.com/',
      github: 'https://github.com/mikhaelhamoy/just-tech-news'
    },
    {
      title: 'Note Taker',
      application: 'https://challenge-week-11.herokuapp.com/',
      github: 'https://github.com/mikhaelhamoy/challenge-week-11'
    },
    {
      title: 'Zoo Keepr',
      application: 'https://enigmatic-citadel-65537.herokuapp.com/',
      github: 'https://github.com/mikhaelhamoy/zookeepr'
    },
    {
      title: 'Weather Dashboard',
      application: 'https://mikhaelhamoy.github.io/challenge-week-6/',
      github: 'https://github.com/mikhaelhamoy/challenge-week-6'
    },
    {
      title: 'Git it Done',
      application: 'https://mikhaelhamoy.github.io/git-it-done/',
      github: 'https://github.com/mikhaelhamoy/git-it-done'
    }
  ];

  return (
    <div>
      <div className="flex-row">
        {projects.map(({ title, application, github }) => (
          <div>
            <h5>
              <a className="mx-2 projectLink" href={application} target="_blank" rel="noreferrer noopener">{title}</a>
              <a className="projectLink" href={github} target="_blank" rel="noreferrer noopener"><FaGithub /></a>
            </h5>
            
            <img
              src={require(`../../assets/project/${converTitleToFilename(title)}`).default}
              alt={title}
              className="img-thumbnail mx-1"
              key={title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
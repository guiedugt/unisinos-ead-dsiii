import http from '../../utils/http';

export const createProject = payload => {
  return http.post('/newproject.php', payload).then(res => res.data);
};

export const fetchProjects = query => {
  const params = {
    ...query
  };

  return http.get('/listprojects.php', { params }).then(res => res.data);
};

export const deleteProject = id => {
  const params = {
    codigo_projeto: id
  };

  return http.delete('/deleteproject.php', { params }).then(res => res.data);
};

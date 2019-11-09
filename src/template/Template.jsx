import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';

import * as permissions from '../utils/permissions';

import * as Styled from './styles/Template.styles';

const Template = ({ children, match }) => {
  const selectedKeys = [match.path.substr(1)];

  const isNewUser = permissions.isNewUser();
  const isAdmin = permissions.isAdmin();
  const isInstitution = permissions.isInstitution();
  const isDonator = permissions.isDonator();

  return (
    <Styled.Container>
      <Styled.Header>
        <Menu mode="horizontal" selectedKeys={selectedKeys}>
          {isNewUser && (
            <Menu.Item key="new-user">
              <Link to="/new-user">Criar Usuário</Link>
            </Menu.Item>
          )}
          {(isAdmin || isInstitution) && (
            <Menu.Item key="manage-projects">
              <Link to="/manage-projects">Projetos</Link>
            </Menu.Item>
          )}
          {isDonator && (
            <Menu.Item key="donate">
              <Link to="/donate">Doar</Link>
            </Menu.Item>
          )}
        </Menu>
      </Styled.Header>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Container>
  );
};

Template.propTypes = {
  children: PropTypes.node.isRequired,
  match: PropTypes.object.isRequired
};

export default withRouter(Template);

import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios do github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/37390511?s=460&u=8df0e51b5c91f47639142f1c12f38291ef5d7fb9&v=4"
            alt="Thales Sousa"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable reactjs 🚀</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/37390511?s=460&u=8df0e51b5c91f47639142f1c12f38291ef5d7fb9&v=4"
            alt="Thales Sousa"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable reactjs 🚀</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/37390511?s=460&u=8df0e51b5c91f47639142f1c12f38291ef5d7fb9&v=4"
            alt="Thales Sousa"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable reactjs 🚀</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

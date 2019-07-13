import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import api from '../../services/api';
import Container from '../../components/Container';
import { Loading, Owner, IssueList, Filter, Pagination } from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    statusIssue: 'all',
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);
    const repository = await api.get(`/repos/${repoName}`);
    this.setState({ repository: repository.data });

    this.searchIssues('all');
  }

  async searchIssues({ value } = this.state) {
    this.setState({ issues: [], statusIssue: value });

    const { repository, page } = this.state;

    const issues = await api.get(`/repos/${repository.full_name}/issues`, {
      params: {
        state: value,
        per_page: 5,
        page,
      },
    });

    this.setState({
      issues: issues.data,
      loading: false,
    });
  }

  async handleNextPage(e) {
    e.preventDefault();
    const { page } = this.state;
    await this.setState({ page: page + 1 });
    this.searchIssues();
  }

  async handlePreviusPage(e) {
    e.preventDefault();
    const { page } = this.state;
    await this.setState({ page: page - 1 });
    this.searchIssues();
  }

  render() {
    const { repository, issues, loading, statusIssue, page } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <Filter
          value={statusIssue}
          onChange={select => this.searchIssues(select.target.value)}
        >
          <option value="all">Todos</option>
          <option value="open">Abertos</option>
          <option value="closed">Fechados</option>
        </Filter>
        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
        <Pagination>
          <button
            type="button"
            disabled={page < 2}
            onClick={e => {
              this.handlePreviusPage(e);
            }}
          >
            <FaAngleLeft />
          </button>
          <button
            type="button"
            onClick={e => {
              this.handleNextPage(e);
            }}
          >
            <FaAngleRight />
          </button>
        </Pagination>
      </Container>
    );
  }
}

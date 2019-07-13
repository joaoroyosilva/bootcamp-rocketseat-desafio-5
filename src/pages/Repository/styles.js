import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 10px;

  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    border-color: #ddd;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #ddd;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const Filter = styled.select`
  margin-top: 20px;
  background-color: #fff;
  border-radius: 4px;
  padding: 6px 9px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #7159c1;
  border: 2px solid #7159c1;
`;

export const Pagination = styled.div`
  padding-top: 20px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    padding: 6px;
    background-color: #7159c1;
    border: 0px;
    border-radius: 4px;
    color: #fff;
    font-size: 25px;
    outline: 0;

    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

import styled from 'styled-components'

const Container = styled.div`
  .title {
    color: #0d0d0d;
    font-size: 2.5rem;
    text-align: center;
    margin: 2rem 0 1rem;
  }

  .title .query-text {
    color: #e4ff00;
  }

  .movies-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .movies-container div {
    width: 30%;
    color: #fff;
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #6e0bd7;
    padding: 1rem;
  }

  .movies-container div img {
    max-width: 100%;
  }

  .movies-container div img,
  .movies-container div p {
    margin-bottom: 1rem;
  }

  .movies-container div h2 {
    margin-bottom: 1.5rem;
  }

  .movies-container div svg {
    color: #e4ff00;
  }

  .movies-container div a {
    background-color: #e4ff00;
    border: 2px solid #e4ff00;
    border-radius: 4px;
    color: #000;
    padding: 1rem 0.5rem;
    text-align: center;
    font-weight: bold;
  }

  .movies-container div a:hover {
    background-color: transparent;
    color: #e4ff00;
  }
`

export { Container }

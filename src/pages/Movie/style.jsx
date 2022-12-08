import styled from 'styled-components'

const Container = styled.div`
  color: #fff;
  display: grid;
  flex-direction: column;
  max-width: 600px;
  margin: 2rem auto;

  svg {
    font-size: 1.5rem;
    color: #e4ff00;
  }

  .movie-card {
    text-align: center;
  }

  .movie-card img,
  .movie-card h2,
  .movie-card p {
    margin-bottom: 1rem;
  }

  .movie-card h2 {
    font-size: 2rem;
  }

  .movie-card p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }

  .tagline {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }

  .info {
    margin-bottom: 1.5rem;
  }

  .info h3 {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .description p {
    line-height: 1.4rem;
  }
`
export { Container }

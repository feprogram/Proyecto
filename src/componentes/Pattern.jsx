// Pattern.jsx
import styled from 'styled-components';

const Pattern = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </StyledWrapper>
  );
};



const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 100%;
    min-height: 100vh;
    padding: 4rem 2rem;

    /* --- Pattern completo --- */
    --u: 5px;
    --c1: #ededee;
    --c2: #000000;
    --c3: #1e1e1e;
    --gp: 50% / calc(var(--u) * 16.9) calc(var(--u) * 12.8);

    background: conic-gradient(
          from 122deg at 50% 85.15%,
          var(--c2) 0 58deg,
          var(--c3) 0 116deg,
          #fff0 0 100%
        ) var(--gp),
      conic-gradient(from 122deg at 50% 72.5%, var(--c1) 0 116deg, #fff0 0 100%) var(--gp),
      conic-gradient(from 58deg at 82.85% 50%, var(--c3) 0 64deg, #fff0 0 100%) var(--gp),
      conic-gradient(
          from 58deg at 66.87% 50%,
          var(--c1) 0 64deg,
          var(--c2) 0 130deg,
          #fff0 0 100%
        ) var(--gp),
      conic-gradient(from 238deg at 17.15% 50%, var(--c2) 0 64deg, #fff0 0 100%) var(--gp),
      conic-gradient(
          from 172deg at 33.13% 50%,
          var(--c3) 0 66deg,
          var(--c1) 0 130deg,
          #fff0 0 100%
        ) var(--gp),
      linear-gradient(98deg, var(--c3) 0 15%, #fff0 calc(15% + 1px) 100%) var(--gp),
      linear-gradient(-98deg, var(--c2) 0 15%, #fff0 calc(15% + 1px) 100%) var(--gp),
      conic-gradient(
          from -58deg at 50.25% 14.85%,
          var(--c3) 0 58deg,
          var(--c2) 0 116deg,
          #fff0 0 100%
        ) var(--gp),
      conic-gradient(from -58deg at 50% 28.125%, var(--c1) 0 116deg, #fff0 0 100%) var(--gp),
      linear-gradient(90deg, var(--c2) 0 50%, var(--c3) 0 100%) var(--gp);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Caja de contenido */
  .content {
    max-width: 650px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    padding: 3rem 2rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
    text-align: center;
  }
`;

export default Pattern;

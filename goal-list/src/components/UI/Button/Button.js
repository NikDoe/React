import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #1f1f1f;
  border-radius: 5px;
  color: white;
  background: #222222;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  transition: background .3s ease-in-out;

  @media (min-width: 768px) {
    width: auto;
  }
  
  &:focus {
    outline: none;
  }
  &:hover,
  &:active {
    background: #353535;
    border-color: #222222;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

export default Button;

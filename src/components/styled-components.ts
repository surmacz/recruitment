import styled from 'styled-components'

export const Loading = styled.div`
  display: block;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  padding-top: 0.2rem;

  :after {
    content: ' ';
    display: block;
    width: 32px;
    height: 32px;
    margin: 16px;
    border-radius: 50%;
    border: 6px solid gray;
    border-color: gray transparent gray transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const PrimaryButton = styled.button`
  background-color: #1a73e8;
  border-radius: 5px;
  border: 2px solid #1a73e8;
  color: white;
  padding: 0.2rem 1.2rem;
  font-size: 0.8rem;
  :hover {
    background-color: #005db3;
    border-color: #005db3;
  }
  :active {
    background-color: #5195ce;
    border-color: #5195ce;
  }
`

export const WarningButton = styled.button`
  background-color: #e88e1a;
  border-radius: 5px;
  border: 2px solid #e88e1a;
  color: white;
  padding: 0.2rem 1.2rem;
  font-size: 0.8rem;
  :hover {
    background-color: #df8816;
    border-color: #df8816;
  }
  :active {
    background-color: #cc7c14;
    border-color: #cc7c14;
  }
`

export const DangerButton = styled.button`
  background-color: #e8241a;
  border-radius: 5px;
  border: 2px solid #e8241a;
  color: white;
  padding: 0.2rem 1.2rem;
  font-size: 0.8rem;
  :hover {
    background-color: #df2016;
    border-color: #df2016;
  }
  :active {
    background-color: #cc1d14;
    border-color: #cc1d14;
  }
`

export const LightButton = styled.button`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #f0756e;
  color: #f0756e;
  padding: 0.2rem 1.2rem;
  font-size: 0.8rem;
  :hover {
    background-color: #fdeded;
    color: #ef726b;
  }
  :active {
    background-color: #fbdada;
    color: #ed615a;
  }
`

export const SubmitButton = styled.button`
  background-color: #11b524;
  border-radius: 5px;
  border: 1px solid #11b524;
  color: white;
  padding: 0.2rem 1.2rem;
  font-size: 0.8rem;
  :hover {
    background-color: #10a821;
    border-color: #10a821;
  }
  :active {
    background-color: #0e951e;
    border-color: #0e951e;
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-top: 1.5rem;
  > input,
  button {
    font-size: 0.8rem;
  }
`

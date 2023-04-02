import styled from "styled-components";

export const Loading = styled.div`
  display: block;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  padding-top: .2rem;

  :after {
    content: " ";
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
  font-size: .8rem;
  :hover {
    background-color: #005DB3;
    border-color: #005DB3;
  }
  :active {
    background-color: #5195CE;
    border-color: #5195CE;
  }
`

export const WarningButton = styled.button`
  background-color: #e88e1a;
  border-radius: 5px;
  border: 2px solid #e88e1a;
  color: white;
  padding: 0.2rem 1.2rem;
  font-size: .8rem;
  :hover {
    background-color: #DF8816;
    border-color: #DF8816;
  }
  :active {
    background-color: #CC7C14;
    border-color: #CC7C14;
  }
`

export const DangerButton = styled.button`
  background-color: #e8241a;
  border-radius: 5px;
  border: 2px solid #e8241a;
  color: white;
  padding: 0.2rem 1.2rem;
  font-size: .8rem;
  :hover {
    background-color: #DF2016;
    border-color: #DF2016;
  }
  :active {
    background-color: #CC1D14;
    border-color: #CC1D14;
  }
`

export const LightButton = styled.button`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #f0756e;
  color: #f0756e;
  padding: 0.2rem 1.2rem;
  font-size: .8rem;
  :hover {
    background-color: #FDEDED;
    color: #EF726B;
  }
  :active {
    background-color: #FBDADA;
    color: #ED615A;
  }
`

export const SubmitButton = styled.button`
  background-color: #11b524;
  border-radius: 5px;
  border: 1px solid #11b524;
  color: white;
  padding: 0.2rem 1.2rem;
  font-size: .8rem;
  :hover {
    background-color: #10A821;
    border-color: #10A821;
  }
  :active {
    background-color: #0E951E;
    border-color: #0E951E;
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  gap: .5rem;
  justify-content: flex-end;
  margin-top: 1.5rem;
  > input, button {
    font-size: .8rem;
  }
`

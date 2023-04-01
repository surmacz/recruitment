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
  background: blue;
  border-radius: 5px;
  border: 2px solid blue;
  color: white;
  padding: 0.25em 1em;
`

export const WarningButton = styled.button`
  background: orange;
  border-radius: 5px;
  border: 2px solid orange;
  color: white;
  padding: 0.25em 1em;
`

export const DangerButton = styled.button`
  background: red;
  border-radius: 5px;
  border: 2px solid red;
  color: white;
  padding: 0.25em 1em;
`

export const LightButton = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 1px solid red;
  color: red;
  padding: 0.4em 1.2em;
`

export const SubmitButton = styled.input`
  background: #198754;
  border-radius: 5px;
  border: 1px solid #198754;
  color: white;
  padding: 0.4em 1.2em;
  :hover {
    background-color: #157347
  }
  :active {
    background-color: #146c43
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

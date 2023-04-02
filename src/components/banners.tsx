import { FC } from 'react'
import styled from 'styled-components'

const Banner = styled.div`
  position: fixed;
  left: 0;
  top: -50px;
  width: 100%;
  padding: 10px;
  text-align: center;
  color: white;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`

type InfoBanerProps = {
  backgroundColor: string
  className: string
}
const InfoBanner: FC<InfoBanerProps> = ({ backgroundColor, className }) => (
  <Banner className={className} style={{ backgroundColor }}></Banner>
)

export const SuccessBanner = () => (
  <InfoBanner className="success-banner" backgroundColor="#4CAF50" />
)
export const ErrorBanner = () => (
  <InfoBanner className="error-banner" backgroundColor="#F44336" />
)

export function showSuccessMessage(message: string) {
  const element = document.querySelector('.success-banner') as HTMLDivElement
  showMessage(element, message)
}

export function showErrorMessage(message: string) {
  const element = document.querySelector('.error-banner') as HTMLDivElement
  showMessage(element, message)
}

function showMessage(element: HTMLDivElement, message: string) {
  element.innerHTML = message
  element.style.top = '0'
  setTimeout(() => {
    element.style.transition = 'top 2s ease-out'
    element.style.top = '-50px'

    setTimeout(() => {
      element.style.transition = 'none'
    }, 2000)
  }, 3000)
}

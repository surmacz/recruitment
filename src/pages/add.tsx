import Head from 'next/head'
import styled from 'styled-components'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setIsLoading } from '@/redux/root-reducer'
import { Form } from '@/components/form'
import { Loading } from '@/components/styled-components'
import { User } from '@/model'
import { showErrorMessage, showSuccessMessage } from '@/components/banners'

const Main = styled.main`
  width: 40vh;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
`

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid gray;
`

export default function AddUserForm() {
  const router = useRouter();

  const form = useForm<User>();
  const onSubmit: SubmitHandler<User> = async(data) => {
    dispatch(setIsLoading(true))

    const { installMocks } = await import('@/mocks/browser')
    installMocks()

    const response = await fetch(
      '/users',
      {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}},
    )

    if (response.ok) {
      showSuccessMessage('User has been added')
      router.push('/home')
    } else {
      showErrorMessage('Error while adding user. Try again!')
      dispatch(setIsLoading(false))
    }
  };

  const isLoading = useAppSelector(state => state.isLoading)
  const dispatch = useAppDispatch()

  return (
    <>
      <Head>
        <title>Recruitment App | Add Form</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>Home</header>
      <Main>
        <MainHeader>
          <h2>Add Form</h2>
        </MainHeader>
        {isLoading ? <Loading /> : <Form form={form} onSubmit={onSubmit} />}
      </Main>
    </>
  )
}

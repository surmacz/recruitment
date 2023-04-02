import Head from 'next/head'
import styled from 'styled-components'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setIsLoading } from '@/redux/root-reducer'
import { Loading } from '@/components/styled-components'
import { Form } from '@/components/form'
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

export default function EditUserForm() {
  const router = useRouter();

  const form = useForm<User>();
  const onSubmit: SubmitHandler<User> = async(data) => {
    dispatch(setIsLoading(true))
    const response = await fetch(
      '/users/' + router.query.id,
      {method: 'PUT', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}},
    )

    if (response.ok) {
      showSuccessMessage('User has been saved')
      router.push('/home')
    } else {
      showErrorMessage('Error while saving user. Try again!')
      dispatch(setIsLoading(false))
    }
  };

  const isLoading = useAppSelector(state => state.isLoading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      dispatch(setIsLoading(true))

      if (!router.query.id) {
        return;
      }
      const { installMocks } = await import('@/mocks/browser')
      installMocks()

      const response = await fetch('/users/' + router.query.id)

      if (response.ok) {
        const user = await response.json()

        form.reset(user)
      } else {
        showErrorMessage('Error while getting user\'s data. Try again!')
      }
      dispatch(setIsLoading(false))
      })()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.id]);

  return (
    <>
      <Head>
        <title>Recruitment App | Edit Form</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>Home</header>
      <Main>
        <MainHeader>
          <h2>Edit Form</h2>
        </MainHeader>
        {router.isReady && !isLoading ? <Form form={form} onSubmit={onSubmit} /> : <Loading />}
      </Main>
    </>
  )
}

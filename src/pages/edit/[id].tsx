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
    await fetch(
      '/users/' + router.query.id,
      {method: 'PUT', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}},
    )
    router.push('/home')
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
      const user = await response.json()

      form.reset(user)
      dispatch(setIsLoading(false))
      })()
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

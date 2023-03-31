import Head from 'next/head'
import styled from 'styled-components'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setIsLoading } from '@/redux/root-reducer'
import { Loading } from '@/components/styled-components'
import { Form } from '@/components/form'
import { User, usersData } from '@/model'

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
  const onSubmit: SubmitHandler<User> = data => {
    dispatch(setIsLoading(true))
    setTimeout(() => {
      //todo: replace user
      router.push('/home')
    }, 3000);
  };

  const isLoading = useAppSelector(state => state.isLoading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setIsLoading(true))

    const idInt = +(router.query.id as string);
    if (!idInt) {
      return;
    }

    setTimeout(() => {
      const user = usersData.find(user => user.id === idInt) as User
      form.reset(user)

      dispatch(setIsLoading(false))
    }, 3000);
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

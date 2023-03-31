import Head from 'next/head'
import styled from 'styled-components'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useRouter } from 'next/router'
import { User, users } from '../home'
import { useEffect } from 'react'

const LightButton = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 1px solid red;
  color: red;
  padding: 0.4em 1.2em;
`

const SubmitButton = styled.input`
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
const ActionsContainer = styled.div`
  display: flex;
  gap: .5rem;
  justify-content: flex-end;
  margin-top: 1.5rem;
  > input, button {
    font-size: .8rem;
  }
`

type FormRowProps = {
  labelWidth: number;
}

const FormRow = styled.div<FormRowProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 1rem 0;
  label, input, > div {
    width: 100%;
  }
  label {
    padding: .375rem 0;
    line-height: 1.5;
  }
  input {
    font-family: "Times New Roman", Times, serif;
    font-size: 1rem;
    line-height: 1.5;
    padding: .375rem .75rem;
    border: 1px solid lightgray;
    border-radius: 0.375rem;
  }

  input:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13,110,253,.25);
  }

  @media (min-width: 610px) {
    flex-direction: row;
    label {
      width: ${props => props.labelWidth}%;
    }
    > div {
      width: ${props => 100-props.labelWidth}%;
    }
  }
`

export default function EditForm() {
  const {register, handleSubmit, reset} = useForm<User>();
  const onSubmit: SubmitHandler<User> = data => console.log('>>', data);

  const router = useRouter();

  useEffect(() => {
    const idInt = +(router.query.id as string);
    if (!idInt) {
      return;
    }

    const user = users.find(user => user.id === idInt) as User
    reset(user)
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
        <form onSubmit={handleSubmit(onSubmit)} style={{padding: '1rem 1.5rem', fontSize: '1rem'}}>
          {router.isReady ? <>
            <FormRow labelWidth={20}>
              <label htmlFor='name' >Name:</label>
              <div><input id="name" {...register('name')} required /></div>
            </FormRow>
            <FormRow labelWidth={25}>
              <label htmlFor='username'>Username:</label>
              <div><input id="username" {...register('username')} required /></div>
            </FormRow>
            <FormRow labelWidth={20}>
              <label htmlFor='email'>Email:</label>
              <div><input id="email" type='email' {...register('email')} required /></div>
            </FormRow>
            <FormRow labelWidth={15}>
              <label htmlFor='city'>City:</label>
              <div><input id="city" {...register('city')} required /></div>
            </FormRow>
            <ActionsContainer>
              <LightButton onClick={() => router.push('/home')}>Cancel</LightButton>
              <SubmitButton type="submit" />
            </ActionsContainer>
          </> : <div>Loading...</div>}
        </form>
      </Main>
    </>
  )
}

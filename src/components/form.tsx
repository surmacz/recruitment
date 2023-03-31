import { useRouter } from "next/router";
import { SubmitHandler, UseFormReturn, useForm } from "react-hook-form";
import styled from "styled-components";
import { LightButton, SubmitButton } from "./styled-components";
import { FC } from "react";
import { User } from "@/model";

const FormRow = styled.div<{labelWidth: number}>`
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
const ActionsContainer = styled.div`
  display: flex;
  gap: .5rem;
  justify-content: flex-end;
  margin-top: 1.5rem;
  > input, button {
    font-size: .8rem;
  }
`

type FormProps = {
  form: UseFormReturn<User, any>
  onSubmit: SubmitHandler<User>
}

export const Form: FC<FormProps> = ({form, onSubmit}) => {
  const router = useRouter();

  return <form onSubmit={form.handleSubmit(onSubmit)} style={{padding: '1rem 1.5rem', fontSize: '1rem'}}>
    <FormRow labelWidth={20}>
      <label htmlFor='name' >Name:</label>
      <div><input id="name" {...form.register('name')} required /></div>
    </FormRow>
    <FormRow labelWidth={25}>
      <label htmlFor='username'>Username:</label>
      <div><input id="username" {...form.register('username')} required /></div>
    </FormRow>
    <FormRow labelWidth={20}>
      <label htmlFor='email'>Email:</label>
      <div><input id="email" type='email' {...form.register('email')} required /></div>
    </FormRow>
    <FormRow labelWidth={15}>
      <label htmlFor='city'>City:</label>
      <div><input id="city" {...form.register('city')} required /></div>
    </FormRow>
    <ActionsContainer>
      <LightButton onClick={() => router.push('/home')}>Cancel</LightButton>
      <SubmitButton type="submit" />
    </ActionsContainer>
  </form>
}

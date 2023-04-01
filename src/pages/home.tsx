import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { useEffect } from 'react'
import { setIsLoading, setUsers } from '@/redux/root-reducer'
import { DangerButton, Loading, PrimaryButton, WarningButton } from '@/components/styled-components'

const Main = styled.main`
  margin: 1rem 1rem;
  padding-bottom: 1rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;

  @media (min-width: 1024px) {
    margin: 1rem 3rem;
  }
`
const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid gray;
`
const TableContainer = styled.div`
  margin: 1rem 1rem 0 1rem;
  overflow-x: auto;
`
const Table = styled.table`
  width: 100%;
  border: 1px solid gray;
  border-spacing: 0;
`
const Thead = styled.thead`
  background-color: lightgrey;
`
const Tr = styled.tr``
const Tbody = styled.tbody`
  > tr:not(:last-child) td {
    border-bottom: 1px solid lightgray;
  }

  > tr td:last-child {
    padding-right: .6rem;
  }
`
const Th = styled.th<{readonly align?: string}>`
  padding: 1rem 0 1rem .6rem;
  text-align: ${props => props.align || 'left'};
`
const Td = styled.td`
  padding: 1rem 0 1rem .6rem;
  text-align: ${props => props.align || 'left'};
`

export default function Home() {
  const router = useRouter()
  const users = useAppSelector(state => state.users)
  const isLoading = useAppSelector(state => state.isLoading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      dispatch(setIsLoading(true))

      const { installMocks } = await import('@/mocks/browser')
      installMocks()

      const usersResponse = await fetch('/users')
      const usersData = await usersResponse.json()

      dispatch(setUsers(usersData))
      dispatch(setIsLoading(false))
    })()
  }, []);

  return (
    <>
      <Head>
        <title>Recruitment App | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>Home</header>
      <Main>
        <MainHeader>
          <h2>User List</h2>
          <PrimaryButton onClick={() => router.push('/add')}>Add new</PrimaryButton>
        </MainHeader>
        {isLoading ? <Loading /> :
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th align="center" key='1'>Id</Th>
                  <Th key='2'>Name</Th>
                  <Th key='3'>Username</Th>
                  <Th key='4'>Email</Th>
                  <Th key='5'>City</Th>
                  <Th key='6'>Edit</Th>
                  <Th key='7'>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map(user => <Tr key={user.id}>
                  <Td align="center" key='1'>{user.id}</Td>
                  <Td key='2'>{user.name}</Td>
                  <Td key='3'>{user.username}</Td>
                  <Td key='4'>{user.email}</Td>
                  <Td key='5'>{user.city}</Td>
                  <Td key='6'><WarningButton onClick={() => router.push('/edit/' + user.id)}>edit</WarningButton></Td>
                  <Td key='7'><DangerButton>delete</DangerButton></Td>
                </Tr>)}
              </Tbody>
            </Table>
          </TableContainer>}
      </Main>
    </>
  )
}

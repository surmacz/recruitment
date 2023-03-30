import Head from 'next/head'
import styled from 'styled-components'

interface User {
  id: number
  name: string
  username: string
  email: string
  city: string
}

const users: Array<User> = [
  {id: 1, name: 'Jon Snow', username: 'Wolf', email: 'jon@snow.com', city: 'Winterfell'},
  {id: 2, name: 'Darth Vader', username: 'Vader', email: 'darth@vader.com', city: 'Death Star'},
  {id: 3, name: 'Frodo Baggins', username: 'Frodo', email: 'frodo@baggins.com', city: 'Shire'},
  {id: 4, name: 'Indiana Jones', username: 'Indy', email: 'indiana@jones.com', city: 'Venice'},
  {id: 5, name: 'Luke Skywalker', username: 'Luke', email: 'luke@skywalker.com', city: 'Tatooine'},
]

const PrimaryButton = styled.button`
  background: blue;
  border-radius: 5px;
  border: 2px solid blue;
  color: white;
  padding: 0.25em 1em;
`

const WarningButton = styled.button`
  background: orange;
  border-radius: 5px;
  border: 2px solid orange;
  color: white;
  padding: 0.25em 1em;
`

const DangerButton = styled.button`
  background: red;
  border-radius: 5px;
  border: 2px solid red;
  color: white;
  padding: 0.25em 1em;
`

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
    padding-right: .6em;
  }
`

interface ThProps {
  readonly align?: string;
}

const Th = styled.th<ThProps>`
  padding: 1rem 0 1rem .6rem;
  text-align: ${props => props.align || 'left'};
`

const Td = styled.td`
  padding: 1rem 0 1rem .6rem;
  text-align: ${props => props.align || 'left'};
`

export default function Home() {
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
          <PrimaryButton>Add new</PrimaryButton>
        </MainHeader>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th align="center">Id</Th>
                <Th>Name</Th>
                <Th>Username</Th>
                <Th>Email</Th>
                <Th>City</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map(user => <Tr key={user.id}>
                <Td align="center" key='1'>{user.id}</Td>
                <Td key='2'>{user.name}</Td>
                <Td key='3'>{user.username}</Td>
                <Td key='4'>{user.email}</Td>
                <Td key='5'>{user.city}</Td>
                <Td key='6'><WarningButton>edit</WarningButton></Td>
                <Td key='7'><DangerButton>delete</DangerButton></Td>
              </Tr>)}
            </Tbody>
          </Table>
        </TableContainer>
      </Main>
    </>
  )
}

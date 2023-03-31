export interface User {
  id: number
  name: string
  username: string
  email: string
  city: string
}

export const usersData: Array<User> = [
  {id: 1, name: 'Jon Snow', username: 'Wolf', email: 'jon@snow.com', city: 'Winterfell'},
  {id: 2, name: 'Darth Vader', username: 'Vader', email: 'darth@vader.com', city: 'Death Star'},
  {id: 3, name: 'Frodo Baggins', username: 'Frodo', email: 'frodo@baggins.com', city: 'Shire'},
  {id: 4, name: 'Indiana Jones', username: 'Indy', email: 'indiana@jones.com', city: 'Venice'},
  {id: 5, name: 'Luke Skywalker', username: 'Luke', email: 'luke@skywalker.com', city: 'Tatooine'},
]

import './App.css';
import { useEffect, useState } from 'react';
import { useQuery, useMutation, gql } from "@apollo/client";

// GET
const GET_BOOKS = gql`
  query {
    getBooks {
      id
      title
      author
    },
    getAuthors {
      Id
      Name
      Author 
    },
  }
`;
// const GET_AUTHOR = gql`
//   query {
//     getAuthors {
//       Id
//       Name
//       Author 
//     }
//   }
// `;

const ADD_BOOKS = gql`
  mutation addBooks( $title: String!, $author: String! ) {
    addBooks(post: { title: $title, author: $author}) {
   #id not needed beacause coming from mongo-db
      id 
      title
      author
    }
  }
`;

const UPDATE_BOOKS = gql`
  mutation updateBooks($id: String!, $title: String!, $author: String! ) {
    updateBooks(id: $id ,post: { title: $title, author: $author}) {
      id
      title
      author
    }
  }
`;

const DELETE_BOOKS = gql`
  mutation deleteBooks( $id: String! ) {
    deleteBooks( id: $id)
  }
`;

function App() {
  useEffect(() => {
  }, [])

  const [a_title, setTitle] = useState('')
  const [a_author, setAuthor] = useState('')
  const [a_id, setId] = useState('')
  const [edit, setEdit] = useState(false)

  // GET DATA
  const { loading, error, data } = useQuery(GET_BOOKS, {
    variables: { a_title, a_author },
    pollInterval: 500,
  })
  console.log("data=>", data)
  // const { getBooks, getBathing, } = data
  // console.log("getBathing=>", getBathing)
  // console.log("getAuthors=>", getAuthors)

  // ADD DATA
  const [addBooks, { er }] = useMutation(ADD_BOOKS)
  const ADD = () => {
    addBooks({
      variables: {
        // id: 4,
        title: a_title,
        author: a_author
      }
    })
    if (er) return <p>ADD Error</p>
  }

  // UPDATE DATA
  const UPDATEDATA = (data) => {
    console.log(data)
    const { id, title, author } = data
    setId(id)
    setTitle(title)
    setAuthor(author)
    setEdit(true)
  }
  const [updateBooks] = useMutation(UPDATE_BOOKS)
  const UPDATE = () => {
    updateBooks({
      variables: {
        id: a_id,
        title: a_title ? a_title : 'UPDATE',
        author: a_author ? a_author : "UPDATE"
      }
    })
    setTitle('')
    setAuthor('')
    setId('')
    setEdit(false)
  }

  // DELETE DATA
  const [deleteBooks] = useMutation(DELETE_BOOKS)
  const DELETE = (id) => {
    console.log(id)
    deleteBooks({
      variables: {
        id: id
      }
    })
  }

  if (loading) return <p>Loading...</p>
  if (error && !data) return <p>Error</p>

  // const { load, err, da } = useQuery(GET_AUTHOR);
  // if (load) return <p>BLoading...</p>;
  // if (err && !da) return <p>BError :(</p>;
  // console.log("da=>",da)

  return (
    <div>
      <h1>GraphQL Apollo-Server mongoDB CURD</h1>
      {data.getBooks.map((d) => (
        <div key={d.id}>
          <p>
            Id: {d.id}<br />
            Title: {d.title} <br />
            Author: {d.author}<br />
          </p>
          <button onClick={() => DELETE(d.id)}>DELETE</button>
          <button onClick={() => UPDATEDATA(d)}>UPDATE</button>
        </div>
      ))}

      {/* {data.getAuthors.map((d) => (
        <div key={d.id}>
          <p>
            {d.Id}
            {d.Name}
            {d.Author}
          </p>
        </div>
      ))} */}

      <br />
      <label>Title:</label><br />
      <input type="text" value={a_title} onChange={(e) => setTitle(e.target.value)} /><br />
      <label>Author:</label> <br />
      <input type="text" value={a_author} onChange={(e) => setAuthor(e.target.value)} /> <br /><br />
      <button onClick={() => ADD()}>ADD</button>
      {edit && <button onClick={() => UPDATE()}>UPDATE</button>}
    </div>
  );
}

export default App;

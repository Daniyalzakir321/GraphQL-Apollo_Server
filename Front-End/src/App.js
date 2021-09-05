import './App.css';
import { useEffect } from 'react';
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
      id
      title
      author
    }
  }
`;

const UPDATE_BOOKS = gql`
  mutation updateBooks($id: id!, $title: String!, $author: String! ) {
    updateBooks(id: $id ,post: { title: $title, author: $author}) {
      id
      title
      author
    }
  }
`;

const DELETE_BOOKS = gql`
  mutation deleteBooks( $id: Int! ) {
    deleteBooks( id: $id)
  }
`;

function App() {
  useEffect(() => {
  }, [])

  const { loading, error, data } = useQuery(GET_BOOKS)
  console.log("data=>", data)
  // const { getBooks, getBathing, } = data
  // console.log("getBathing=>", getBathing)
  // console.log("getAuthors=>", getAuthors)

  const [addBooks, { er }] = useMutation(ADD_BOOKS)
  const ADD = () => {
    addBooks({
      variables: {
        id: 4,
        title: "aaa",
        author: "demo"
      }
    })
    if (er) return <p>ADD Error</p>
  }

  const [updateBooks] = useMutation(UPDATE_BOOKS)
  const UPDATE = (id) => {
    updateBooks({
      variables: {
        id: id,
        title: "update",
        author: "update"
      }
    })
  }

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

      {data.getBooks.map((d) => (
        <div key={d.id}>
          <p>
            {d.id}
            {d.title}
            {d.author}
          </p>
          <button onClick={() => DELETE(d.id)}>DELETE</button>
          <button onClick={() => UPDATE(d.id)}>UPDATE</button>
        </div>
      ))}

      {data.getAuthors.map((d) => (
        <div key={d.id}>
          <p>
            {d.Id}
            {d.Name}
            {d.Author}
          </p>
        </div>
      ))}

      <button onClick={() => ADD()}>POST</button>
    </div>
  );
}

export default App;

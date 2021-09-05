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
const GET_AUTHOR = gql`
  query {
    getAuthors {
      Id
      Name
      Author 
    }
  }
`;

// const ADD_BOOKS = gql`
//   mutation AddBooks($title: String!) {
//     addBooks(title: $title) {
//       title
//     }
//   }
// `;
function App() {
  useEffect(() => {
  }, [])

  const { loading, error, data } = useQuery(GET_BOOKS);
  console.log("data=>", data)
  // const { getBooks, getBathing, } = data
  // console.log("getBathing=>", getBathing)
  // console.log("getAuthors=>", getAuthors)
  if (loading) return <p>Loading...</p>
  if (error && !data) return <p>Error</p>

  // const { load, err, da } = useQuery(GET_AUTHOR);
  // if (load) return <p>BLoading...</p>;
  // if (err && !da) return <p>BError :(</p>;
  // console.log("da=>",da)

  // const [mutateFunction, { data, loading, error }] = useMutation(ADD_BOOKS);
  // function mutateFunction() {
  //   if (loading) return <p>MLoading...</p>;
  //   if (error && !data) return <p>MError :(</p>;
  // }

  return (
    <div>
      {data.getBooks.map((d) => (
        <div key={d.id}>
          <p>
            {d.id}
            {d.title}
            {d.author}
          </p>
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
    </div>
  );
}

export default App;

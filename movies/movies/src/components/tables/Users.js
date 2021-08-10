function Users() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()
  useEffect(() => {
    fetch("http://localhost:8092/users")
      .then(res => res.json())
      .then(
        (result) => {
            console.log("here", result)
          setIsLoaded(true);
          setItems(result.items);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.name}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}
 export default Users;


// import React from 'react';

// const Users = () => {
//     // const users = [{ id: 1, userName: 'masry' }, { id: 2, userName: 'jhon' }];
//     // return (
//     //     <div>
//     //         {Users.map(user => {
                
//     //                 {"id : " + user.id + " - username: " + user.userName}
//     //                 console.log(user);
                
//     //         })}
//     //         {/* Users.array.forEach(element => {
//     //             {"id : " + user.id + " - username: " + user.userName}
//     //             console.log(Users);
//     //         }); */}
            
//     //     </div>
//     );
// };


 const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users');
            setUsers(await response.json());
        } catch (error) {
            console.log("my error is "+ error);
        }
    }
    
     const addExpenseHandler = async (expense) => {
        let response = await fetch('http://localhost:5000/add', {
            method: "POST",
            body: JSON.stringify(expense),
            headers: {
                "Content-Type": "application/json"
            }
        });
        await response.json()
        getUsers();
    }

    useEffect(() => {
        getUsers();
    }, []);

return(
<div>
  -------------
  {
  users.map((item) =>{
      return (
           <div>
           //write here
           </div>
         )
     })
  }
  ---------------
</div>
)

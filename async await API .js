 const [users, setUsers] = useState([]);

    const test = async () => {
    try {
        const response = await fetch("sample.json")
        const result = await response.json();
        setUsers(result);
    } catch (error) {
        console.log("my error is "+ error)
    }
}
test().then((result) => {
    console.log(result)
});


    
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

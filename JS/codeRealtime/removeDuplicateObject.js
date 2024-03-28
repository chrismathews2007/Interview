const users = [
    { id: 32, name: "Madhu", role: "Developer" },
    { id: 42, name: "Sudhn", role: "Developer" },
    { id: 32, name: "JOhn", role: "Developer" },
    { id: 42, name: "Moses", role: "Developer" },
    { id: 47, name: "Raman", role: "Developer" }
  ];
  
  const filterUnique = [...users.reduce((map, obj) => map.set(obj.id, obj), new Map()).values()]
  
//   console.log(filterUnique)

// with filter
  const filterData = users.filter((item, index) => {
    return users.findIndex(usr => usr.id === item.id) === index
  })

  console.log("filterData", filterData)
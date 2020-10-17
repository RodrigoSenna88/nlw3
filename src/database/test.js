const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
  // inserir dados na tabela 
   await saveOrphanage(db,  {
    lat: "-22.9481192", 
    lng: "-43.1988842",
    name: "Lar dos meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de riesco e/ou vulnerabilidade social.",
    whatsapp: "021989678811",
    images: [
      "https://images.unsplash.com/photo-1597730945481-f35a5cf39021?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1600711724564-526eda91ac29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas das 8h até as 18h",
    open_on_weekends: "1"
  }) 

  // // consultar dados da tabela
   const selectedOrphanages = await db.all("SELECT * FROM orphanages")
   console.log(selectedOrphanages)

  // // consultar somente 1 orfanato, pelo ID
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
  console.log(orphanage)

  // // deletar um dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
})
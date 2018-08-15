import mysql from 'mysql'

const connection = mysql.createConnection({
  host     : 'localhost',
  database : 'test',
  user     : 'test',
  password : 'test',
  insecureAuth: true,
})

connection.connect((err) => {
  console.log(err)
})
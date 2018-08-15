import db from '../db'

class Courses {
  index(req, res ) {
    db.query('SELECT * FROM courses', (err, results, fields) => {
      if (err) {
        console.log(err)
        res.send(500)
      }
      res.json(results)
    })
  }

  show(req, res) {
    res.send(200)
  }

  create(req, res) {
    res.send(200)
  }

  edit(req, res) {
    res.send(200)
  }

  delete(req, res) {
    res.send(200)
  }
}

export default new Courses()
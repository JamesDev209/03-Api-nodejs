

const getList = (req, res) => {
   res.send( 
    {
        id: 1,
         name: "ja"
    },
)}

const getDetail =(req, res) => {
    res.send( {id: 1},{name: "james"})
}

module.exports = { getList, getDetail }
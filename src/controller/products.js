const ModelProduct = require("./../model/products")

const productController = {
    update:(req, res, next) => {
        ModelProduct.updateData(req.params.id, req.body)
          .then((result) =>
            res.send({
              status: 200,
              message: `berhasil memasukan data`,
              data: result,
            })
          )
          .catch((err) => res.send({ message: "error", err }));
      },
      
    delete: (req, res, next) => {
        ModelProduct.deleteData(req.params.id)
          .then((result) =>
            res.send({ status: 200, message: `berhasil menghapus data` })
          )
          .catch((err) => res.send({ message: "error", err }));
      },

    getProduct: (req, res, next) => {
      const page = req.query.page
        ModelProduct.selectData(page)
          .then((result) => res.send({ result: result.rows }))
          .catch((err) => res.send({ message: "error", err }));
      },

     insert: (req, res, next) => {
        ModelProduct.insertData(req.body)
          .then((result) =>
            res.send({ status: 200, message: `berhasil memasukan data` })
          )
          .catch((err) => res.send({ message: "error", err }));
      },

      search: (req, res, next) => {
        ModelProduct.searchData(req.params.id)
        .then((result) => res.send({ result: result.rows }))
        .catch((err) => res.send({ message: "error", err }));
      },
    searchName: (req, res, next) => {
      ModelProduct.searchName(req.params.name)
      .then((result) => res.send({ result: result.rows }))
      .catch((err) => res.send({ message: "error", err }));
    },
    sorting: (req, res, next) => {
      ModelProduct.sortData()
        .then((result) => res.send({ result: result.rows }))
        .catch((err) => res.send({ message: "error", err }));
    },
}

exports.productController = productController
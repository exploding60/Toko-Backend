require("dotenv").config();
const ModelProduct = require("./../model/products");
const { response } = require("./../middleware/getDataHelpers");
const client = require("../config/redis");
const productController = {
  update: (req, res, next) => {
    const Port = process.env.PORT;
    const photo = req.file.filename;
    const url = `http://localhost:${Port}/image/${photo}`;
    req.body.photo = url;

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
  sort: (req, res, next) => {
    const sort = req.query.sort;
    const sortby = req.query.sortby || "price";
    const page = req.query.page || 1;
    const limit = req.query.limit || 5;
    ModelProduct.sort(sortby, sort, page, limit)
      .then((result) => res.send({ result: result.rows }))
      .catch((err) => res.send({ message: `error`, err }));
  },
  delete: (req, res, next) => {
    ModelProduct.deleteData(req.params.id)
      .then((result) =>
        response(res, 200, true, result.rows, "delete data success")
      )
      .catch((err) => response(res, 404, false, "get data faill"));
  },
  sorting: (req, res, next) => {
    const sort = req.query.sort;
    const sortby = req.query.sortby;
    const page = req.query.page;
    const limit = req.query.limit;
    ModelProduct.sort(sortby, sort, page, limit)
      .then((result) =>
        response(res, 200, true, result.rows, "get data success")
      )
      .catch((err) => response(res, 404, false, "get data faill"));
  },
  getProduct: (req, res, next) => {
    ModelProduct.selectData()
      .then((result) =>
        response(res, 200, true, result.rows, "get data success")
      )
      .catch((err) => response(res, 404, false, "get data faill"));
  },
  insert: (req, res, next) => {
    const Port = process.env.PORT;
    const photo = req.file.filename;
    const url = `http://localhost:${Port}/image/${photo}`;
    req.body.photo = url;
    req.body.stock = parseInt(req.body.stock);
    req.body.price = parseInt(req.body.price);
    ModelProduct.insertData(req.body)
      .then((result) =>
        res.send({ status: 200, message: `berhasil memasukan data progress` })
      )
      .catch((err) => res.send({ message: "error", err }));
  },

  search: (req, res, next) => {
    ModelProduct.searchData(req.params.id)
      .then((result) =>
        response(res, 200, true, result.rows, "get data success")
      )
      .catch((err) => response(res, 404, false, "get data faill"));
  },

  // searchName: (req, res, next) => {
  //   ModelProduct.searchName(req.params.name)
  //     .then((result) => {
  //       response(res, 200, true, result.rows, "get data success");
  //     })
  //     .catch((err) => res.send({ message: "error", err }));
  // },
  // sorting: (req, res, next) => {
  //   ModelProduct.sortData()
  //     .then((result) => res.send({ result: result.rows }))
  //     .catch((err) => res.send({ message: "error", err }));
  // },
};

exports.productController = productController;

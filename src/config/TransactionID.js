/* @flow weak */
class Transactions {
  id() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var now = new Date().getTime();
    let TransactionID = year + "" + month + "" + date + "" + now;
    return TransactionID
  }
}

const TransactionID = new Transactions();

export default TransactionID;

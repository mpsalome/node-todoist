exports.get = (req, res) => {
  const id = req.params.id;
  console.log('Get');
  res.send(`OK GET id=${id}`);
};

exports.getAll = (req, res) => {
  console.log('Get All');
  res.send('OK GET All');
};

exports.add = (req, res) => {
  console.log('Add');
  res.send('OK Add');
};

exports.update = (req, res) => {
  console.log('Update');
  res.send('OK Update');
};

exports.delete = (req, res) => {
  console.log('Delete');
  res.send('OK Delete');
};
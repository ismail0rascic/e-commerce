export const generatePaths = (data, navigate) => {
  let paths = [];
  // eslint-disable-next-line
  data.map((line) => {
    paths.push({
      title: `${line.departure} - ${line.incoming} (via ${line.via.join(
        ", "
      )})`,
      func: function () {
        navigate("/line"+line._id);
      },
    });
  });
  return paths;
};

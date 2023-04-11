const generateAlphanumericId = () => {
  let id = "";
  [1,2,3,4].forEach((_e,index) => {
    if(index < 3) id += Math.random().toString(16).slice(2,6) + "-";
    else id += Math.random().toString(16).slice(2,6);
  });
  return id;
}

const randomId = generateAlphanumericId();
console.log(randomId);
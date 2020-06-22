var model=window.model;

console.log(model.getTodos())
model.addItem({task:"Reactjs",status:false});
model.addItem({task:"Angular",status:false});
model.addItem({task:"node",status:false});

document.body.innerHTML=JSON.stringify(model.getTodos())

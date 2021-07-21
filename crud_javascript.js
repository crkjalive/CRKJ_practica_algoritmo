const listado = ['Audi', 'Chevrolet','Ford']

const insertar = (lista,name) => {
  name = capital(name)
  lista.push(name)
}

const listar = (lista) => {
	if (lista.length > 0){
    	for (var i = 0; i < lista.length; i++) {
		console.log(i,lista[i])
    	}
	} else {
    	console.log("no hay elementos para mostrar")
	}
}

const actualizar = (lista, name, newName) =>{
	name = capital(name)
	newName = capital(newName)
  if (lista.includes(name)){
    let item = lista.indexOf(name)
    lista[item] = newName
    console.log("se actualiza", name, "por", newName)
  } else {
    console.log("no esta",name)
  }
}

const eliminar = (lista,name) => {
	name = capital(name)

  if (lista.includes(name)){
    let item = lista.indexOf(name)
    lista.splice(item,1)
    console.log(`${name} ha sido eliminado`)
  }else{
    console.log(`${name} no existe`)
  }
}

const formato = (name) => {
  console.log('==== '+name.toUpperCase()+' ====')
}
const capital = (name) => {
	name = name.charAt(0).toUpperCase()+name.slice(1)
	return name
}

formato('Marcas')
listar(listado)

insertar(listado,'toyota')
insertar(listado,'mazda')
insertar(listado,'tesla')
insertar(listado,'lamborgini')
insertar(listado,'mclaren')
formato('insertados')
listar(listado)

formato('actualizados')
actualizar(listado, 'mclaren', 'volkswagen')

listar(listado)

formato('eliminado')
eliminar(listado,'mazda')

formato('marcas')
listar(listado)



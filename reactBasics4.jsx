// get person image url
function getImageUrl( person, size = 's'){
  return(
    'https://i.imgur.com/' + person.imageId + size + '.jpg'
  )
}
// render avatar
function Avatar({person, size}){
  return(
    <img className="avatar" src={getImageUrl(person)} alt={person.name}  style= {{ width: size, height: size, borderRadius: 50 }}/>
  )
}

// pass props for each item
export default function App(){
  return(
    <div className="App">
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  )
}

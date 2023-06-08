function CardContent({ person, size }){
  return(
    <div className="card-content">
      <h1>Photo</h1>
      <img className="avatar" 
        src={person.url}
        alt={person.name}
        style={{width: size, height: size, broderRadius:50}}
        />
     <h1>About</h1>
      <p>{person.about}</p>
    </div>
   )
}

export default function Profile() {
  return (
    <div>
      <div className="card">
        <CardContent 
          person={{ 
            name: 'Aklilu Lemma',
            url: 'https://i.imgur.com/OKS67lhm.jpg',
            about: 'Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.'
          }} 
          size={70}
        />
      </div>
    </div>
  );
}

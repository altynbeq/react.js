const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function App(){
  return(
     <div className="App">
      <h1>{ user.name }</h1>
      <img className="avatar" src={user.imgUrl} style={{ width: user.imageSize, height: user.imgSize, borderRadius: 50 }} />
     </div>
  )
}

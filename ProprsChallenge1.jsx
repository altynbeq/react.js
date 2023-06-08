import { getImageUrl } from './utils.js';

function Avatar({ person, size }){
  return(
    <img className="avatar" src={getImageUrl(person.url)} 
      alt={person.name} 
      style={{ width: size, height:size, borderRadius:50}}
      />
  )
}


export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <Avatar 
          person={{ 
            name:'Maria Skłodowska-Curie', 
            url:'szV5sdG'
          }} 
          size={100}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <Avatar 
        person={{ 
            name:'Katsuko Saruhashi', 
            url:'YfeOqp2'
          }} 
          size={100}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}


// react.js list rendering 

const products = [ 
  { id:0 ,name: 'Apple', isFruit: true, }, 
  { id:1, name: 'Orange', isFruit: true, }, 
  { id: 2, name: 'Bread', isFruit: false }
];

export default function shoppingList(){
  const list = products.map( item => 
    <li key={item.id} style={{ color: item.isFruit ? 'Green' : 'Red' }}>{ item.name }</li>
    
  );

  return (
    <ul>{ list }</ul>
  )
}

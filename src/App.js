import logo from './logo.svg';
import './App.css';
import { Photo } from './Photo';
import { useState } from 'react';

function App() {
  let allphoto = Photo;

  let [album, updatephoto] = useState(allphoto);

  function changeThePhoto(e) {
    let optionValue = e.target.value;
    console.log(optionValue)
    let albums = allphoto.filter((v, i) => {
      console.log(v)
      if (optionValue >= v.id)
        return v
    })
    updatephoto(albums)
  }

  return (
    <main className='max-w-[100%] '>
      <div className='text-center' > <h1 className='text-[35px] font-bold py-3'> GAllery</h1></div>
      <div className='text-center'>
        <select className='border-2' onChange={changeThePhoto}>
          <option> Choose the value </option>
          <option value={10}> 10 </option>
          <option value={25}> 25 </option>
          <option value={50}> 50 </option>
          <option value={75}> 75 </option>
          <option value={100}> 100 </option>
        </select>
      </div>
      <div className='grid grid-cols-4 gap-3 '>
        {album.map((v) => {
          return (
            <div className='border-2 shadow-xl mt-3'>
              <img src={v.thumbnailUrl} className='w-[100%]' />
              <p className='text-[18px] font-bold'> {v.id} </p>
              <p> {v.title} </p>
            </div>
          )
        })}
      </div>
    </main>
  );
}

export default App;

import Button from "../util/Button";

const HeroDetails = ({ info, moreInfo, getWatch }) => {

    const data = info;
    
    

  return (
    <section className='p-4 gap-4 h-[40rem] bg-amber-50' >

    {data ? (
      <>
        <h1>{data.name}</h1>
        <Button color={'amber'} onClick={() => getWatch(data.id)}>Watch Now</Button>
      </>










) : (
  <p>Loading...</p>
)}
        

    </section>
  )
}

export default HeroDetails
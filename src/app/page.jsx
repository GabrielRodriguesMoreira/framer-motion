import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons';


export default function Home() {

  const list = [{
    id: 1,
    name: 'Puddin',
    stars: 4,
    description: 'Sweet as chilli pepper',
    img: "https://pbs.twimg.com/media/F3mfn2Ia4AMxU6e?format=png&name=360x360"
  }, {
    id: 2,
    name: 'Donnut',
    stars: 5,
    description: 'Pooooiin oin oin',
    img: "https://pbs.twimg.com/media/F3mfn2Ia4AMxU6e?format=png&name=360x360"
  },
  ]


  return (
    <main className=" w-full flex-col p-6 pt-24">
      <section className='flex items-center'>
        <div className="w-1/3">
          <h1 className="text-4xl font-bold text-yellow-400 mb-2">Welcome to Our Confectionery</h1>
          <p className="text-lg text-gray-800">"Life is short. Eat dessert first." - Ernestine Ulmer</p>
        </div>
        <div className="w-2/3 flex justify-center items-center space-x-2">
          <img className="w-3/12" src="https://pbs.twimg.com/media/F3mfn2Ia4AMxU6e?format=png&name=360x360" alt="" />
          <img className="w-6/12" src="https://pbs.twimg.com/media/F3mfn2Ia4AMxU6e?format=png&name=360x360" alt="" />
          <img className="w-3/12" src="https://pbs.twimg.com/media/F3mfn2Ia4AMxU6e?format=png&name=360x360" alt="" />
        </div>
      </section>
      <section className="flex mt-12 space-x-4">
        {list.map((element) => (
          <div className="w-1/4 rounded-lg p-4 bg-slate-400" key={element.id}>
            <img className="mb-2 rounded-lg" src={element.img} alt="" />
            <div className="flex items-center">
              {[...Array(element.stars)].map((_, index) => (
                <StarFilledIcon key={index} className="text-yellow-400 mr-1" />
              ))}
              {[...Array(5 - element.stars)].map((_, index) => (
                <StarIcon key={index} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 mt-2">{element.description}</p>
          </div>
        ))}
      </section>
      <section className="h-screen flex items-center justify-center px-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Discover Our Story</h2>
          <p className="text-lg text-gray-700">
            At our confectionery, we're passionate about crafting delightful treats that bring joy to your taste buds.
            Join us on a journey through flavors and experiences that will leave you craving for more.
          </p>
        </div>
      </section>
    </main>
  );
}

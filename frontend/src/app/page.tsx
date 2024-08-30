import { homeTexts } from "@/constants";


export default function Home() {
  const texts = homeTexts;
  return (
    <main className="
    flex
    justify-stretch
    flex-col-reverse
    lg:flex-row
    p-10
    m-auto
    w-10/12
    ">
      <div
      className="
      text-center
      m-auto
      "
      >
        <h1
        className="text-3xl p-6"
        >Uma nova aventura
        </h1>
        {
          texts.map((map)=>(
            <div key={map.id}
            className="
            text-center
            mb-10
            lg:mb-16
            w-full
            "
            >

              <p
              className="italic text-lg"
              >&quot;{map.text}&quot;</p>
              <p
              className="
              text-slate-500
              italic
              font-bold
              text-right
              w-6/12
              m-auto
              "
              >{map.author}</p>

            </div>
          ))
        }
        <a
        href="/register"
        className="
        rounded-full py-4 px-10 bg-secondary text-white hover:bg-secondary-light hover:shadow hover:shadow-secondary-light
        "
        >
          Criar conta
        </a>
      </div>
      
      <img alt="summoned logo" src='https://github.com/JoaoLucasLourenco/Portifolio/blob/main/Summoned%20Logo.jpg?raw=true' 
      className="
      m-auto
      md:w-96
      w-2/3
      "/>

    </main>
  );
}

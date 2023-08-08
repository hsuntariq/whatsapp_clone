import Nav from './Head'
import './assets/styles.css'
// import { AiFillLinkedin,RiWhatsappFill,AiOutlineGithub } from 'react-icons/ai'
// import {BsFacebook} from 'react-icons/bs'
const Test = () => {
  return (
      <>

        <div className="container-fluid front mt-sm-3">
            <h1 className='animate display-1 text-light fw-bolder'>React Developer</h1>
              <p className="text-light text-center col-lg-5 m-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum, dicta placeat consequatur obcaecati sapiente nostrum nobis veritatis neque vitae atque aliquam dolor alias laborum enim ratione eaque perferendis aliquid iste possimus ullam error laboriosam nesciunt nihil? Provident a, quasi beatae cum nam laboriosam, animi consequatur nisi fuga itaque labore.
            </p>
        </div>
        <hr />
          <section className="about">
              <h1 className="display-1 text-center animate">
                  About us
              </h1>
            <div className="row m-auto justify-content-center align-item-center">
                <div className="col-lg-6 justify-content-center align-item-center d-flex flex-column">
                    <h1 className='text-light'>Heading</h1>
                      <p className="text-secondary ">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam modi neque dolor hic. Laborum quod soluta quisquam voluptatum. Dolore, eveniet sequi autem nisi voluptas fugit quae molestiae commodi libero. Molestiae, maiores consequuntur nemo amet vero quis ea error recusandae?
                    </p>
                </div>
                  <div className="col-lg-6 justify-content-center align-item-center d-flex flex-column">
                      <img style={{ width: '100%' }} src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png" alt="" />
                </div>
            </div>
        </section>
        <hr />

    </>
  )
}

export default Test

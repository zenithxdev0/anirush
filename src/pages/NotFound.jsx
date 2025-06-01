import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Container from "../util/Container"
import sadanime from '../assets/sadanime.png';
import Button from "../util/Button";
import { useNavigate } from "react-router-dom";
import { SideBar } from "../components/SideBar";

const NotFound = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/home')
  }

  return (
   <>
   <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
    <Container>
      <NavBar openSidebar={() => setIsOpen(true)} />
      <div className="min-h-screen flex flex-col items-center justify-center -mt-12 gap-2">
        <img src={sadanime} alt="sadanime" className="w-96" />
        <h3 className="text-amber-300 font-bold text-3xl">404 Not Found</h3>
        <Button onClick={handleBackToHome} className={''} color={'rose'}>Home</Button>
      </div>
    </Container>
    <Footer/>
   </>
  )
}

export default NotFound
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div  className='container page'>
                <div className='info'>
                        <h1>Job <span>Tracking</span> App</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia dui vitae purus pellentesque, quis facilisis neque suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam rutrum felis at ligula bibendum, in pretium enim blandit. Nunc sed ligula vel metus dictum mattis. Cras sed ex in orci sodales viverra sed vitae nisl. Sed augue orci, lobortis at malesuada quis, finibus in neque. In feugiat, risus placerat varius tempus, purus dolor suscipit elit, a fringilla est ex a ipsum.
                    </p>
                    <Link to='/register' className='btn btn-hero'>Login/Register</Link>
                </div>
                <img src={main} alt='job hunting' className='img main-img' />
            </div>
        </Wrapper>
    );
}

export default Landing;
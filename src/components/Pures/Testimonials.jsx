import AwesomeTestimonial from 'react-awesome-testimonials';
import { testimonials } from '../../assets/Testimonials';

const Testimonials = () => {
    return (
        <AwesomeTestimonial
            testimonials={testimonials}
        />
    );
}

export default Testimonials;

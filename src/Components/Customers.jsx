import { useState, useEffect } from "react";
import gsap from "gsap";
import "./Customers.css";

const testimonials = [
    {
        quote: "Shopping here has been a game-changer! Every item is fresh, and you can really tell they source high-quality products. The staff is always helpful, making sure I find everything I need. This is definitely my go-to grocery store!",
        name: "Tamar Mendelson",
        designation: "Store Critic",
        src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop",
    },
    {
        quote: "I was impressed by the variety—they have everything from fresh produce to specialty items! The ingredients are always top-notch, and the store layout makes shopping so easy. I'll definitely keep coming back!",
        name: "Joe Charlescraft",
        designation: "Frequent Visitor",
        src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop",
    },
    {
        quote: "Green Store is a hidden gem! From the moment I walked in, I knew I was in for a treat. The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
        name: "Martina Edelweist",
        designation: "Satisfied Customer",
        src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop",
    },
];

export default function Customers() {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateTestimonial = (direction) => {
        setActiveIndex((prevIndex) => (prevIndex + direction + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const autoplayInterval = setInterval(() => updateTestimonial(1), 5000);
        return () => clearInterval(autoplayInterval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="testimonial-container">
            <div className="testimonial-grid">
                <div className="image-container">
                    <img src={testimonials[activeIndex].src} alt={testimonials[activeIndex].name} className="testimonial-image" />
                </div>
                <div className="testimonial-content">
                    <div>
                        <h3 className="name">{testimonials[activeIndex].name}</h3>
                        <p className="designation">{testimonials[activeIndex].designation}</p>
                        <p className="quote">{testimonials[activeIndex].quote}</p>
                    </div>
                    <div className="arrow-buttons">
                        <button className="arrow-button" onClick={() => updateTestimonial(-1)}>❮</button>
                        <button className="arrow-button" onClick={() => updateTestimonial(1)}>❯</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

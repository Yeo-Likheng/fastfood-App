const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Visit Us Today</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Find us at our locations or order online for delivery
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-warm-accent border-none shadow-pop">
            <div>
              <h2 className="text-xl font-bold text-primary text-center">Downtown Location</h2>
            </div>
            <div className="text-center">
              <p className="text-primary/80 mb-4">
                123 Main Street<br />
                Downtown City, DC 12345
              </p>
              <p className="text-primary font-semibold mb-4">
                Open Daily: 11 AM - 10 PM
              </p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Directions
              </button>
            </div>
          </div>
          
          <div className="bg-warm-accent border-none shadow-pop">
            <div>
              <h2 className="text-xl font-bold text-primary text-center">Downtown Location</h2>
            </div>
            <div className="text-center">
              <p className="text-primary/80 mb-4">
                123 Main Street<br />
                Downtown City, DC 12345
              </p>
              <p className="text-primary font-semibold mb-4">
                Open Daily: 11 AM - 10 PM
              </p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Directions
              </button>
            </div>
          </div>
          
          <div className="bg-warm-accent border-none shadow-pop">
            <div>
              <h2 className="text-xl font-bold text-primary text-center">Downtown Location</h2>
            </div>
            <div className="text-center">
              <p className="text-primary/80 mb-4">
                123 Main Street<br />
                Downtown City, DC 12345
              </p>
              <p className="text-primary font-semibold mb-4">
                Open Daily: 11 AM - 10 PM
              </p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Directions
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">Questions? Call us!</h3>
          <p className="text-3xl font-bold text-accent">(555) 123-TASTE</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import ContactImg from '/public/Hands Contact.png';

const NotFoundContact = () => {
    return (
      <div className="flex h-[80vh] items-center justify-center gap-4">
        <div>
          <img src={ContactImg} />
        </div>
        <h3 className="text-2xl font-semibold text-white"> Contact Not Found</h3>
      </div>
    );
  };
  
  export default NotFoundContact;
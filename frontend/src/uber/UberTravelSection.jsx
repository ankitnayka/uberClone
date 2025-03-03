export default function UberTravelSection() {
    const cards = [
      {
        img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_384/v1689609697/assets/b8/c39de0-6e13-485b-ba45-66511170c62a/original/SS_Commuter.jpg", // Replace with actual image URL
        title: "Ride Options",
        description:
          "There’s more than one way to move with Uber, no matter where you are or where you’re headed next.",
        buttonText: "Search ride options",
      },
      {
        img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_384/v1692743890/assets/f9/ba27c4-665c-4cca-8161-9e3f87f49994/original/Airport-rides.png", // Replace with actual image URL
        title: "700+ airports",
        description:
          "You can request a ride to and from most major airports. Schedule a ride to the airport for one less thing to worry about.",
        buttonText: "Search airports",
      },
      {
        img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_384/v1692743834/assets/54/f60161-cf6b-4401-a309-8bb196c0014c/original/U_CoastalCalifornia_White_Final-%281%29.jpg", // Replace with actual image URL
        title: "10,000+ cities",
        description:
          "The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.",
        buttonText: "Search cities",
      },
    ];
  
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Use the Uber app to help you travel your way
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden p-4"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-auto  object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{card.title}</h2>
              <p className="text-gray-600 mt-2">{card.description}</p>
              <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg w-full hover:bg-gray-800">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
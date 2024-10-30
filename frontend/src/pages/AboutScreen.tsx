const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      <p className="text-lg text-gray-600 mb-4 text-center max-w-2xl">
        Welcome to our e-commerce platform! We are dedicated to providing the
        best shopping experience for our customers, offering a wide range of
        products at competitive prices. Our mission is to make online shopping
        simple and enjoyable for everyone.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Our Core Values
      </h2>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>Customer Satisfaction</li>
        <li>Quality Products</li>
        <li>Integrity and Transparency</li>
        <li>Innovation</li>
        <li>Sustainability</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const teamMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "CEO",
    image: "https://via.placeholder.com/150", // Replace with actual image URLs
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "CTO",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Charlie Brown",
    role: "CMO",
    image: "https://via.placeholder.com/150",
  },
];

export default About;
